"use client";
import AdminHeader from "@/components/AminHeader";
import PinLogin from "@/components/PinLogin";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const layout = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const isVerified = localStorage.getItem("admin_pin_verified");
    if (isVerified === "true") {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) {
    return (
      <PinLogin onSuccess={() => setAuthorized(true)} loginType={"admin"} />
    );
  }

  return (
    <div>
      <AdminHeader />
      <div className="bg-[#d9d9d9] flex  min-h-screen">
        <div className="w-[278px] bg-white ">
          <div className="flex items-center justify-between px-6 py-4 bg-[#c7c7c7] border-r-2 border-[#aaaaaa] w-full">
            <div className="flex items-center gap-5">
              <Image
                src="/dashboard.png"
                alt="dashboard"
                width={24}
                height={24}
              />
              <Link href="/admin">产品管理</Link>
            </div>
            <Image src="/arrow-right.png" alt="arrow" width={8} height={5} />
          </div>
        </div>
        <main className=" flex-1">{children}</main>
      </div>
    </div>
  );
};

export default layout;
