import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function WaterUsage() {
  const waterData = [
    {
      date: "20/8/25",
      treated: 1000,
      ultra_filtered: 400,
      reused_percent: 70,
      electricity: 18,
    },
    {
      date: "21/8/25",
      treated: 1200,
      ultra_filtered: 500,
      reused_percent: 72,
      electricity: 20,
    },
    {
      date: "22/8/25",
      treated: 950,
      ultra_filtered: 350,
      reused_percent: 65,
      electricity: 16,
    },
    {
      date: "23/8/25",
      treated: 1400,
      ultra_filtered: 600,
      reused_percent: 78,
      electricity: 22,
    },
    {
      date: "24/8/25",
      treated: 1100,
      ultra_filtered: 420,
      reused_percent: 74,
      electricity: 19,
    },
    {
      date: "25/8/25",
      treated: 1300,
      ultra_filtered: 480,
      reused_percent: 76,
      electricity: 21,
    },
    {
      date: "26/8/25",
      treated: 1050,
      ultra_filtered: 390,
      reused_percent: 69,
      electricity: 17,
    },
  ];
  const totals = waterData.map((d) => d.treated);
  const maxTreated = Math.max(...totals);

  const data = {
    labels: waterData.map((d) => d.date),
    datasets: [
      {
        label: "Treated Water (L)",
        data: totals,
        backgroundColor: totals.map((val) =>
          val === maxTreated ? "#3b82f6" : "#93c5fd",
        ),
        borderRadius: 10,
        barThickness: 16,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw as number} L`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
      },
      y: {
        ticks: { display: false },
        grid: { display: false },
        border: { display: false },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
