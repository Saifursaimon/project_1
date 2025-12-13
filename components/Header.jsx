"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const isProjectDetails = pathname.startsWith("/project/");

  const navItems = [
    {
      name: "产品展示",
      href: "/",
    },
    {
      name: "洽谈记录",
      href: "/records",
    },
    {
      name: "后台",
      href: "/admin",
    },
  ];

  return (
    <div className=" bg-[#d9d9d9] h-[122px] p-7">
      <div className="max-w-[1414] mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="w-[281px] h-[65px] bg-[#888888] flex items-center justify-center">
          <p className="text-white font-medium text-center">Logo</p>
        </div>

        {/* navigation links */}
        <div className="flex items-center gap-[82px]">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  active ? "text-black" : "text-[#777777]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {isProjectDetails && (
            <Link
              href={pathname}
              className={`font-medium transition text-black`}
            >
              项目详情
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
