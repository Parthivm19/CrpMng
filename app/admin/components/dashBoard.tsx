"use client";
import React from "react";
import DashboardHero from "./Dashhero";
import { CropCard } from "./CardVarients/CropCard";
import { MapCard } from "./CardVarients/MapCard";
export default function AdminDashboard() {
  const data = [
    <CropCard key={1} />,
    <MapCard key={2} />,
    // <EnergyCard key={1} />,
    // <WasteCard key={2}/>,
    // <TransportCard key={3}/>,
    // <GoodsCard key={4}/>,
    // <FoodCard key={5}/>,
    // <WaterCard key={6}/>,
    // <WaterConsumedCard key={7}/>,
  ];
  return (
    <>
      <DashboardHero />
      <div className="mt-12 px-10 gap-1 grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        {data.map((item, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>
    </>
  );
}
