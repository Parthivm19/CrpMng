"use client";
import React from "react";
import FarmersHero from "./Dashhero";
import { CropCard } from "./CardVarients/CropCard";
import dynamic from "next/dynamic";

const MapCard = dynamic(
  () => import("./CardVarients/MapCard").then((mod) => mod.MapCardClient),
  {
    ssr: false,
  },
);

export default function AdminDashboard() {
  const data = [<CropCard key={1} />, <MapCard key={2} />];
  return (
    <>
      <FarmersHero />
      <div className="mt-12 px-10 gap-1 grid grid-cols-2 md:grid-cols-4 overflow-hidden">
        {data.map((item, i) => (
          <React.Fragment key={i}>{item}</React.Fragment>
        ))}
      </div>
    </>
  );
}
