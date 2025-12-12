"use client";

export default function ContractPreview({ data }) {
  const section = (title, children) => (
    <div className="mb-10">
      <h2 className="text-xl font-semibold border-b pb-1 mb-4 text-gray-800">
        {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  );

  const field = (label, value) =>
    value ? (
      <p className="text-gray-700">
        <span className="font-medium text-gray-900">{label}：</span>
        {value}
      </p>
    ) : null;

  // Formats meeting platform
  const platforms = Object.entries(data.basicInfo?.discussionPlatform || {})
    .filter(([_, v]) => v)
    .map(([k]) => {
      const map = {
        companyOffice: "公司办公地点",
        clientOffice: "客户办公地点",
        videoCall: "视频会议",
        other: "其他",
      };
      return map[k] || k;
    })
    .join("， ");

  // Formats ecosystems
  const ecosystem = Object.entries(data.coreNeeds?.developmentEcosystem || {})
    .filter(([_, v]) => v)
    .map(([_, v]) => v)
    .join("， ");

  const dateObj = data.projectConstraints?.date;
  const formattedDate =
    dateObj?.year && dateObj?.month && dateObj?.day
      ? `${dateObj.year}-${dateObj.month}-${dateObj.day}`
      : "";

  return (
    <div className="max-w-[794px] mx-auto bg-white p-10 text-[16px] text-gray-900 print:p-5">
      <h1 className="text-center text-3xl font-bold mb-10">
        项目合作需求确认书
      </h1>

      {/* SECTION 01 */}
      {section(
        "一、基本信息",
        <>
          {field("客户类型", data.basicInfo?.type?.join("， "))}
          {field("个人姓名", data.basicInfo?.personalName)}
          {field("公司名称", data.basicInfo?.companyName)}
          {field("部门", data.basicInfo?.department)}
          {field("洽谈平台", platforms)}
          {field("联系人", data.basicInfo?.contactPerson?.name)}
          {field("职位", data.basicInfo?.contactPerson?.position)}
          {field("联系方式", data.basicInfo?.contactPerson?.phone)}
          {field("日期", formattedDate)}
          {field("备注", data.basicInfo?.remark)}
        </>
      )}

      {/* SECTION 02 */}
      {section(
        "二、项目背景与目标",
        <>
          {field("项目暂定名", data.coreNeeds?.projectName?.provisionalName)}
          {field("项目正式名", data.coreNeeds?.projectName?.officialName)}
          {field(
            "是否首次合作",
            data.basicInfo?.collab?.firstTime ? "是" : "否"
          )}
          {field("合作历史", data.basicInfo?.collab?.projectHistory)}
          {field("项目目标", data.coreNeeds?.objective)}
          {field("用户目标", data.coreNeeds?.userGoal)}
          {field("核心功能", data.coreNeeds?.coreFunctions)}
          {field("参考应用", data.coreNeeds?.referenceApp)}
        </>
      )}

      {/* SECTION 03 */}
      {section(
        "三、设计与技术偏好",
        <>
          {field(
            "页面风格",
            data.coreNeeds?.pageStyle?.companySpecific ||
              data.coreNeeds?.pageStyle?.otherText
          )}
          {field("开发生态", ecosystem)}
          {field(
            "技术栈偏好",
            data.coreNeeds?.technicalPreferences?.techStack
          )}
          {field(
            "域名与服务器",
            data.coreNeeds?.technicalPreferences?.domainAndServer
          )}
          {field(
            "系统集成需求",
            data.coreNeeds?.technicalPreferences?.systemIntegration
          )}
          {field("其他技术偏好", data.coreNeeds?.technicalPreferences?.other)}
        </>
      )}

      {/* SECTION 04 */}
      {section(
        "四、风险与注意事项",
        <>
          {field("风险规避", data.coreNeeds?.riskAvoidance)}
          {field("项目原因/背景", data.coreNeeds?.reason)}
        </>
      )}

      {/* SECTION 05 */}
      {section(
        "五、项目限制条件",
        <>
          {field("预算控制", data.projectConstraints?.budgetControll)}
          {field("其他限制", data.projectConstraints?.other)}
        </>
      )}

      {/* SECTION 06 */}
      {section(
        "六、特殊需求与内部记录",
        <>
          {field("补充说明", data.specialNeeds?.additionalNotes)}
          {field("跟进人", data.specialNeeds?.assistant?.name)}
          {field("跟进电话", data.specialNeeds?.assistant?.phone)}
          {field("客户联系人", data.specialNeeds?.contactPerson?.name)}
          {field("客户职位", data.specialNeeds?.contactPerson?.position)}
          {field("客户电话", data.specialNeeds?.contactPerson?.phone)}
          {field("客户微信", data.specialNeeds?.contactPerson?.wechat)}
          {field("客户需求", data.specialNeeds?.customerRequirements)}
          {field("内部跟进记录", data.specialNeeds?.internalFollowUp)}
          {field("谈判事项", data.specialNeeds?.negotiationIssues)}
          {field("潜在风险", data.specialNeeds?.potentialRisks)}
          {field("记录人", data.specialNeeds?.recorder?.name)}
        </>
      )}
    </div>
  );
}
