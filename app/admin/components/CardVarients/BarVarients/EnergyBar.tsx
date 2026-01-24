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

export function EnergyUsage() {
  const energyData = [
    {
      date: "20/8/25",
      energy_generated_by_dg: 10,
      energy_generated_by_solar: 15,
      energy_generated_by_grid: 20,
    },
    {
      date: "21/8/25",
      energy_generated_by_dg: 8,
      energy_generated_by_solar: 12,
      energy_generated_by_grid: 18,
    },
    {
      date: "22/8/25",
      energy_generated_by_dg: 5,
      energy_generated_by_solar: 20,
      energy_generated_by_grid: 25,
    },
    {
      date: "23/8/25",
      energy_generated_by_dg: 12,
      energy_generated_by_solar: 10,
      energy_generated_by_grid: 22,
    },
    {
      date: "24/8/25",
      energy_generated_by_dg: 7,
      energy_generated_by_solar: 18,
      energy_generated_by_grid: 19,
    },
    {
      date: "25/8/25",
      energy_generated_by_dg: 15,
      energy_generated_by_solar: 12,
      energy_generated_by_grid: 28,
    },
    {
      date: "26/8/25",
      energy_generated_by_dg: 6,
      energy_generated_by_solar: 14,
      energy_generated_by_grid: 21,
    },
  ];

  const totals = energyData.map(
    (d) =>
      d.energy_generated_by_dg +
      d.energy_generated_by_solar +
      d.energy_generated_by_grid,
  );
  const maxEnergy = Math.max(...totals);

  const data = {
    labels: energyData.map((d) => d.date),
    datasets: [
      {
        label: "Total Energy",
        data: totals,
        backgroundColor: totals.map((d, i) =>
          d === maxEnergy ? "#facc15" : "#000",
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
          label: (ctx) => `${ctx.raw as number} kWh`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: { display: false },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
