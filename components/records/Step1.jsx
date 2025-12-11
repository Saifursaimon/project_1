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
            <h3 className="font-medium text-[22px]">客户全称/类型：</h3>
            <div>
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
        </div>
      </div>
    </div>
  );
};

export default Step1;
