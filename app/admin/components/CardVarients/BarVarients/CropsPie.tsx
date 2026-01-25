import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

export function CropsGrowing() {
  const cropsData = [
    { name: "CHILLI", amount: 34500, color: "#facc15" },
    { name: "TURMERIC", amount: 28900, color: "#d4a017" },
    { name: "GINGER", amount: 36400, color: "#84a029" },
    { name: "MARIGOLD", amount: 27200, color: "#6b8e23" },
  ];

  const total = cropsData.reduce((sum, c) => sum + c.amount, 0);
  const percentages = cropsData.map((c) =>
    ((c.amount / total) * 100).toFixed(0),
  );

  const data = {
    labels: cropsData.map((c) => c.name),
    datasets: [
      {
        data: cropsData.map((c) => c.amount),
        backgroundColor: cropsData.map((c) => c.color),
        borderColor: "#fff",
        borderWidth: 3,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw as number}`,
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        padding: 10,
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "40px",
        alignItems: "center",
      }}
    >
      <div style={{ flex: 1, maxWidth: "400px" }}>
        <Doughnut data={data} options={options} />
      </div>

      <div style={{ flex: 1 }}>
        <h2 style={{ margin: "0 0 30px 0", fontSize: "24px" }}>
          Crops Growing
        </h2>
        {cropsData.map((crop, index) => (
          <div key={crop.name} style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "10px",
                  backgroundColor: crop.color,
                }}
              ></div>
              <span style={{ fontSize: "14px", fontWeight: "500" }}>
                {crop.name}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: crop.color,
                }}
              >
                {percentages[index]}%
              </span>
            </div>
            <div style={{ fontSize: "13px", color: "#666" }}>
              {crop.amount.toLocaleString()} units
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
