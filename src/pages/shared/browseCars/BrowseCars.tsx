import { useState } from "react";

import CarBrand from "../component/CarBrand";
import FAQs from "../component/FAQs";
import GetInTouch from "../component/GetInTouch";
import Testimonial from "../component/Testimonial";
import Listing from "./component/Listing";
import Sidebar from "./component/SideBar";
import TopFilterBar from "./component/TopFilterBar";
import CarSelected from "./component/CarSelected";
import type { Filters } from "./component/types";
import Breadcrumb from "./component/Breadcrumb";
import SimilarCars from "./component/SimilarCars";
import { useNavigate } from "react-router-dom";

export type Car = {
  image: string;
  title: string;
  location: string;
  mileage: string;
  amount: string;
};

const BrowseCars = () => {
  const [filters, setFilters] = useState<Filters>({
    cjAutos: false,
    partnerDealer: false,
    privateSeller: false,

    sedan: false,
    suv: false,
    coupe: false,
    hatchback: false,
    convertible: false,
    truck: false,
    van: false,
    electricHybrid: false,

    automatic: false,
    manual: false,

    petrol: false,
    diesel: false,
    electric: false,
    hybrid: false,

    brandNew: false,
    foreignUsed: false,
    locallyUsed: false,
    salvageAuction: false,

    year1990_2001: false,
    year2001_2005: false,
    year2006_2010: false,
    year2011_2015: false,
    year2016_2021: false,
    year2022_2025: false,

    inStock: false,
    comingSoon: false,
  });
  const [mileageMin, setMileageMin] = useState("0");
  const [mileageMax, setMileageMax] = useState("0");
  const [priceMin, setPriceMin] = useState("0");
  const [priceMax, setPriceMax] = useState("0");
  const navigate = useNavigate();

  const handleFilterChange = (filter: keyof Filters) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const [currentPage, setCurrentPage] = useState<"browse" | "detail">("browse");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentPage("detail");
  };

  const handleBackToBrowse = () => {
    setCurrentPage("browse");
    setSelectedCar(null);
  };

  const getBreadcrumbItems = () => {
    const items: { label: string; onClick?: () => void }[] = [
      { label: "Home", onClick: () => navigate("/") },
    ];

    if (currentPage === "browse") {
      items.push({ label: "Browse Cars" });
    } else if (currentPage === "detail" && selectedCar) {
      items.push({
        label: "Browse Cars",
        onClick: handleBackToBrowse,
      });
      items.push({ label: selectedCar.title });
    }

    return items;
  };

  return (
    <div>
      <div className="px-[146px] pt-[19px] max-w-[1440px] mx-auto">
        <Breadcrumb items={getBreadcrumbItems()} />
      </div>
      {currentPage === "browse" && <TopFilterBar />}

      <div className="flex gap-[23px] px-[146px] pb-[120px] w-full max-w-[1440px] mx-auto">
        {currentPage === "browse" && (
          <Sidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            mileageMin={mileageMin}
            mileageMax={mileageMax}
            priceMin={priceMin}
            priceMax={priceMax}
            onMileageMinChange={setMileageMin}
            onMileageMaxChange={setMileageMax}
            onPriceMinChange={setPriceMin}
            onPriceMaxChange={setPriceMax}
          />
        )}

        <div className="flex-1">
          {currentPage === "browse" && <Listing onCardClick={handleCarClick} />}

          {currentPage === "detail" && selectedCar && (
            <CarSelected car={selectedCar} />
          )}
        </div>
      </div>

      {currentPage === "detail" && <SimilarCars />}

      <CarBrand />
      <Testimonial />
      <FAQs />
      <GetInTouch />
    </div>
  );
};

export default BrowseCars;
