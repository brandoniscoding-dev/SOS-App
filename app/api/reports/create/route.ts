import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ReportType, ReportStatus } from "@prisma/client";

export async function POST(request: Request) {
  try {
    // Étape 1 : Validation des données d'entrée
    const {
      reportId,
      type,
      specificType,
      title,
      description,
      location,
      latitude,
      longitude,
      image,
      status,
    } = await request.json();

    if (!reportId || !type || !title || !description || !specificType) {
      throw new Error("Missing required fields: reportId, type, title, description, or specificType");
    }

    // Vérification des enums
    if (!Object.values(ReportType).includes(type)) {
      throw new Error(`Invalid report type provided: ${type}`);
    }

    const parsedStatus = (status as ReportStatus) || ReportStatus.PENDING;
    if (!Object.values(ReportStatus).includes(parsedStatus)) {
      throw new Error(`Invalid status provided: ${status}`);
    }

    // Étape 2 : Création du rapport
    let report;
    try {
      report = await prisma.report.create({
        data: {
          reportId,
          type: type as ReportType,
          title,
          description,
          reportType: specificType,
          location: location || null,
          latitude: latitude ? parseFloat(latitude) : null,
          longitude: longitude ? parseFloat(longitude) : null,
          image: image || null,
          status: parsedStatus,
        },
      });
    } catch (prismaError: any) {
      // Identifier les erreurs Prisma
      if (prismaError.code === "P2002" && prismaError.meta?.target?.includes("reportId")) {
        throw new Error("Duplicate reportId: A report with the same ID already exists.");
      }
      throw new Error(`Database error: ${prismaError.message}`);
    }

    // Étape 3 : Réponse réussie
    return NextResponse.json({
      success: true,
      reportId: report.reportId,
      message: "Report submitted successfully",
    });
  } catch (error: any) {
    // Étape 4 : Gestion des erreurs globales
    console.error("Error processing request:", error.message);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "An unexpected error occurred.",
      },
      { status: error.status || 500 }
    );
  }
}
