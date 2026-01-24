import { Recycle, ArrowUpRight, Trash, Car, MapPin } from "lucide-react";

export const WasteCard = () => {
  const wasteCollections = [
    {
      date: "Dec 15, 2024",
      bags: 3,
      fromLocation: "Building A - Floor 2",
      toLocation: "Central Depot",
    },
    {
      date: "Dec 12, 2024",
      bags: 2,
      fromLocation: "Building B - Floor 1",
      toLocation: "Recycling Center",
    },
    {
      date: "Dec 10, 2024",
      bags: 4,
      fromLocation: "Cafeteria Area",
      toLocation: "Central Depot",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Waste Management
        </h2>
        <button className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2">
          <ArrowUpRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-4xl font-bold text-gray-900">120kg</p>
          <p className="text-sm text-gray-500">Total Collected</p>
        </div>
        <div className="p-3 bg-green-100 rounded-full">
          <Recycle className="w-6 h-6 text-green-600" />
        </div>
      </div>

      <div className="border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Recent Collections
        </h3>
        <div className="space-y-3">
          {wasteCollections.map((collection, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-center">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Trash className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-gray-600 mt-1">
                    {collection.bags}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {collection.date}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {collection.fromLocation}
                      </span>
                    </div>
                    <Car className="w-3 h-3 text-gray-400" />
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">
                        {collection.toLocation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
