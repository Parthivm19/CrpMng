"use client";
import TopBar from "./topBar";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
interface AdminWrapperProps {
  children: React.ReactNode;
}
export const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="h-screen w-full flex flex-col">
      {pathname !== "/admin/settings" && <TopBar />}
      <div
        className={`flex flex-1 overflow-hidden ${isSidebarOpen ? "overflow-x-hidden" : ""}`}
      >
        <main
          className={`flex-1 overflow-auto transition-all duration-300 ${isSidebarOpen ? "ml-[280px]" : "ml-0"}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
