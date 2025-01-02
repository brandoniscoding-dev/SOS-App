"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Report, ReportStatus } from "@prisma/client";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ReportChartProps {
  reports: Report[];
}

export default function ReportChart({ reports }: ReportChartProps) {
  const chartData = {
    labels: Object.values(ReportStatus),
    datasets: [
      {
        label: "Number of Reports",
        data: Object.values(ReportStatus).map((status) =>
          reports.filter((report) => report.status === status).length
        ),
        backgroundColor: ["#f59e0b", "#3b82f6", "#10b981", "#6b7280"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Reports Distribution by Status",
      },
    },
  };

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-800">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
}
