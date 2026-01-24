import { Car, Recycle, Users } from "lucide-react";
export default function DashboardHero() {
  const heroData = [
    {
      name: "Some Data1",
      percentage: "15%",
      style:
        "flex items-center px-4 w-28 h-12 text-white bg-gray-800 rounded-full",
    },
    {
      name: "Some Data2",
      percentage: "15%",
      style:
        "flex items-center px-4 w-28 h-12 text-black bg-amber-200 rounded-full",
    },
    {
      name: "Some Data3",
      percentage: "60%",
      style:
        "flex items-center justify-center w-64 h-12 border border-gray-400 rounded-full bg-[repeating-linear-gradient(45deg,#f5f5f5,#f5f5f5_10px,transparent_10px,transparent_20px)]",
    },
    {
      name: "Some Data4",
      percentage: "10%",
      style:
        "flex items-center justify-center w-28 h-12 border border-gray-400 rounded-full",
    },
  ];

  const employeeStats = [
    { value: 78, label: "Population", icon: Users },
    { value: 56, label: "Waste Collected", icon: Recycle },
    { value: 203, label: "Transportation", icon: Car },
  ];

  return (
    <div className="mt-12 pl-8 flex w-full  items-start">
      <div className="flex flex-col w-full  ">
        <p className="text-6xl font-semibold">Welcome in, Admin</p>
        <div className="flex w-full justify-between space-x-4 mt-12">
          <div className="flex">
            {heroData.map((data, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="mb-2 text-gray-600">{data.name}</p>
                <div className={data.style}>
                  <p className="font-semibold">{data.percentage}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-16 pr-16">
            {employeeStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-end space-x-1 p-3">
                  <div className="bg-white p-2 rounded-full">
                    <stat.icon />
                  </div>
                  <p className="text-6xl font-bold">{stat.value}</p>
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
