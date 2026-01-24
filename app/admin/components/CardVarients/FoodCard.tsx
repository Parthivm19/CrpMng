import {
  CookingPot,
  ArrowUpRight,
  Soup,
  Flame,
  MapPin,
  Users,
  Droplet,
} from "lucide-react";
export const FoodCard = () => {
  const foodData = [
    {
      date: "20/08/25",
      location: "Canteen",
      food_item: "Rice & Curry",
      quantity_cooked: "120 Kg",
      meals_served: 300,
      water_used_l: 500,
      fuel_used: "15 L LPG",
    },
    {
      date: "20/08/25",
      location: "Hostel",
      food_item: "Chapati & Daal",
      quantity_cooked: "80 Kg",
      meals_served: 200,
      water_used_l: 350,
      fuel_used: "10 L LPG",
    },
    {
      date: "21/08/25",
      location: "Canteen",
      food_item: "Pasta & Salad",
      quantity_cooked: "90 Kg",
      meals_served: 220,
      water_used_l: 400,
      fuel_used: "12 L LPG",
    },
  ];
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex w-full items-center space-x-3">
          <div className="w-22 h-22 bg-orange-300 flex items-center justify-center rounded-full">
            <CookingPot className="w-12 h-12 text-white" />
          </div>
          <div className="flex flex-1 items-start justify-between">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">Food</h2>
              <div className="flex items-center space-x-4  mt-1">
                <div className="flex flex-col  items-center">
                  <CookingPot className="w-7 h-7 text-gray-600" />
                  <p className="text-sm text-gray-500">120</p>
                </div>
                <div className="flex mt-1 flex-col items-center">
                  <Soup className="w-6 h-6 text-gray-600" />
                  <p className="text-sm text-gray-500">120</p>
                </div>
                <div className="flex mt-1 flex-col items-center">
                  <Droplet className="w-6 h-6 text-gray-600" />
                  <p className="text-sm text-gray-500">120</p>
                </div>
                <div className="flex mt-1 flex-col items-center">
                  <Flame className="w-6 h-6 text-gray-600" />
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
        {foodData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-full">
                <CookingPot className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">{item.date}</p>
                <div className="flex space-x-0.5">
                  <p className="text-xs text-gray-500">{item.location} -</p>
                  <p className="text-xs font-medium text-gray-700">
                    {item.food_item}
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  Quantity: {item.quantity_cooked}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3 text-gray-400" />
                <span className="text-xs text-gray-500">
                  {item.meals_served}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Droplet className="w-3 h-3 text-blue-400" />
                <span className="text-xs text-gray-500">
                  {item.water_used_l}L
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Flame className="w-3 h-3 text-orange-400" />
                <span className="text-xs text-gray-500">{item.fuel_used}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
