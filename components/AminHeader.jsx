"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AdminHeader = () => {
  const user = JSON.parse(localStorage.getItem("admin_user"));
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("admin_pin_verified");
    localStorage.removeItem("admin_user");
    router.push("/");
  };

  return (
    <div className=" bg-white h-[122px] p-7">
      <div className="max-w-[1414] mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="w-[248px] h-[65px] bg-[#888888] flex items-center justify-center">
          <p className="text-white font-medium text-center">logo 后台系统</p>
        </div>

        {/* navigation links */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-[#cacaca] rounded-full" />
            <p className="font-medium">{user.name}</p>
          </div>
          <button onClick={logout} className="flex items-center gap-3 cursor-pointer">
            <Image src="/logout.png" height={19} width={19} alt="logout" />
            <p className="font-medium">退出</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
