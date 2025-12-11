import Header from "@/components/Header";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="max-w-[1414] mx-auto">{children}</main>
    </div>
  );
};

export default layout;
