"use client";

import { useEffect, useState } from "react";
import PinLogin from "@/components/PinLogin";
import { useRouter } from "next/navigation";
import Step1 from "@/components/records/Step1";

export default function RecordsPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    "基础信息",
    "核心需求明细",
    "项目约束与期望",
    "特殊需求与问题跟进",
  ];

  const handleNext = () => {
    if (step == steps.length - 1) {
      router.push("/");
    } else {
      setStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    const isVerified = localStorage.getItem("record_pin_verified");
    if (isVerified === "true") {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) {
    return <PinLogin onSuccess={() => setAuthorized(true)} />;
  }

  return (
    <div className="p-5 mt-20 ">
      {/* Step indicator */}
      <div className="flex items-center gap-4 mb-8">
        {steps.map((s, index) => (
          <div key={index} className="flex-1 text-center">
            <div className="flex items-center -mr-5">
              <div
                className={`w-4 h-4 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ease-in-out ${
                  index <= step ? "bg-black " : "bg-[#a2a2a2]"
                } ${index < step && "h-5 w-5 bg-gray-400"}`}
              >
                <p className="text-white">{index < step ? "✓" : ""}</p>
              </div>
              <div
                className={`w-full h-px  ${
                  index <= step ? "bg-[#6e6e6e] " : "bg-[#565656]"
                }`}
              />
            </div>
            <div
              className={`mt-1 text-sm font-medium  ${
                index <= step ? "text-black" : "text-[#a2a2a2]"
              } ${index < step && " text-gray-400"} `}
            >
              {s}
            </div>
          </div>
        ))}
      </div>

      {/* Step content */}
      {step === 0 && (
        <Step1/>
      )}
      {step === 1 && <div>2...</div>}
      {step === 2 && <div>3...</div>}
      {step === 3 && <div>last...</div>}

      <div className="w-full flex justify-end">
      <div className="mt-5 flex gap-3">
        {step > 0 && (
          <button
            onClick={handleBack}
            className="bg-[#9a9a9a] text-4xl  text-white px-20 py-6 rounded-lg"
          >
            上一页
          </button>
        )}
        {step < steps.length && (
          <button
            onClick={handleNext}
            className="bg-[#9a9a9a] text-4xl  text-white px-20 py-6 rounded-lg"
          >
            下一页
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
