import { FileText, ArrowUpRight, Truck, Package } from "lucide-react";
export const GoodsCard = () => {
  const fuelColors = {
    Diesel: "text-gray-700 bg-gray-200 text-xs px-1 rounded-2xl",
    CNG: "text-teal-600 bg-teal-100 text-xs px-1 rounded-2xl",
    Petrol: "text-red-600 bg-red-100 text-xs px-1 rounded-2xl",
    Electric: "text-blue-600 bg-blue-100 text-xs px-1 rounded-2xl",
  };
  const goodsData = [
    {
      date: "2025-09-01",
      category: "Vegetables",
      no_of_items: 25,
      vendor_name: "FreshFarm Market",
      local_or_imported: "Local",
      mode_of_transport: "Truck",
      bill_amount: 3200,
      bill_attachment: "bill_001.pdf",
      packaging_type: "Plastic",
      recyclability: "Yes",
    },
    {
      date: "2025-09-02",
      category: "Electronics",
      no_of_items: 5,
      vendor_name: "TechWorld Supplies",
      local_or_imported: "Imported",
      mode_of_transport: "Air Cargo",
      bill_amount: 45000,
      bill_attachment: "bill_002.pdf",
      packaging_type: "Paper",
      recyclability: "Yes",
    },
    {
      date: "2025-09-01",
      category: "Vegetables",
      no_of_items: 25,
      vendor_name: "FreshFarm Market",
      local_or_imported: "Local",
      mode_of_transport: "Truck",
      bill_amount: 3200,
      bill_attachment: "bill_001.pdf",
      packaging_type: "Plastic",
      recyclability: "Yes",
    },
    {
      date: "2025-09-02",
      category: "Electronics",
      no_of_items: 5,
      vendor_name: "TechWorld Supplies",
      local_or_imported: "Imported",
      mode_of_transport: "Air Cargo",
      bill_amount: 45000,
      bill_attachment: "bill_002.pdf",
      packaging_type: "Paper",
      recyclability: "Yes",
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border border-neutral-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Goods</h2>
        <button className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full p-2">
          <ArrowUpRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-4xl font-bold text-gray-900">3.5 Lakhs</p>
          <p className="text-sm text-gray-500">Total Amount Spent</p>
        </div>
        <div className="p-3 bg-amber-100 rounded-full">
          <Package className="w-6 h-6 text-amber-600" />
        </div>
      </div>

      <div className="border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-3">
          Recent Purchases
        </h3>
        <div className="space-y-2">
          {goodsData.map((goods, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg  text-xs"
            >
              <div className="flex items-center space-x-2 w-1/6">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Package className="w-4 h-4 text-yellow-600" />
                </div>
                <span className="font-medium text-gray-700">{goods.date}</span>
              </div>
              <div className="w-1/6 flex flex-col">
                <div>
                  <span className="text-gray-800 font-medium">
                    {goods.category}
                  </span>
                  <span className="text-gray-500">({goods.no_of_items})</span>
                </div>
                <div className="line-clamp-1">
                  <span className="text-gray-700">{goods.vendor_name}</span>
                </div>
              </div>

              <div className="w-1/6 flex items-center space-x-1">
                <Truck className="w-3 h-3 text-gray-400" />
                <span className="text-gray-500">{goods.mode_of_transport}</span>
              </div>
              <div className="w-1/6">
                <span className="text-gray-500">
                  {goods.packaging_type} - {goods.recyclability}
                </span>
              </div>
              <div className="w-1/6 flex flex-col items-end">
                <span className="font-semibold text-green-600">
                  ₹{goods.bill_amount.toLocaleString()}
                </span>
                <div className="flex items-center space-x-1">
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span className="text-blue-600 underline cursor-pointer">
                    {goods.bill_attachment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};
