import { Car, ArrowUpRight, Fuel, MapPin, Users } from "lucide-react";
export const TransportCard = () => {
  const fuelColors = {
    Diesel: "text-gray-700 bg-gray-200 text-xs px-1 rounded-2xl",
    CNG: "text-teal-600 bg-teal-100 text-xs px-1 rounded-2xl",
    Petrol: "text-red-600 bg-red-100 text-xs px-1 rounded-2xl",
    Electric: "text-blue-600 bg-blue-100 text-xs px-1 rounded-2xl",
  };
  const transportData = [
    {
      date: "2025-09-01",
      type_of_vehicle: "Bus",
      type_of_fuel: "Diesel",
      from: "Kochi",
      to: "Thrissur",
      total_km: 80,
      people_travelled: 40,
    },
    {
      date: "2025-09-02",
      type_of_vehicle: "Car",
      type_of_fuel: "Petrol",
      from: "Ernakulam",
      to: "Alappuzha",
      total_km: 55,
      people_travelled: 4,
    },
    {
      date: "2025-09-03",
      type_of_vehicle: "Van",
      type_of_fuel: "Diesel",
      from: "Kottayam",
      to: "Pathanamthitta",
      total_km: 70,
      people_travelled: 12,
    },
    {
      date: "2025-09-04",
      type_of_vehicle: "Truck",
      type_of_fuel: "Diesel",
      from: "Kochi",
      to: "Calicut",
      total_km: 180,
      people_travelled: 2,
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex w-full items-center space-x-3">
          <div className="w-22 h-22 bg-red-400 flex items-center justify-center rounded-full">
            <Car className="w-12 h-12 text-white" />
          </div>
          <div className="flex flex-1 items-start justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                Transportation
              </h2>
              <div className="flex items-center space-x-4  mt-1">
                <div className="flex flex-col  items-center">
                  <Car className="w-7 h-7 text-gray-600" />
                  <p className="text-sm text-gray-500">120</p>
                </div>
                <div className="flex mt-1 flex-col items-center">
                  <Fuel className="w-6 h-6 text-gray-600" />
                  <p className="text-sm text-gray-500">120</p>
                </div>
              </div>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2 ml-4">
              <ArrowUpRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-1 border-gray-100" />
      <p className="text-sm font-medium text-gray-700 mb-3">Recent</p>
      <div className="space-y-3 mt-1">
        {transportData.map((trip, index) => (
          <div
            key={index}
            className="flex items-center justify-between  p-3 bg-gray-50 rounded-lg "
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-full">
                <Car className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{trip.date}</p>
                <div className="flex space-x-0.5">
                  <p className="text-xs text-gray-500">
                    {trip.type_of_vehicle} -
                  </p>
                  <p
                    className={
                      fuelColors[trip.type_of_fuel as keyof typeof fuelColors]
                    }
                  >
                    {trip.type_of_fuel}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">{trip.from}</span>
              </div>
              <span className="text-xs text-gray-400">→</span>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">{trip.to}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">
                  {trip.people_travelled}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
