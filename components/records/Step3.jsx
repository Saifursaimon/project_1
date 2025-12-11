import React from "react";
import { useFormContext } from "react-hook-form";
import ImageTooltip from "../ImageToolTip";

const Step3 = () => {
  const { register } = useFormContext();
  return (
    <div className="mt-16">
      <div className="mt-9 w-full bg-white p-6">
        <div className="flex items-center gap-14 mt-6">
          <div className="flex items-center">
            <p className="whitespace-nowrap w-40 font-medium text-[22px]">
              期望上线时间：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="是否有硬性截止日期？（如：配合活动、财年结束）、关键里程碑：是否有重要的中间节点？"
            />
          </div>
          <div className="flex gap-3">
            {/* Year */}
            <select
              {...register("projectConstraints.date.year")}
              className="bg-[#f5f6f8] px-4 py-3.5 rounded-lg"
            >
              <option value="">年</option>
              {Array.from({ length: 50 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>

            {/* Month */}
            <select
              {...register("projectConstraints.date.month")}
              className="bg-[#f5f6f8] px-4 py-3.5 rounded-lg"
            >
              <option value="">月</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Day */}
            <select
              {...register("projectConstraints.date.day")}
              className="bg-[#f5f6f8] px-4 py-3.5 rounded-lg"
            >
              <option value="">日</option>
              {Array.from({ length: 31 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-11 flex  items-center gap-14">
          <label className="font-medium text-[22px] w-44">预算管控：</label>
          <input
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4"
            type="text"
            placeholder="请填写大概预算"
            {...register("projectConstraints.budgetControll")}
          />
        </div>
        <div className="my-11 flex  items-center gap-14">
          <label className="font-medium text-[22px] w-44">其他内容：</label>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写其他内容"
            {...register("projectConstraints.other")}
          />
        </div>
      </div>
    </div>
  );
};

export default Step3;
