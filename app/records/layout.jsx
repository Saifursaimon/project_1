import Header from "@/components/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="bg-[#f5f6f8] h-screen">
      <Header />
      <main className="max-w-[1414] mx-auto ">{children}</main>
    </div>
  );
};

export default layout;
