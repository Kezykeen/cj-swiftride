export type Filters = {
  // Seller type
  cjAutos: boolean;
  partnerDealer: boolean;
  privateSeller: boolean;

  // Car Type
  sedan: boolean;
  suv: boolean;
  coupe: boolean;
  hatchback: boolean;
  convertible: boolean;
  truck: boolean;
  van: boolean;
  electricHybrid: boolean;

  // Transmission
  automatic: boolean;
  manual: boolean;

  // Fuel type
  petrol: boolean;
  diesel: boolean;
  electric: boolean;
  hybrid: boolean;

  // Condition
  brandNew: boolean;
  foreignUsed: boolean;
  locallyUsed: boolean;
  salvageAuction: boolean;

  // Car Year
  year1990_2001: boolean;
  year2001_2005: boolean;
  year2006_2010: boolean;
  year2011_2015: boolean;
  year2016_2021: boolean;
  year2022_2025: boolean;

  // Availability
  inStock: boolean;
  comingSoon: boolean;
};

export type SidebarProps = {
  filters: Filters;

  onFilterChange: (filter: keyof Filters) => void;

  mileageMin: string;
  mileageMax: string;

  priceMin: string;
  priceMax: string;

  onMileageMinChange: (value: string) => void;
  onMileageMaxChange: (value: string) => void;

  onPriceMinChange: (value: string) => void;
  onPriceMaxChange: (value: string) => void;
};
