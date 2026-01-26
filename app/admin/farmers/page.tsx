"use client";
import { FarmersGrid } from "./components/farmersGrid";
import { useState } from "react";
import FarmersHero from "./components/farmersHero";
export default function FarmerDetails() {
  const [selectedCrop, setSelectedCrop] = useState("Select Crop");
  const [selectedLocation, setSelectedLocation] = useState("Select Area");
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <FarmersHero
        selectedCrop={selectedCrop}
        setSelectedCrop={setSelectedCrop}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <FarmersGrid
        searchValue={searchValue}
        selectedCrop={selectedCrop}
        selectedLocation={selectedLocation}
      />
    </>
  );
}
