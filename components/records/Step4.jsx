import React from "react";
import { useFormContext } from "react-hook-form";

const Step4 = () => {
  const { register } = useFormContext();
  return (
    <div className="mt-14">
      <h1 className="text-4xl font-medium">客户特殊需求</h1>
      <div className="mt-9 w-full bg-white p-6">
        <div>
          <div className="flex items-start gap-14 mt-14">
            <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
              客户特殊需求：
            </p>

            <textarea
              className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
              placeholder="请填写客户特殊需求"
              {...register("specialNeeds.customerRequirements")}
            />
          </div>
          <div className="flex items-start gap-14 mt-6">
            <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
              洽谈遗留问题：
            </p>

            <textarea
              className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
              placeholder="请填写客户特殊需求"
              {...register("specialNeeds.negotiationIssues")}
            />
          </div>
          <div className="flex items-start gap-14 mt-6">
            <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
              潜在风险点：
            </p>

            <textarea
              className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
              placeholder="请填写客户特殊需求"
              {...register("specialNeeds.potentialRisks")}
            />
          </div>
          <div className="flex items-start gap-14 mt-6">
            <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
              内部跟进：
            </p>
            <div className="w-3/4">
              <textarea
                className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-full  h-40"
                placeholder="请填写客户特殊需求"
                {...register("specialNeeds.internalFollowUp")}
              />
              <div className="flex items-center gap-36 mt-6">
                <div className="flex items-center gap-6">
                  <label className="whitespace-nowrap">记录人</label>
                  <input
                    className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                    type="text"
                    placeholder="请填写记录人"
                    {...register("specialNeeds.recorder.name")}
                  />
                </div>

                <div className="flex items-center gap-6">
                  <label className="whitespace-nowrap">记录时间</label>
                  <div className="flex gap-3">
                    {/* Year */}
                    <select
                      {...register("specialNeeds.recorder.date.year")}
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
                      {...register("specialNeeds.recorder.date.month")}
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
                      {...register("specialNeeds.recorder.date.day")}
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-14 mt-11">
          <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
            客户信息：
          </p>

          <div className="w-3/4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6">
                <label className="whitespace-nowrap">姓名：</label>
                <input
                  className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                  type="text"
                  placeholder="请填写客户姓名"
                  {...register("specialNeeds.contactPerson.name")}
                />
              </div>
              <div className="flex items-center gap-6">
                <label htmlFor="position" className="whitespace-nowrap">
                  职务：
                </label>
                <select
                  id="position"
                  {...register("specialNeeds.contactPerson.position")}
                  className="bg-[#f5f6f8] px-8 py-3.5 rounded-lg"
                >
                  <option defaultChecked value="">
                    请选择职务
                  </option>
                  <option value="经理">经理</option>
                  <option value="主管">主管</option>
                  <option value="专员">专员</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div className="flex items-center gap-6">
                <label className="whitespace-nowrap">电话：</label>
                <input
                  className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                  type="number"
                  placeholder="请输入联系方式"
                  {...register("specialNeeds.contactPerson.phone")}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6 mt-5">
                <label className="whitespace-nowrap">微信：</label>
                <input
                  className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                  type="text"
                  placeholder="请输入客户微信"
                  {...register("specialNeeds.contactPerson.wechat")}
                />
              </div>
            </div>
            <div className="h-px my-5 w-full bg-[#eaeaea]" />
            <div className="flex items-center gap-9">
              <div className="flex items-center gap-6">
                <label className="whitespace-nowrap">助理：</label>
                <input
                  className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                  type="text"
                  placeholder="请填写助理姓名"
                  {...register("specialNeeds.assistant.name")}
                />
              </div>
               <div className="flex items-center gap-6">
                <label className="whitespace-nowrap">电话：</label>
                <input
                  className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                  type="number"
                  placeholder="请填写助理电话"
                  {...register("specialNeeds.assistant.phone")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-14 mt-6">
            <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
              其他补充： 
            </p>

            <textarea
              className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
              placeholder="请填写客户其他需求"
              {...register("specialNeeds.additionalNotes")}
            />
          </div>
      </div>
    </div>
  );
};

export default Step4;
