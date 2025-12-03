import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RangeFilter from "./RangeFilter";
import FilterSection from "./FilterSection";
import type { SidebarProps } from "./types";

const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange }) => {
  const [mileageMin, setMileageMin] = useState("0");
  const [mileageMax, setMileageMax] = useState("0");
  const [priceMin, setPriceMin] = useState("0");
  const [priceMax, setPriceMax] = useState("0");

  const handleApply = (type: string) => {
    console.log(`Applied ${type} filter`);
  };

  const handleReset = (
    type: string,
    setMin: (value: string) => void,
    setMax: (value: string) => void
  ) => {
    setMin("0");
    setMax("0");
    console.log(`Reset ${type} filter`);
  };

  return (
    <aside className="w-64 shrink-0 font-plus-jakarta">
      <div className="bg-white px-5 py-8 h-[1970px] shadow-xl">
        <h2 className="text-lg font-semibold text-gray-900 mb-5">Filter</h2>

        {/* Seller Type */}
        <FilterSection title="Seller Type">
          <div className="flex flex-col justify-between h-[95px]">
            {/* car autos */}
            <div className="flex justify-between">
              <p className="text-[#595959] text-[14px]">CJ Autos</p>
              <p className="bg-[#E8F2FF] py-1 w-[47px] text-center rounded-full text-[#072C59] text-[11px] font-semibold">
                320
              </p>
            </div>

            {/* partner dealer */}
            <div className="flex justify-between">
              <p className="text-[#595959] text-[14px]">Partner Dealer</p>
              <p className="bg-[#E8F2FF] py-1 w-[47px] text-center rounded-full text-[#072C59] text-[11px] font-semibold">
                231
              </p>
            </div>

            {/* private seller */}
            <div className="flex justify-between">
              <p className="text-[#595959] text-[14px]">Private Seller</p>
              <p className="bg-[#E8F2FF] py-1 w-[47px] text-center rounded-full text-[#072C59] text-[11px] font-semibold">
                110
              </p>
            </div>
          </div>
        </FilterSection>

        {/* Car Type */}
        <FilterSection title="Car Type">
          <Checkbox
            label="Sedan"
            checked={filters.sedan}
            onChange={() => onFilterChange("sedan")}
          />
          <Checkbox
            label="SUV"
            checked={filters.suv}
            onChange={() => onFilterChange("suv")}
          />
          <Checkbox
            label="Coupe"
            checked={filters.coupe}
            onChange={() => onFilterChange("coupe")}
          />
          <Checkbox
            label="Hatchback"
            checked={filters.hatchback}
            onChange={() => onFilterChange("hatchback")}
          />
          <Checkbox
            label="Convertible"
            checked={filters.convertible}
            onChange={() => onFilterChange("convertible")}
          />
          <Checkbox
            label="Truck"
            checked={filters.truck}
            onChange={() => onFilterChange("truck")}
          />
          <Checkbox
            label="Van"
            checked={filters.van}
            onChange={() => onFilterChange("van")}
          />
          <Checkbox
            label="Electric / Hybrid"
            checked={filters.electricHybrid}
            onChange={() => onFilterChange("electricHybrid")}
          />
        </FilterSection>

        {/* Transmission */}
        <FilterSection title="Transmission">
          <Checkbox
            label="Automatic"
            checked={filters.automatic}
            onChange={() => onFilterChange("automatic")}
          />
          <Checkbox
            label="Manual"
            checked={filters.manual}
            onChange={() => onFilterChange("manual")}
          />
        </FilterSection>

        {/* Fuel Type */}
        <FilterSection title="Fuel Type">
          <Checkbox
            label="Petrol"
            checked={filters.petrol}
            onChange={() => onFilterChange("petrol")}
          />
          <Checkbox
            label="Diesel"
            checked={filters.diesel}
            onChange={() => onFilterChange("diesel")}
          />
          <Checkbox
            label="Electric"
            checked={filters.electric}
            onChange={() => onFilterChange("electric")}
          />
          <Checkbox
            label="Hybrid"
            checked={filters.hybrid}
            onChange={() => onFilterChange("hybrid")}
          />
        </FilterSection>

        {/* Condition */}
        <FilterSection title="Condition">
          <Checkbox
            label="Brand New"
            checked={filters.brandNew}
            onChange={() => onFilterChange("brandNew")}
          />
          <Checkbox
            label="Foreign Used (Tokunbo)"
            checked={filters.foreignUsed}
            onChange={() => onFilterChange("foreignUsed")}
          />
          <Checkbox
            label="Locally Used"
            checked={filters.locallyUsed}
            onChange={() => onFilterChange("locallyUsed")}
          />
          <Checkbox
            label="Salvage / Auction"
            checked={filters.salvageAuction}
            onChange={() => onFilterChange("salvageAuction")}
          />
        </FilterSection>

        {/* Car Year */}
        <FilterSection title="Car Year">
          <Checkbox
            label="1990 - 2001"
            checked={filters.year1990_2001}
            onChange={() => onFilterChange("year1990_2001")}
          />
          <Checkbox
            label="2001 - 2005"
            checked={filters.year2001_2005}
            onChange={() => onFilterChange("year2001_2005")}
          />
          <Checkbox
            label="2006 - 2010"
            checked={filters.year2006_2010}
            onChange={() => onFilterChange("year2006_2010")}
          />
          <Checkbox
            label="2011 - 2015"
            checked={filters.year2011_2015}
            onChange={() => onFilterChange("year2011_2015")}
          />
          <Checkbox
            label="2016 - 2021"
            checked={filters.year2016_2021}
            onChange={() => onFilterChange("year2016_2021")}
          />
          <Checkbox
            label="2022 - 2025"
            checked={filters.year2022_2025}
            onChange={() => onFilterChange("year2022_2025")}
          />
        </FilterSection>

        {/* Availability */}
        <FilterSection title="Availability">
          <Checkbox
            label="In Stock"
            checked={filters.inStock}
            onChange={() => onFilterChange("inStock")}
          />
          <Checkbox
            label="Coming Soon"
            checked={filters.comingSoon}
            onChange={() => onFilterChange("comingSoon")}
          />
        </FilterSection>

        {/* Mileage */}
        <RangeFilter
          title="Mileage"
          minValue={mileageMin}
          maxValue={mileageMax}
          onMinChange={setMileageMin}
          onMaxChange={setMileageMax}
          onApply={() => handleApply("mileage")}
          onReset={() => handleReset("mileage", setMileageMin, setMileageMax)}
        />

        {/* Price */}
        <div className="mt-8">
          <RangeFilter
            title="Price"
            minValue={priceMin}
            maxValue={priceMax}
            onMinChange={setPriceMin}
            onMaxChange={setPriceMax}
            onApply={() => handleApply("price")}
            onReset={() => handleReset("price", setPriceMin, setPriceMax)}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
