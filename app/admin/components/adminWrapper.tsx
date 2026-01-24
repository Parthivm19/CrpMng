"use client";
import TopBar from "./topBar";
import React, { useState } from "react";
interface AdminWrapperProps {
  children: React.ReactNode;
}

export const AdminWrapper: React.FC<AdminWrapperProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full ">
      <TopBar />
      <div className={`flex ${isSidebarOpen ? "overflow-x-hidden" : ""}`}>
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-[280px]" : "ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
