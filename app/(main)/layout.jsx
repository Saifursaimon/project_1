import Header from "@/components/Header";
import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="max-w-[1440px] mx-auto px-7">{children}</main>
    </div>
  );
}

export default MainLayout;
