import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export function WaterUsageGraph() {
  const waterUsageData = [
    { date: "21/9/25", source: "Borewell", total: 22000, per_capita: 110, usage: "Domestic" },
    { date: "22/9/25", source: "Rainwater", total: 8000, per_capita: 50, usage: "Gardening" },
    { date: "22/9/25", source: "Borewell", total: 20000, per_capita: 100, usage: "Domestic" },
    { date: "23/9/25", source: "Tanker", total: 25000, per_capita: 140, usage: "Industrial" },
    { date: "24/9/25", source: "Borewell", total: 18000, per_capita: 90, usage: "Cleaning" },
    { date: "25/9/25", source: "Borewell", total: 21000, per_capita: 105, usage: "Domestic" },
    { date: "26/9/25", source: "Tanker", total: 28000, per_capita: 130, usage: "Industrial" },
  ];
  const totals = waterUsageData.map((d) => d.total);
  const maxTotal = Math.max(...totals);

  const data = {
    labels: waterUsageData.map((d) => `${d.date} `),
    datasets: [
      {
        label: "Water Consumption (L)",
        data: totals,
        backgroundColor: totals.map((val) =>
          val === maxTotal ? "#3b82f6" : "#93c5fd"
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
          label: (ctx) => `${ctx.raw as number} L used`,
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
