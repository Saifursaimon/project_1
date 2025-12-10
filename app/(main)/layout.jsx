import Header from "@/components/Header";
import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-[1440] mx-auto">{children}</main>
    </div>
  );
}

export default MainLayout;
