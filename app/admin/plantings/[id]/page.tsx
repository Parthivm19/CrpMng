"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  Info,
  Sprout,
  FlaskConical,
  SlidersHorizontal,
  ChevronDown,
  Calendar,
  TrendingUp,
  Droplet,
  Recycle,
} from "lucide-react";
import axios from "axios";
import dynamic from "next/dynamic";
import { fullPlotDetails, selectedPlot } from "../../utils/types";
import { AreaCalculator } from "../../components/CardVarients/utils/mapUtils";
 const MapCard = dynamic(
    () =>
      import("../../components/CardVarients/MapCard").then(
        (mod) => mod.MapCardClient,
      ),
    {
      ssr: false,
    },
  );
interface GrowthStage {
  id: string;
  name: string;
  durationDays: number;
}

export default function PlotManagementPage() {
  const [stageMapTab, setStageMapTab] = useState<"standard" | "custom">(
    "standard"
  );
  const params=useParams()
  const id=parseInt(params.id as string)
  const [plot,setPlot]=useState<fullPlotDetails|null>(null)
  const [plotState, setPlotState] = useState<"active" | "fallow">("active");
  useEffect(()=>{
    const fetchData=async()=>{
        const res=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/getPlotDetails/"+id)
        console.log(res.data.data)
        setPlot(res.data.data)
    }
    fetchData()
  },[])
  const [stages, setStages] = useState<GrowthStage[]>([
    { id: "1", name: "Emergence", durationDays: 14 },
    { id: "2", name: "Vegetative (V1-V6)", durationDays: 35 },
  ]);

  const removeStage = (id: string) => {
    setStages((prev) => prev.filter((s) => s.id !== id));
  };

  if(plot?.crop?.cropName&& plot?.crop?.cropColor){
     const colorDt: Record<string, string> = {
  [plot.crop.cropName]: plot.crop.cropColor,
};
  return (
    <div>
      <main className="mx-auto max-w-[1536px] px-8 py-8">
        <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
          <span>Plot</span>
          <ChevronRight className="h-3.5 w-3.5" />
          <span>#{plot.plotId}</span>
        </div>
         <div className="flex rounded-lg border max-w-2xl my-2 max-h-12 border-slate-200 bg-slate-100 p-1">
            <button
              onClick={() => setPlotState("active")}
              className={`flex-1 rounded-md py-2.5 text-sm font-medium transition ${
                plotState === "active"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Info
            </button>
            <button
              onClick={() => setPlotState("fallow")}
              className={`flex-1 rounded-md py-2.5 text-sm font-medium transition ${
                plotState === "fallow"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Enter Data
            </button>
          </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_440px]">
         
          {/* Left column */}
          <div className="flex flex-col gap-6">
               <Image width={1000} height={1000} src={plot.plotImage} alt="Plot Image" className="w-full max-h-46 rounded-2xl object-cover"/>
            <Card>
                <CardHeading icon={<Info className="h-5 w-5" />} title="General Information" />

      <div className="grid grid-cols-2 gap-5">
        <div>
          <FieldLabel>Farmer Name</FieldLabel>
          <p
          
            className={fieldInputClasses}
          >{plot.farmerName}</p>
        </div>
        <div>
          <FieldLabel>Area m²</FieldLabel>
          <p
            className={fieldInputClasses}
        >{AreaCalculator(plot.plotCords)} m²</p>
        </div>
           <div>
          <FieldLabel>Agent Name</FieldLabel>
          <p
          
            className={fieldInputClasses}
          >{plot.agentName}</p>
        </div>
        <div>
          <FieldLabel>Plot Location</FieldLabel>
          <p
            className={fieldInputClasses}
        >{plot.location}</p>
        </div>
      </div>
            </Card>
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm  min-h-110  max-h-[30rem] overflow-x-hidden overflow-y-scroll">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Sprout className="h-5 w-5 text-emerald-800" />
          <h2 className="text-xl font-semibold text-slate-900">
            Crop Data
          </h2>
        </div>
      </div>
      <div className="rounded-xl  bg-slate-50 p-5">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <FieldLabel>Primary Crop</FieldLabel>
            <p className="relative w-full rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100">
                {plot.crop.cropName}
            </p>
          </div>

          <div>
            <FieldLabel>Start Date</FieldLabel>
            <div className="relative">
              <p
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100">12/07/2025</p>
              <p/>
              <Calendar className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Growth stage configuration */}
      <div className="mt-6 mb-3 flex items-center justify-between">
        <h3 className="text-xs font-semibold tracking-wide text-slate-500">
          Stages
        </h3>
       
      </div>
              
      <div className="flex  flex-col gap-3">
        {plot.cropData[0].cropStages.map((stage,i) => (
          <div
            key={i}
            className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
          >
            <div className="grid flex-1 grid-cols-2 gap-5">
              <div>
                <FieldLabel>Stage Name</FieldLabel>
                <p className="text-sm font-medium text-slate-900">
                  {stage.stagename}
                </p>
              </div>
              <div>
                <FieldLabel>Duration (Days)</FieldLabel>
                <p className="text-sm font-medium text-slate-900">
                  {stage.duration}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>

          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
                                    <OperationalStatusCard
              plotState={plotState}
              setPlotState={setPlotState}
            />
             <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-sm">
                
      {/* Aerial field backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-950"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 40px)",
        }}
      />

      <div className="absolute h-full w-full rounded-xl bg-white/90 px-4 py-3 backdrop-blur-sm">
        {/* <MapCard Plots={[plot]} showFilter={false} dataColors={colorDt}/> */}
      </div>
    </div>
            <SoilSpecificationsCard />
            

          </div>
        </div>
      </main>
    </div>
  );
}
}


// ---------------------------------------------------------------------------
// Shared card shell
// ---------------------------------------------------------------------------

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}

function CardHeading({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span className="text-emerald-800">{icon}</span>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block text-xs font-semibold tracking-wide text-slate-500">
      {children}
    </label>
  );
}

const fieldInputClasses =
  "w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-2 focus:ring-emerald-100";


function OperationalStatusCard({
  plotState,
  setPlotState,
}: {
  plotState: "active" | "fallow";
  setPlotState: (state: "active" | "fallow") => void;
}) {
  return (
    <Card>
      <CardHeading
        icon={<SlidersHorizontal className="h-5 w-5" />}
        title="Operational Status"
      />

      <div className="grid grid-cols-2 gap-5">
        <div>
          <FieldLabel>Plot State</FieldLabel>
          <div className="flex rounded-lg border border-slate-200 bg-slate-100 p-1">
            <button
              onClick={() => setPlotState("active")}
              className={`flex-1 rounded-md py-2.5 text-sm font-medium transition ${
                plotState === "active"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setPlotState("fallow")}
              className={`flex-1 rounded-md py-2.5 text-sm font-medium transition ${
                plotState === "fallow"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Fallow
            </button>
          </div>
        </div>

        <div>
          <FieldLabel>Resource Priority</FieldLabel>
          <div className="relative">
            <select
              defaultValue="High Priority (Irrigation Focus)"
              className={`${fieldInputClasses} appearance-none pr-10`}
            >
              <option>High Priority (Irrigation Focus)</option>
              <option>Standard Priority</option>
              <option>Low Priority</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          </div>
        </div>
      </div>
    </Card>
  );
}


// ---------------------------------------------------------------------------
// Soil Specifications card
// ---------------------------------------------------------------------------

interface SoilSpec {
  label: string;
  value: string;
  icon: React.ReactNode;
  badge?: { text: string; tone: "good" };
}

function SoilSpecificationsCard() {
  const specs: SoilSpec[] = [
    {
      label: "pH Level",
      value: "6.8 (Optimal)",
      icon: null,
      badge: { text: "Good", tone: "good" },
    },
    {
      label: "Nitrogen Content",
      value: "45 mg/kg",
      icon: <TrendingUp className="h-4.5 w-4.5 text-slate-500" />,
    },
    {
      label: "Drainage Rating",
      value: "Class A (Well Drained)",
      icon: <Droplet className="h-4.5 w-4.5 text-slate-500" />,
    },
    {
      label: "Organic Matter",
      value: "4.2%",
      icon: <Recycle className="h-4.5 w-4.5 text-slate-500" />,
    },
  ];

  return (
    <Card>
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <FlaskConical className="h-5 w-5 text-emerald-800" />
          <h2 className="text-xl font-semibold text-slate-900">
            Soil Specifications
          </h2>
        </div>
        <button className="text-sm font-medium text-emerald-800 hover:text-emerald-900">
          Edit
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
          >
            <div>
              <p className="text-xs font-medium text-slate-500">
                {spec.label}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {spec.value}
              </p>
            </div>

            {spec.badge ? (
              <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-800">
                {spec.badge.text}
              </span>
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                {spec.icon}
              </span>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}