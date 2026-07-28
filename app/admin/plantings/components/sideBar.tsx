import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  Sprout,
  Plus,
  Search,
  Filter,
  SlidersHorizontal,
} from "lucide-react";
import { Plots } from "@/app/components/utils/dummyData";
import PlotInfoCard from "./plotInfoCard";
import { selectedPlot } from "../../utils/types";
import axios from "axios";
const FILTER_OPTIONS = {
  soil: ["Clay", "Sandy", "Loam", "Silt", "Peat", "Chalky"],
  crop: ["Wheat", "Rice", "Maize", "Soybean", "Cotton", "Sugarcane"],
  farmer: ["Small-scale", "Commercial", "Cooperative", "Organic", "Family"],
  country: ["India", "Brazil", "USA", "China", "Nigeria", "Argentina"],
};

type FilterKey = keyof typeof FILTER_OPTIONS;

const FILTER_LABELS: Record<FilterKey, string> = {
  soil: "Soil Type",
  crop: "Crop",
  farmer: "Farmer",
  country: "Country",
};

const FILTER_ICONS: Record<FilterKey, string> = {
  soil: "◈",
  crop: "✦",
  farmer: "⊕",
  country: "◉",
};

export default function PlotSideBar({
  setSelectedPlot,
  plots,
}: {
  setSelectedPlot: React.Dispatch<React.SetStateAction<selectedPlot | null>>;
  plots: selectedPlot[];
}) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState<FilterKey | null>(null);
  const [selected, setSelected] = useState<Record<FilterKey, string[]>>({
    soil: [],
    crop: [],
    farmer: [],
    country: [],
  });
  const toggle = (filter: FilterKey, option: string) => {
    setSelected((prev) => ({
      ...prev,
      [filter]: prev[filter].includes(option)
        ? prev[filter].filter((o) => o !== option)
        : [...prev[filter], option],
    }));
  };

  const clearAll = () =>
    setSelected({ soil: [], crop: [], farmer: [], country: [] });

  const totalSelected = Object.values(selected).flat().length;

  return (
    <div className="col-span-2 custom-scrollbar w-full overflow-y-scroll h-full  relative bg-gray-400/10">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" />

      <div className="relative p-6 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <div className="flex items-start gap-3 mb-1">
            <div className="w-9 h-9 bg-gradient-to-br from-[#3d6b2e] to-[#6b9e50] rounded-[10px] flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(61,107,46,0.25)]">
              <Sprout size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-[#2a4a1e] font-['DM_Serif_Display'] ">
                Manage Plots
              </h2>
              <p className="text-[12px] text-[#7a8c6a] mt-0.5 font-['DM_Serif_Display']">
                SubPlaceholder
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className={filtersOpen ? "mb-[10px]" : "mb-0"}
        >
          <motion.button
            onClick={() => {
              setFiltersOpen((v) => !v);
              if (filtersOpen) setOpenFilter(null);
            }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex justify-between items-center rounded-[9px] px-[10px] py-[7px] cursor-pointer transition-all duration-200 border ${
              filtersOpen
                ? "bg-white/30 border-[#c8beaa]/50"
                : "bg-transparent border-transparent"
            }`}
          >
            <span className="flex items-center  gap-1.5">
              <span
                className={`text-[10px] font-bold flex items-center tracking-[0.12em] uppercase transition-colors duration-200 ${
                  filtersOpen ? "text-[#3d6b2e]" : "text-[#9aaa8a]"
                }`}
              >
                Quick Filters
                <SlidersHorizontal className="ml-1 w-4 h-4" />
              </span>
              <AnimatePresence>
                {totalSelected > 0 && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="bg-[#3d6b2e] text-white text-[9px] font-bold rounded-full px-1.5 leading-[1.6]"
                  >
                    {totalSelected}
                  </motion.span>
                )}
              </AnimatePresence>
            </span>

            <span className="flex items-center gap-1.5">
              <AnimatePresence>
                {totalSelected > 0 && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      clearAll();
                    }}
                    className="flex items-center gap-[3px] text-[10px] text-[#c25b2a] font-semibold bg-[#c25b2a]/10 border border-[#c25b2a]/20 rounded-[5px] px-[7px] py-[2px] cursor-pointer"
                  >
                    <X size={9} />
                    Clear
                  </motion.button>
                )}
              </AnimatePresence>
              <motion.div
                animate={{ rotate: filtersOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <ChevronDown
                  size={14}
                  className={filtersOpen ? "text-[#3d6b2e]" : "text-[#9aaa8a]"}
                />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        <AnimatePresence initial={false}>
          {filtersOpen && (
            <motion.div
              key="filter-list"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-1.5">
                {(Object.keys(FILTER_OPTIONS) as FilterKey[]).map(
                  (filter, idx) => {
                    const isOpen = openFilter === filter;
                    const count = selected[filter].length;

                    return (
                      <motion.div
                        key={filter}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: idx * 0.06,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`rounded-xl overflow-hidden transition-all duration-200 border ${
                          isOpen
                            ? "bg-white/70 border-[#3d6b2e]/25 shadow-[0_4px_16px_rgba(61,107,46,0.08)]"
                            : "bg-white/40 border-[#c8beaa]/50 shadow-none"
                        }`}
                      >
                        <motion.button
                          onClick={() => setOpenFilter(isOpen ? null : filter)}
                          whileHover={{
                            backgroundColor: "rgba(255,255,255,0.6)",
                          }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full flex items-center justify-between p-[10px_14px] cursor-pointer bg-transparent border-none text-left"
                        >
                          <span className="flex items-center gap-2">
                            <span
                              className={`text-sm transition-colors duration-200 ${
                                isOpen ? "text-[#3d6b2e]" : "text-[#9aaa8a]"
                              }`}
                            >
                              {FILTER_ICONS[filter]}
                            </span>
                            <span
                              className={`text-[13px] font-semibold transition-colors duration-200 ${
                                isOpen ? "text-[#2a4a1e]" : "text-[#5a6a4e]"
                              }`}
                            >
                              {FILTER_LABELS[filter]}
                            </span>
                            <AnimatePresence>
                              {count > 0 && (
                                <motion.span
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="bg-[#3d6b2e] text-white text-[10px] font-bold rounded-full px-1.5 leading-[1.6]"
                                >
                                  {count}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <ChevronDown
                              size={15}
                              className={
                                isOpen ? "text-[#3d6b2e]" : "text-[#9aaa8a]"
                              }
                            />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="options"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <div className="px-3.5 pb-3 pt-1 flex flex-wrap gap-1.5">
                                {FILTER_OPTIONS[filter].map(
                                  (option, optIdx) => {
                                    const isActive =
                                      selected[filter].includes(option);
                                    return (
                                      <motion.button
                                        key={option}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                          delay: optIdx * 0.04,
                                          duration: 0.2,
                                        }}
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        onClick={() => toggle(filter, option)}
                                        className={`text-[11px] px-[10px] py-[4px] rounded-[7px] cursor-pointer transition-all duration-150 border-1.5 ${
                                          isActive
                                            ? "font-bold border-[#3d6b2e] bg-gradient-to-br from-[#3d6b2e] to-[#5a9e40] text-white shadow-[0_2px_6px_rgba(61,107,46,0.2)]"
                                            : "font-medium border-[#c8bda8] bg-white/50 text-[#5a6a4e] shadow-none"
                                        }`}
                                      >
                                        {option}
                                      </motion.button>
                                    );
                                  },
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  },
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 space-y-5 relative text-slate-700/80 mb-3">
          <p className="relative font-['DM_Serif_Display']">Plots</p>
          <span className="flex items-center relative w-full">
            <input
              className="absolute bg-white w-full focus:outline-none rounded-lg px-4 h-8"
              placeholder="Search Plots"
            />
            <Search className="absolute right-3" />
          </span>
        </div>
        <div>
          {plots.map((plot, i) => (
            <PlotInfoCard
              setSelectedPlot={setSelectedPlot}
              plot={plot}
              key={i}
            />
          ))}
        </div>
        <AnimatePresence>
          {totalSelected > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-auto pt-5"
            >
              <div className="bg-gradient-to-br from-[#3d6b2e]/10 to-[#5a9e40]/5 border border-[#3d6b2e]/15 rounded-xl p-[10px_14px]">
                <p className="text-[10px] font-bold tracking-[0.1em] text-[#6b9e50] uppercase mb-1.5">
                  Active Filters
                </p>
                <div className="flex flex-wrap gap-1">
                  {(Object.keys(selected) as FilterKey[]).flatMap((f) =>
                    selected[f].map((val) => (
                      <motion.span
                        key={`${f}-${val}`}
                        layout
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#3d6b2e]/10 text-[#2a4a1e] rounded-[5px] px-[7px] py-[2px]"
                      >
                        {val}
                        <button
                          onClick={() => toggle(f, val)}
                          className="bg-none border-none cursor-pointer p-0 text-[#6b9e50] flex items-center"
                        >
                          <X size={9} />
                        </button>
                      </motion.span>
                    )),
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
