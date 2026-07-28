import { selectedPlot } from "../../utils/types";
import {
  HatGlasses,
  LandPlot,
  Pencil,
  MapPin,
  Sprout,
  Tractor,
  Eye,
} from "lucide-react";
import Image from "next/image";
import { AreaCalculator } from "../../components/CardVarients/utils/mapUtils";
import { useState } from "react";
export default function PlotInfoCard({
  plot,
  setSelectedPlot,
}: {
  plot: selectedPlot;
  setSelectedPlot: React.Dispatch<React.SetStateAction<selectedPlot | null>>;
}) {
  //   const statusColor =
  //     plot.status === "ACTIVE"
  //       ? "bg-green-100 text-green-700"
  //       : "bg-yellow-100 text-yellow-700";
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div
      onClick={() => {setSelectedPlot(plot);setIsOpen(!isOpen);}}
      className="flex flex-col gap-4 rounded-2xl my-4 border border-gray-300 bg-white p-5 shadow-sm transition duration-150 hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center overflow-hidden">
            <Image
              alt="plotImage"
              src={plot.plotImage}
              width={1000}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Plot #{plot.plotId}
            </h3>
            <div className="flex space-x-4">
              <span className="mt-0.5 flex text-sm text-gray-500">
                <Tractor className="w-5 h-5" />: {plot.farmerName}
              </span>
              <span className="mt-0.5 flex text-sm text-gray-500">
                {" "}
                <HatGlasses className="w-5 h-5" /> {plot.agentName}
              </span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <span className="whitespace-nowrap rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
            Active
          </span>
          <span
            className="whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              color: plot.crop?.cropColor,
              backgroundColor: `${plot.crop?.cropColor}2A`,
            }}
          >
            {plot.crop?.cropColor}
          </span>
        </div>
      </div>
      <div className="border-t border-gray-200" />
      <div className="grid grid-cols-3 gap-4 items-center">
        <div className="flex flex-col items-center">
          <span className="text-xs flex items-center space-x-1 font-semibold uppercase tracking-wider text-gray-400">
            <LandPlot />
            <p>Plot Area</p>
          </span>
          <p className="mt-1 text-base font-bold text-gray-900">
            {AreaCalculator(plot.plotCords)} m²
          </p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs flex items-center space-x-1 font-semibold uppercase tracking-wider text-gray-400">
            <MapPin className="h-4 w-4" />
            <p> Location</p>
          </span>
          <p className="mt-1flex items-center gap-1 text-base font-bold ">
            {plot.location}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-xs flex items-center space-x-1 font-semibold uppercase tracking-wider text-gray-400">
            <Sprout /> <p>Current Crop Stage</p>
          </span>
          <p className="mt-1 text-base font-bold text-gray-900">Unassigned</p>
        </div>
      </div>
       <div
    className="overflow-hidden transition-all duration-300 ease-in-out"
    style={{
      maxHeight: isOpen ? "80px" : "0px",
      opacity: isOpen ? 1 : 0,
      marginTop: isOpen ? "1rem" : "0px",
    }}
  >
    <div className="border-t border-gray-200 pt-3 flex gap-3">
      <button
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
      >
        <Pencil className="w-4 h-4" />
        Edit plot
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 transition"
      >
        <Eye className="w-4 h-4" />
        Manage plot
      </button>
    </div>
  </div>
    </div>
  );
}
