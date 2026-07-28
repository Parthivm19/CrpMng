"use client";
type Tab = "details" | "plots";
import axios from "axios";
import { useState } from "react";
import { User, Layers, ListFilterPlus, PlusCircle, Plus } from "lucide-react";
import { newCreationForms } from "@/app/admin/utils/newCreation";
import {
  FullFarmerDetails,
  plotType,
  selectedPlot,
} from "@/app/admin/utils/types";
import { BigPageForm } from "@/app/admin/components/BigPageForm";
import dynamic from "next/dynamic";
import { colorData } from "@/app/admin/components/dashBoard";
import { Form } from "@/app/admin/components/Form";
import PlotInfoCard from "@/app/admin/plantings/components/plotInfoCard";
import { useParams } from "next/navigation";
const MapCard = dynamic(
  () =>
    import("@/app/admin/components/CardVarients/MapCard").then(
      (mod) => mod.MapCardClient,
    ),
  {
    ssr: false,
  },
);
function parseAndValidatePoints(input: any): number[][] | null {
  try {
    const parsed = typeof input === "string" ? JSON.parse(input) : input;
    if (!Array.isArray(parsed)) return null;
    for (const point of parsed) {
      if (!Array.isArray(point)) return null;
      if (point.length !== 2) return null;
      if (typeof point[0] !== "number" || typeof point[1] !== "number") {
        return null;
      }
    }
    return parsed as number[][];
  } catch (err) {
    return null;
  }
}
export const FarmerMain = ({
  isEditing,
  farmer,
  setFarmer,
  plots,
  colorData,
  handleSave,
  handleCancel,
}: {
  isEditing: boolean;
  farmer: FullFarmerDetails;
  colorData: colorData;
  plots: selectedPlot[];
  setFarmer: React.Dispatch<React.SetStateAction<FullFarmerDetails>>;
  handleSave: () => void;
  handleCancel: () => void;
}) => {
  const params=useParams() 
  console.log(params,"OKOK")
  const [tab, setTab] = useState<Tab>("details");
  const [selectPlot, setSelectedPlot] = useState<selectedPlot | null>(null);
  const [showOverLay, setShowOverLay] = useState(false);
  const [formData, setFormData] = useState<plotType>({
    agentId: 0,
    cropId:0,
    farmerId: parseInt(params?.id as string),
    location: "",
    plotImage: "",
    plotCords: [],
  });

  return (
    <div className="flex-1 min-w-0 self-stretch max-h-[calc(100vh-8rem)]">
      {showOverLay && (
        <div className="fixed top-0 right-0 z-90 flex items-center justify-center w-screen h-screen ">
          <div className="bg-black/80 w-full h-full" onClick={()=>setShowOverLay(false)}/>
          <Form
            activity={newCreationForms["Plot"]}
            formData={formData}
            refreshData={() => {
              console.log("Refresh triggered");
            }}
            setFormData={setFormData}
            setShowOverLay={setShowOverLay}
            onAdd={async (item: any) => {
              try {
                const validCordsArray = parseAndValidatePoints(
                  item.plotCords || formData.plotCords,
                );

                if (!validCordsArray) {
                  console.error(
                    "Validation failed: plotCords must be a nested array of 2 numbers.",
                  );
                  alert(
                    "Please enter valid coordinates in the format: [[lat, lng], [lat, lng]]",
                  );
                  return 400;
                }

                const payload = {
                  ...item,
                  plotCords: validCordsArray,
                };

                await axios.post(
                  process.env.NEXT_PUBLIC_BACKEND_URL + "/addPlot",
                  payload,
                );

                return 200;
              } catch (err) {
                console.error("API Error:", err);
                return 500;
              }
            }}
          />
        </div>
      )}
      <div className="bg-white rounded-[2rem] shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)] border border-stone-100 overflow-hidden h-full flex flex-col">
        {" "}
        <div className="flex items-end gap-1 border-b border-stone-100 px-6 pt-4 bg-stone-50/40">
          {(["details", "plots"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative flex items-center gap-2 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] rounded-t-xl transition-all ${
                tab === t
                  ? "bg-white text-stone-900 shadow-[0_-1px_8px_rgba(0,0,0,0.06)] border border-b-white border-stone-100"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              {t === "details" ? <User size={11} /> : <Layers size={11} />}
              Farmer {t === "details" ? "Details" : "Plots"}
              {tab === t && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-green-500 rounded-t-full" />
              )}
            </button>
          ))}

          {isEditing && (
            <span className="ml-auto mb-3 text-[8px] font-black uppercase tracking-widest text-green-600 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full animate-pulse">
              ✦ Editing Mode
            </span>
          )}
        </div>
        {tab === "details" && (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <p className="text-[8px] font-black uppercase tracking-[0.28em] text-green-600 mb-1">
                Registration Process
              </p>
              <h3 className="text-xl font-black text-stone-900">
                Farmer Registration Details
              </h3>
              <p className="text-xs text-stone-400 mt-1 font-medium">
                All information submitted during onboarding
              </p>
            </div>
            {
              <BigPageForm<FullFarmerDetails>
                activity={newCreationForms["Farmer"]}
                data={farmer}
                isEditing={isEditing}
                setData={setFarmer}
                handleSave={handleSave}
                handleCancel={handleCancel}
              />
            }
          </div>
        )}
        {tab === "plots" && (
          // <div className="flex flex-col items-center justify-center py-28 gap-4 text-center px-8">
          //   <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100">
          //     <Layers size={26} className="text-green-600" />
          //   </div>
          //   <h3 className="text-xl font-black text-stone-800">Farmer Plots</h3>
          //   <p className="text-sm text-stone-400 max-w-xs font-medium leading-relaxed">
          //     Plot mapping and field management for{" "}
          //     <span className="font-bold text-stone-600">
          //       {farmer.farmerName}
          //     </span>{" "}
          //     will appear here.
          //   </p>
          //   <span className="text-[9px] font-black uppercase tracking-[0.25em] text-green-600 bg-green-50 border border-green-200 px-4 py-2 rounded-full mt-1">
          //     Coming Soon
          //   </span>
          // </div>
          <div className="w-full relative h-[calc(100vh-13rem)] grid grid-cols-1 md:grid-cols-2">
            <div className="w-full h-full">
              <MapCard
                goToPlot={selectPlot}
                dataColors={colorData}
                Plots={plots}
                showFilter={true}
              />
            </div>
            <div className="flex flex-col px-8 overflow-x-hidden overflow-y-scroll">
              <div className="flex items-center border-b py-2 border-gray-300  justify-between">
                <div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      Assigned Plots
                    </p>
                    <p className="text-xs mt-[-4px] text-gray-600">
                      {plots.length} active plots available
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-green-900/80">
                  <ListFilterPlus className="w-4 h-4" />
                  <p className="text-sm">Sort &Filter</p>
                </div>
              </div>
              <div>
                {plots.map((plot, i) => (
                  <PlotInfoCard
                    setSelectedPlot={setSelectedPlot}
                    plot={plot}
                    key={i}
                  />
                ))}
                <div className="absolute bottom-10 right-10">
                  <button
                    onClick={() => setShowOverLay(!showOverLay)}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white text-green-500 shadow-md hover:bg-green-50 hover:border-green-400 hover:text-green-600 hover:shadow-lg active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  >
                    <Plus className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
