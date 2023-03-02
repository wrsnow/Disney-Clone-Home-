import React from "react";
import BrandRowCard from "./BrandRowCard";

function BrandRow() {
  let brands = [
    {
      brand: "disney",
      path: "../../assets/Disney_wordmark 1-white.svg",
    },
    {
      brand: "star wars",
      path: "../../assets/Star_wars2.svg",
    },
    {
      brand: "pixar",
      path: "../../assets/Pixar.svg",
    },
    {
      brand: "national_geography",
      path: "../../assets/National-Geographic-Logo.svg",
    },
    {
      brand: "marvel",
      path: "../../assets/Marvel_Logo.svg",
    },
  ];

  return (
    <div className="flex flex-wrap w-full my-10">
      {brands.map((brand, index) => {
        return <BrandRowCard key={brand.brand} logo={brand.path} />;
      })}
    </div>
  );
}

export default BrandRow;
