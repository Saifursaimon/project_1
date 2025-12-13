import Header from "@/components/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-[#f5f6f8] h-full">
      <Header />
      <main className="max-w-[1440px] mx-auto ">{children}</main>
    </div>
  );
};

export default layout;
