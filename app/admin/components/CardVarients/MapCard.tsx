"use client";
import { selectedPlot } from "../../utils/types";
import { AnimatePresence, motion } from "framer-motion";
import { LatLngTuple } from "leaflet";
import {
  Marker,
  TileLayer,
  Popup,
  MapContainer,
  useMap,
  Polygon,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React, { useEffect, useMemo, useState, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { colorData } from "../dashBoard";
import { AreaCalculator,centerCalculator } from "./utils/mapUtils";
const MapUpdater = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  console.log(lat,lng)
  useEffect(() => {
    if (!lat || !lng) return;
    map.flyTo([lat, lng], map.getZoom(), { duration: 2 });
  }, [lat, lng, map]);

  return null;
};


export const MapCardClient = ({
  Plots,
  showFilter,
  dataColors,
  goToPlot
}: {
  Plots: selectedPlot[];
  showFilter: boolean;
  dataColors: colorData;
  goToPlot?:selectedPlot|null
}) => {
  console.log(Plots,"Colors")
  const markerIcon = useMemo(
    () =>
      L.icon({
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      }),
    [],
  );
  const filters = useMemo(
    () => ["Select Crop", ...Object.keys(dataColors)],
    [dataColors],
  );

  const cardAnimationLeft = {
    x: -100,
    opacity: 0,
  };
  const cardAnimationDown = {
    y: 100,
    opacity: 0,
  };
  const [currentLocation, setCurrentLocation] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState("Select Crop");
  const [selectedPlot, setSelectedPlot] = useState<selectedPlot | null>(null);
  const [exitDir, setExitdir] = useState<"Right" | "Down">("Down");
  const [flyTarget, setFlyTarget] = useState<{ lat: number; lng: number } | null>(null);

useEffect(() => {
  if (goToPlot?.plotCords?.length) {
    setSelectedPlot(goToPlot);
    setExitdir("Right");
    setFlyTarget({
      lat: goToPlot.plotCords[0][0],
      lng: goToPlot.plotCords[0][1],
    });
  }
}, [goToPlot]);
  const validLocations = Object.values(
    Plots.filter((area) =>
      selectedCrop !== "Select Crop" ? area.crop?.cropName === selectedCrop : true,
    ).reduce(
      (acc, curr) => {
        if (!acc[curr.location]) {
          acc[curr.location] = curr;
        }
        return acc;
      },
      {} as Record<string, (typeof Plots)[number]>,
    ),
  );
  const lastValidCenter = useRef<LatLngTuple>([
    validLocations?.[currentLocation]?.plotCords?.[0]?.[0] ?? 10,
    validLocations?.[currentLocation]?.plotCords?.[0]?.[1] ?? 76,
  ]);
  if (Plots != null) {
    const selectedCropPlot: selectedPlot[] = Plots.filter((area) =>
      selectedCrop != "Select Crop"
        ? area.crop?.cropName == selectedCrop
        : true,
    );

    const changePosPlus = () => {
      setCurrentLocation((prev) => (prev + 1) % validLocations.length);
    };

    const changePosMinus = () => {
      setCurrentLocation((prev) =>
        prev === 0 ? validLocations.length - 1 : prev - 1,
      );
    };

    const hasValidPlot =
      validLocations?.[currentLocation]?.plotCords?.length > 0;

    if (hasValidPlot) {
      lastValidCenter.current = [
        validLocations[currentLocation].plotCords[0][0],
        validLocations[currentLocation].plotCords[0][1],
      ];
    }

    const center = lastValidCenter.current;
    console.log(dataColors);
    return (
      <div className="bg-white rounded-2xl flex w-full h-full md:w-full flex-col relative  overflow-hidden  ">
        <MapContainer
          className="z-10 h-full w-full"
          center={center}
          zoom={30}
          scrollWheelZoom={false}
        >
          {hasValidPlot && <MapUpdater lat={center[0]} lng={center[1]} />}
        {flyTarget && <MapUpdater lat={flyTarget.lat} lng={flyTarget.lng} />}
          <TileLayer
            attribution="© Esri, Maxar, Earthstar Geographics"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {/* <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          opacity={0.3}
        /> */}
          {selectedCropPlot.map((area, i) => {
            if (area.plotCords) {
              const center: LatLngTuple = centerCalculator(area.plotCords);
              return (
                <React.Fragment key={i}>
                  <Polygon
                    positions={area.plotCords}
                    pathOptions={{
                      color: dataColors[area.crop?.cropName ||"#545252"],
                      fillColor: dataColors[area.crop?.cropName ||"#545252"],
                      fillOpacity: 0.6,
                    }}
                    eventHandlers={{
                      click: () => {
                        console.log(area);
                        setExitdir("Right");
                        setSelectedPlot({
                          ...area,
                          farmerName: area.farmerName,
                          farmerPic: area.farmerPic,
                          noOfPlots: area.noOfPlots,
                          phone: area.phone,
                        });
                      },
                    }}
                  >
                    <Tooltip>{area.crop?.cropName}</Tooltip>
                  </Polygon>
                  <Marker position={[center[0], center[1]]} icon={markerIcon}>
                    <Popup>{area.location}</Popup>
                  </Marker>
                </React.Fragment>
              );
            }
          })}
        </MapContainer>

        <div className="absolute  bottom-4 right-4 z-20 w-64 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-between px-4 py-3">
          <button
            onClick={changePosMinus}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <ArrowLeft />
          </button>

          {validLocations[currentLocation] && (
            <h1 className="text-lg font-semibold text-gray-800 text-center flex-1">
              {validLocations[currentLocation].location}
            </h1>
          )}
          <button
            onClick={changePosPlus}
            className="p-2 rounded-full hover:bg-gray-200 transition"
          >
            <ArrowRight />
          </button>
        </div>

        <div className="absolute top-5 left-15 w-42 z-10 bg-white rounded-md shadow-md flex flex-col">
          {showFilter && (
            <button
              className="flex items-center justify-between px-3 py-1 w-full"
              onClick={() => setShowDropDown(!showDropDown)}
            >
              <span>{selectedCrop} </span>
              <ChevronDown
                className={`transition-transform ${showDropDown ? "rotate-180" : ""}`}
              />
            </button>
          )}

          <AnimatePresence>
            {showDropDown && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="flex flex-col border-t border-gray-200 overflow-hidden"
              >
                {filters.map((crop, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="px-3 py-2 cursor-pointer rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      setSelectedCrop(crop);
                      setCurrentLocation(0);
                      setShowDropDown(false);
                    }}
                  >
                    {crop}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button className="bg-gray-100 z-20 absolute top-4 right-4 hover:bg-gray-200 transition-colors rounded-full p-2">
          <ArrowUpRight className="w-5 h-5 text-gray-700" />
        </button>
        <AnimatePresence>
          {selectedPlot && (
            <motion.div
              key={String(selectedPlot.plotId)}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
              exit={exitDir == "Down" ? cardAnimationDown : cardAnimationLeft}
              className="absolute bottom-4 left-4 w-64 md:w-72 z-20 bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <Link href={"/admin/farmers/" + selectedPlot.farmerId}>
                <div className="w-full h-24 md:h-32 relative">
                 <button
  className="absolute z-10 rounded-full right-2 top-2 w-8 h-8 flex items-center justify-center transition-colors bg-gray-50 hover:bg-gray-200"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setExitdir("Down");
    setTimeout(() => setSelectedPlot(null));
  }}
>
  <X strokeWidth={1.5} />
</button>
                  <Image
                    alt="Plot Image"
                    src={selectedPlot.plotImage}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="relative p-2 flex items-center justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-xs md:text-sm font-semibold text-gray-800">
                      Farmer: {selectedPlot.farmerName}
                    </h3>
                    <p className="text-xs text-gray-500">Plot Info</p>
                  </div>
                  <div className="w-10 h-10 relative rounded-full overflow-hidden border border-gray-200">
                    <Image
                      alt="Farmer Image"
                      src={selectedPlot.farmerPic || ""}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="px-2 pb-2 text-xs md:text-sm text-gray-700 flex justify-between">
                  <span>Area:{AreaCalculator(selectedPlot.plotCords)}m²</span>
                  <span>Crop: {selectedPlot.crop?.cropName}</span>
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
};
