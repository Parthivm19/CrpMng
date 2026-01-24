import {
  ArrowUpRight,
  Droplets,
  Recycle,
  BatteryCharging,
  Filter,
} from "lucide-react";
import { WaterUsage } from "./BarVarients/waterBar";

export const WaterCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Treated Water</h2>
        <button className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2">
          <ArrowUpRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="flex justify-between space-x-4 mb-6">
        <div>
          <p className="text-4xl font-bold text-gray-900">1200 L</p>
          <p className="text-sm text-gray-500 mb-2">Water Treated</p>
        </div>
        <div className="flex text-gray-500 space-x-6">
          <div className="flex flex-col items-center">
            <Droplets className="text-blue-600" />
            <p className="text-xs">UF: 500 L</p>
          </div>
          <div className="flex flex-col items-center">
            <Recycle className="text-green-600" />
            <p className="text-xs">75% Reused</p>
          </div>
          <div className="flex flex-col items-center">
            <BatteryCharging className="text-gray-700" />
            <p className="text-xs">22 kWh</p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-5">
        <WaterUsage />
        <div className="px-5 border-1 border-gray-100" />
        <div className="flex mt-6 space-x-5 justify-center items-center">
          <div className="flex flex-col items-center">
            <Droplets />
            <p className="text-xs">Treated</p>
          </div>
          <div className="flex flex-col items-center">
            <Filter />
            <p className="text-xs">Ultra Filtered</p>
          </div>
          <div className="flex flex-col items-center">
            <Recycle />
            <p className="text-xs">Reused %</p>
          </div>
        </div>
      </div>
    </div>
  );
};
