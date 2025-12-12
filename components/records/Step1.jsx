import { useFormContext } from "react-hook-form";

const Step1 = () => {
  const { register } = useFormContext();

  return (
    <div className="mt-14">
      <h1 className="text-4xl font-medium">基础信息</h1>
      <div className="mt-9 w-full bg-white p-6">
        <h3 className="font-medium text-2xl">客户信息</h3>
        <div className="mt-16 p-2">
          <div className="flex items-start gap-12">
            <h3 className="font-medium text-[22px] w-1/5">客户全称/类型：</h3>
            <div className="w-3/4">
              <div className="flex items-start gap-14">
                <div>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        value="企业"
                        {...register("basicInfo.type")}
                      />
                      <p>企业</p>
                    </label>
                    <input
                      className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                      type="text"
                      placeholder="请填写企业信息"
                      {...register("basicInfo.companyName")}
                    />
                  </div>
                  <div className="flex items-center gap-6 mt-8">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        value="个人"
                        {...register("basicInfo.type")}
                      />
                      <p>个人</p>
                    </label>
                    <input
                      className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                      type="text"
                      placeholder="请填写企业信息"
                      {...register("basicInfo.personalName")}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <label htmlFor="department">所属部门:</label>
                  <select
                    id="department"
                    {...register("basicInfo.department")}
                    className="bg-[#f5f6f8] px-8 py-3.5 rounded-lg"
                  >
                    <option defaultChecked value="">
                      请选择部门
                    </option>
                    <option value="研发">研发</option>
                    <option value="市场">市场</option>
                    <option value="销售">销售</option>
                    <option value="人事">人事</option>
                    <option value="财务">财务</option>
                    <option value="行政">行政</option>
                    <option value="法务">法务</option>
                  </select>
                </div>
              </div>
              <div className="flex items-start gap-12 mt-9">
                <p className="whitespace-nowrap">备注: </p>
                <textarea
                  {...register("basicInfo.remark")}
                  className="border p-3 w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12 mt-11">
            <h3 className="font-medium text-[22px] w-1/5">核心对接人：</h3>
            <div className="w-3/4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-6">
                  <label className="whitespace-nowrap">姓名：</label>
                  <input
                    className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg"
                    type="text"
                    placeholder="请填写客户姓名"
                    {...register("basicInfo.contactPerson.name")}
                  />
                </div>
                <div className="flex items-center gap-6">
                  <label htmlFor="position" className="whitespace-nowrap">
                    职务：
                  </label>
                  <select
                    id="position"
                    {...register("basicInfo.contactPerson.position")}
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
                    {...register("basicInfo.contactPerson.phone")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12 mt-14">
            <h3 className="font-medium text-[22px] w-1/5">合作背景：</h3>
            <div className="w-3/4">
              <div className="flex items-center gap-12 ">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("basicInfo.collab.firstTime")}
                  />
                  <label>首次合作 </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("basicInfo.collab.repeat")}
                  />
                  <label>复购 </label>
                </div>

                <div className="flex items-center gap-8 ">
                  <label className="whitespace-nowrap">历史项目：</label>
                  <input
                    className="bg-[#f5f6f8] px-6 py-3.5 rounded-lg w-full"
                    type="text"
                    placeholder="请填写历史合作或项目编号"
                    {...register("basicInfo.collab.projectHistory")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-12 mt-14">
            <h3 className="font-medium text-[22px] w-1/5">洽谈方式/平台：</h3>
            <div className="w-3/4">
              <div className="flex items-center gap-20">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("basicInfo.discussionPlatform.companyOffice")}
                  />
                  <label>公司办公室 </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("basicInfo.discussionPlatform.clientOffice")}
                  />
                  <label>客户办公室 </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("basicInfo.discussionPlatform.videoCall")}
                  />
                  <label>远程视频 </label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    {...register("basicInfo.discussionPlatform.other")}
                  />
                  <label>其他 </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
