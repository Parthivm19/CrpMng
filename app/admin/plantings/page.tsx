"use client";
import dynamic from "next/dynamic";
import { selectedPlot } from "../utils/types";
import axios from "axios";
import { useState, useEffect } from "react";
import { colorData } from "../components/dashBoard";
import PlotSideBar from "./components/sideBar";
export default function CropsPage() {
  const MapCard = dynamic(
    () =>
      import("@/app/admin/components/CardVarients/MapCard").then(
        (mod) => mod.MapCardClient,
      ),
    {
      ssr: false,
    },
  );
  const [datacolors, setDataColors] = useState<colorData>({});
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/getMapDetails",
      );
      setPlots(res.data.data);
      const resp = await await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/getQuickCropsOverview",
      );
      setDataColors(resp.data.data);
      console.log(resp.data.data);
    };
    fetchData();
  }, []);
  const [plots, setPlots] = useState<selectedPlot[]>([]);
  const [selectedPlot, setSelectedPlot] = useState<selectedPlot | null>(null);
  return (
    <div className="grid grid-cols-7 w-full mt-4 h-[calc(100vh-6rem)] ">
      <PlotSideBar plots={plots} setSelectedPlot={setSelectedPlot} />
      <div className="col-span-5 bg-gray-600/10 p-8 w-full h-12/12 overflow-auto">
        <div className="h-full w-full">
          <MapCard
            goToPlot={selectedPlot}
            dataColors={datacolors}
            showFilter={false}
            Plots={plots}
          />
        </div>
      </div>
    </div>
  );
}
