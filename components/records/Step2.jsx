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
            项目/产品名称：
          </p>
          <div className="w-3/4 flex items-center gap-20">
            <div className="flex items-center gap-8 w-1/2">
              <label className="whitespace-nowrap">暂定名称</label>
              <input
                className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-full"
                type="text"
                placeholder="请填写暂定名称"
                {...register("coreNeeds.projectName.provisionalName")}
              />
            </div>
            <div className="flex items-center gap-8 w-1/2">
              <label className="whitespace-nowrap">正式名称</label>
              <input
                className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-full"
                type="text"
                placeholder="请填写正式名称"
                {...register("coreNeeds.projectName.officialName")}
              />
            </div>
          </div>
        </div>
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
        <div className="flex items-start gap-14 mt-14">
          <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
            计划开发生态：
          </p>

          <div>
            <div className="flex items-center gap-x-20">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="web端"
                  {...register("coreNeeds.developmentEcosystem.web")}
                />
                <p>web端</p>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="IOS移动端"
                  {...register("coreNeeds.developmentEcosystem.ios")}
                />
                <p>IOS移动端</p>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="安卓移动端"
                  {...register("coreNeeds.developmentEcosystem.android")}
                />
                <p>安卓移动端</p>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="微信小程序"
                  {...register(
                    "coreNeeds.developmentEcosystem.wechatMiniProgram"
                  )}
                />
                <p>微信小程序</p>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="公众号"
                  {...register(
                    "coreNeeds.developmentEcosystem.wechatOfficialAccount"
                  )}
                />
                <p>公众号</p>
              </label>
            </div>
            <div className="mt-7 flex items-center gap-10">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  value="其他"
                  {...register("coreNeeds.developmentEcosystem.other")}
                />
                <p className="whitespace-nowrap">其他</p>
              </label>
              <input
                className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-full"
                type="text"
                placeholder="请填写其他开发生态"
                {...register("coreNeeds.developmentEcosystem.otherText")}
              />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-14 mt-14 ">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              页面风格：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="公司或产品的UI/商标/色彩要求"
            />
          </div>
          <div>
            <div className="flex items-center gap-x-24 ">
              <label className="flex items-center gap-3 ">
                <input
                  type="checkbox"
                  value="公司或产品专属的UI或色彩要求"
                  {...register("coreNeeds.pageStyle.companySpecific")}
                />
                <p>公司或产品专属的UI或色彩要求</p>
              </label>
              <div className=" flex items-center gap-10">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    value="其他"
                    {...register("coreNeeds.pageStyle.other")}
                  />
                  <p className="whitespace-nowrap">其他</p>
                </label>
                <input
                  className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                  type="text"
                  placeholder="请填写偏向于哪种风格"
                  {...register("coreNeeds.pageStyle.otherText")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-14 mt-14">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              风险规避：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="项目/产品禁忌/合规要求"
            />
          </div>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-2/3 h-40"
            placeholder="请填写下风险规避"
            {...register("coreNeeds.riskAvoidance")}
          />
        </div>
      </div>
      <div className="mt-14">
        <h2 className="font-medium text-[26px]">3、 技术与集成偏好</h2>
        <div className="flex items-start gap-14 mt-14">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              域名及服务器：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="客户是否有可供使用的域名及服务器？以及相关的配置情况。"
            />
          </div>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写域名及服务器"
            {...register("coreNeeds.technicalPreferences.domainAndServer")}
          />
        </div>
        <div className="flex items-start gap-14 mt-6">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              技术偏好：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="客户是否有偏好的技术栈？（如：Java/Python， Vue/React， MySQL/PostgreSQL）"
            />
          </div>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写技术偏好"
            {...register("coreNeeds.technicalPreferences.techStack")}
          />
        </div>
        <div className="flex items-start gap-14 mt-6">
          <div className="flex items-center w-1/4">
            <p className="whitespace-nowrap font-medium text-[22px]">
              现有系统集成：
            </p>
            <ImageTooltip
              src="/tooltip.png"
              alt="Example"
              tooltipText="是否需要与客户现有的系统（如：ERP、CRM、支付系统）对接？
对方系统是否提供了接口文档？"
            />
          </div>
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写技术偏好"
            {...register("coreNeeds.technicalPreferences.systemIntegration")}
          />
        </div>
        <div className="flex items-start gap-14 mt-6">
          
            <p className="whitespace-nowrap font-medium text-[22px] w-1/4">
              其他内容：
            </p>
           
          <textarea
            className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-3/4 h-40"
            placeholder="请填写其他内容"
            {...register("coreNeeds.technicalPreferences.other")}
          />
        </div>
      </div>
    </div>
  );
};

export default Step2;
