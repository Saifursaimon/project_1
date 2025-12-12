import React from "react";
import ImageTooltip from "../ImageToolTip";
import { useFormContext } from "react-hook-form";

const Step2 = () => {
  const { register } = useFormContext();
  return (
    <div className="mt-9 w-full bg-white p-6">
      <div>
        <h2 className="font-medium text-[26px]">1、项目介绍</h2>
        <div className="flex items-start gap-14 mt-14">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              开发的背景或原因：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="（客户为什么要做这个项目？解决什么问题？抓住什么机会？当前业务是如何运作的？痛点在哪里？）"
            />
          </div>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写开发的背景或原因"
            {...register("coreNeeds.reason")}
          />
        </div>
        <div className="flex items-start gap-14 mt-6">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              核心目标：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="（项目成功上线后，希望达到的具体、可衡量的目标是什么？例如：将订单处理时间缩短30%，将客户转化率提升15%，实现业务全流程线上化等。）"
            />
          </div>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写开发的核心目标"
            {...register("coreNeeds.objective")}
          />
        </div>
        <div className="flex items-start gap-14 mt-6">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              用户目标：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="（软件给谁用？内部员工、终端消费者、特定商户？请描述用户的基本特征和使用场景。）"
            />
          </div>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写开发的用户目标"
            {...register("coreNeeds.userGoal")}
          />
        </div>
      </div>
      <div className="mt-14">
        <h2 className="font-medium text-[26px]">2、核心范围与核心功能</h2>
        <div className="flex items-start gap-14 mt-14">
          <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
            参考软件/APP：
          </p>

          <input
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4"
            type="text"
            placeholder="请填写参考软件名称或网址"
            {...register("coreNeeds.referenceApp")}
          />
        </div>
        <div className="flex items-start gap-14 mt-14">
          <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
            项目/产品核心功能：{" "}
          </p>

          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写下项目/产品核心的功能"
            {...register("coreNeeds.coreFunctions")}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
