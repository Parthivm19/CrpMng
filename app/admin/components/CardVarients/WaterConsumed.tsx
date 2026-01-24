import {
  ArrowUpRight,
  GlassWater,
  Shovel,
  Archive,
  BrushCleaning,
  Factory,
  Filter,
} from "lucide-react";
import { WaterUsageGraph } from "./BarVarients/waterConsumed";
export const WaterConsumedCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Water Usage</h2>
        <button className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2">
          <ArrowUpRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="flex justify-between space-x-4 mb-6">
        <div>
          <p className="text-4xl font-bold text-gray-900">1200 L</p>
          <p className="text-sm text-gray-500 mb-2">Water Consumed</p>
        </div>
        <div className="flex text-gray-500 space-x-6">
          <div className="flex flex-col items-center">
            <GlassWater className="text-blue-600" />
            <p className="text-xs">500 L</p>
          </div>
          <div className="flex flex-col items-center">
            <Archive className="text-amber-800" />
            <p className="text-xs">75 L</p>
          </div>
          <div className="flex flex-col items-center">
            <Shovel className="text-green-600" />
            <p className="text-xs">75 L</p>
          </div>
          <div className="flex flex-col items-center">
            <Factory className="text-gray-700" />
            <p className="text-xs">22 L</p>
          </div>
          <div className="flex flex-col items-center">
            <BrushCleaning className="text-amber-700" />
            <p className="text-xs">22 L</p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-5">
       <WaterUsageGraph/>
        <div className="px-5 border-1 border-gray-100" />
        <div className="flex mt-6 space-x-5 justify-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-sm">Borewell</p>
            <p className="text-xs">120L</p>
          </div>
          <div className="flex flex-col items-center">
             <p className="text-sm">KWA</p>
            <p className="text-xs">90L</p>
          </div>
          <div className="flex flex-col items-center">
             <p className="text-sm">Rainwater</p>
            <p className="text-xs">30L</p>
          </div>
           <div className="flex flex-col items-center">
             <p className="text-sm">TankWater</p>
            <p className="text-xs">60L</p>
          </div>
        </div>
      </div>
    </div>
  );
};
