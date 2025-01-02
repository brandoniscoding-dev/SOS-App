import * as z from "zod";

export enum Steps {
  INCIDENT_DETAILS = 0,
  LOCATION = 1,
  DATETIME = 2,
  WITNESS_INFO = 3,
}

export const reportSchema = z.object({
  incidentType: z.string().min(1, "Please specify the type of incident"),
  description: z.string().min(10, "Please provide a detailed description"),
  location: z.string().min(1, "Location is required"),
  dateTime: z.date(),
  witnessName: z.string().optional(),
  witnessContact: z.string().optional(),
});

export type ReportFormData = z.infer<typeof reportSchema>;
