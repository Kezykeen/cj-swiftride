import { useState } from "react";

const tabs = [
  "Basic Information",
  "Engine & Transmission",
  "Interior & Comfort",
  "Exterior & Design",
  "Safety & Assist",
] as const;

type TabContent = {
  label: string;
  value: string;
};

const tabContent: Record<string, TabContent[]> = {
  "Basic Information": [
    { label: "Make", value: "Lexus" },
    { label: "Model", value: "RX 350" },
    { label: "Year", value: "2020" },
    { label: "Trim", value: "Fullest Option" },
    { label: "Mileage", value: "47,000 km" },
    { label: "Condition", value: "Foreign Used" },
    { label: "VIN", value: "2T2BZMCA5LC123456" },
    { label: "Location", value: "Lagos, Nigeria" },
    { label: "Customs", value: "Duty Paid" },
    { label: "Color", value: "Metallic Gray" },
    { label: "Document Type", value: "Complete (Original Papers Available)" },
    { label: "Registration", value: "Unregistered (Nigeria)" },
  ],
  "Engine & Transmission": [
    { label: "Engine Type", value: "V6 Petrol" },
    { label: "Engine Size", value: "3.5L" },
    { label: "Horsepower", value: "295 HP" },
    { label: "Transmission", value: "8-Speed Automatic" },
    { label: "Drive Type", value: "All-Wheel Drive (AWD)" },
    { label: "Fuel Type", value: "Premium Gasoline" },
    { label: "Fuel Economy", value: "19/26 MPG (City/Highway)" },
    { label: "Torque", value: "267 lb-ft" },
  ],
  "Interior & Comfort": [
    { label: "Seating Capacity", value: "5 Passengers" },
    { label: "Upholstery", value: "Premium Leather" },
    { label: "Climate Control", value: "Tri-Zone Automatic" },
    { label: "Sunroof", value: "Panoramic Power Sunroof" },
    { label: "Infotainment", value: '12.3" Touchscreen Display' },
    { label: "Sound System", value: "Mark Levinson Premium Audio" },
    { label: "Heated Seats", value: "Front & Rear" },
    { label: "Ventilated Seats", value: "Front Seats" },
    { label: "Navigation", value: "Built-in GPS Navigation" },
    { label: "Wireless Charging", value: "Available" },
  ],
  "Exterior & Design": [
    { label: "Body Style", value: "SUV/Crossover" },
    { label: "Doors", value: "4 Doors" },
    { label: "Headlights", value: "LED with Auto High Beam" },
    { label: "Wheels", value: '20" Alloy Wheels' },
    { label: "Fog Lights", value: "LED Front Fog Lights" },
    { label: "Roof Rails", value: "Integrated Roof Rails" },
    { label: "Power Tailgate", value: "Hands-Free Power Liftgate" },
    { label: "Exterior Mirrors", value: "Power-Folding with Memory" },
  ],
  "Safety & Assist": [
    { label: "Airbags", value: "10 Airbags (Including Knee Airbags)" },
    { label: "ABS", value: "Anti-lock Braking System" },
    { label: "Stability Control", value: "Vehicle Stability Control (VSC)" },
    { label: "Traction Control", value: "Active Traction Control" },
    { label: "Blind Spot Monitor", value: "With Rear Cross-Traffic Alert" },
    {
      label: "Lane Departure",
      value: "Lane Departure Alert with Steering Assist",
    },
    { label: "Adaptive Cruise", value: "Dynamic Radar Cruise Control" },
    {
      label: "Pre-Collision",
      value: "Pre-Collision System with Pedestrian Detection",
    },
    { label: "Parking Assist", value: "360° Camera with Parking Sensors" },
    { label: "Security", value: "Alarm System with Immobilizer" },
  ],
};

const CarDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("Basic Information");

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-sm">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "text-[#072C59] border-b-2 border-[#072C59]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {tabContent[activeTab]?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0"
          >
            <span className="text-gray-600 text-sm">{item.label}</span>
            <span className="text-gray-900 text-sm font-medium text-right">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarDetailsTabs;
