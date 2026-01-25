import { Plots } from "@/app/components/utils/dummyData";
import {
  Marker,
  TileLayer,
  Popup,
  MapContainer,
  useMap,
  Polygon,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
const crops = ["Select Crop", "CHILLI", "TURMERIC", "GINGER", "MARIGOLD"];
const colourOptions = {"CHILLI":{ color: "red" },"TURMERIC":{ color: "yellow",fillOpacity:0.8 },"GINGER":{color:"green"},"MARIGOLD":{color:"orange"}}
const markerIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapUpdater = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();

  useEffect(() => {
    if (!lat || !lng) return;
    map.flyTo([lat, lng], map.getZoom(), { duration: 2 });
  }, [lat, lng, map]);

  return null;
};
export const MapCard = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState("Select Crop");
  const selectedCropPlot = 
    Plots.filter(
      (area) => selectedCrop != "Select Crop"?area.crop == selectedCrop:area.crop.includes("")
    )
  ;
  console.log(selectedCropPlot)
const validLocations = Object.values(
  Plots
    .filter(area =>
      selectedCrop !== "Select Crop"
        ? area.crop === selectedCrop
        : true
    )
    .reduce((acc, curr) => {
      if (!acc[curr.location]) {
        acc[curr.location] = curr;
      }
      return acc;
    }, {} as Record<string, typeof Plots[number]>)
);


  const changePosPlus = () => {
    setCurrentLocation((prev) => (prev + 1) % validLocations.length);
  };

  const changePosMinus = () => {
    setCurrentLocation((prev) =>
      prev === 0 ? validLocations.length - 1 : prev - 1,
    );
  };
  return (
    <div className="bg-white flex flex-col relative w-full overflow-hidden col-span-2 rounded-2xl">
      <MapContainer
        className="z-10 h-full w-full"
        center={[
          validLocations[currentLocation].plot[0][0],
          validLocations[currentLocation].plot[0][1],
        ]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <MapUpdater
          lat={validLocations[currentLocation].plot[0][0]}
          lng={validLocations[currentLocation].plot[0][1]}
        />

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
{selectedCropPlot
  .map((area, idx) => (
    <Polygon
      key={idx}
      positions={area.plot}
      pathOptions={colourOptions[area.crop as keyof typeof colourOptions]}
    />
  ))}

        <Marker
          position={[
            validLocations[currentLocation].plot[0][0],
            validLocations[currentLocation].plot[0][1],
          ]}
          icon={markerIcon}
        >
          <Popup>{validLocations[currentLocation].location}</Popup>
        </Marker>
      </MapContainer>

      <div className="absolute  bottom-4 right-4 z-20 w-64 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-between px-4 py-3">
        <button
          onClick={changePosMinus}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ArrowLeft />
        </button>

        <h1 className="text-lg font-semibold text-gray-800 text-center flex-1">
          {validLocations[currentLocation].location}
        </h1>
        <button
          onClick={changePosPlus}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ArrowRight />
        </button>
      </div>
      <div className="absolute top-5 right-5 w-42 z-10 bg-white rounded-md shadow-md flex flex-col">
        <button
          className="flex items-center justify-between px-3 py-1 w-full"
          onClick={() => setShowDropDown(!showDropDown)}
        >
          <span>{selectedCrop} </span>
          <ChevronDown
            className={`transition-transform ${showDropDown ? "rotate-180" : ""}`}
          />
        </button>
        {showDropDown && (
          <div className="flex flex-col border-t border-gray-200">
            {crops.map((crop, i) => (
              <div
                key={i}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedCrop(crop);
                  setShowDropDown(false);
                }}
              >
                {crop}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
