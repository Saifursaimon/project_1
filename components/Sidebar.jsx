'use client'

import { categories } from "@/data/categories";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className=" w-[262px] bg-[#f8f8f8] pt-[34px]">
      <div className="flex flex-col gap-5">
        {categories.map((c) => {
            const isActive = selected === c.name_zh;

          return (
            <div
              key={c.name_zh}
              onClick={() => setSelected(c.name_zh)}
              className={`
                w-full flex items-center gap-5 px-3 py-2 transition cursor-pointer
                ${isActive ? "bg-[#ebebeb]" : "hover:bg-[#ebebeb]"}
              `}
            >
              <div className="h-8 w-8 bg-[#bfbfbf]" />
              <p className="text-xl">{c.name_zh}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
