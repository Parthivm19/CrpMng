import { CropsGrowing } from "./BarVarients/CropsPie";
import { ArrowUpRight } from "lucide-react";
export const CropCard = () => {
  return (
    <div className="w-full col-span-2 bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Crops Overview </h2>
        <button className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2">
          <ArrowUpRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <CropsGrowing />
    </div>
  );
};
