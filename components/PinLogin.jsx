"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PinLogin({ onSuccess }) {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const router = useRouter();

  const correctPIN = "123456"; // 👉 Local PIN (change anytime)

  const handleChange = (value, index) => {
    if (value.length > 1) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move to next input automatically
    if (value && index < 5) {
      document.getElementById(`pin-${index + 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredPin = pin.join("");
    if (enteredPin === correctPIN) {
      localStorage.setItem("record_pin_verified", "true");
      onSuccess();
    } else {
      alert("密码错误，请重试！");
      setPin(["", "", "", "", "", ""]);
      document.getElementById("pin-0").focus();
    }
  };

  const handleCancell = () => {
    setPin(["", "", "", "", "", ""]);
    router.push("/");
  };

  return (
    <div className="w-full h-full flex justify-center mt-20">
      <div className="bg-[#eee] px-12 py-10 rounded-3xl shadow-md text-center">
        <div className="w-[154px] h-[154px] bg-[#a7a7a7] mx-auto mb-4 flex items-center justify-center">
          <p className="font-medium text-lg text-white">icon</p>
        </div>

        <p className="font-semibold text-2xl mb-5">请输入密码</p>

        {/* PIN boxes */}
        <div className="flex gap-3 justify-center mb-6">
          {pin.map((digit, i) => (
            <input
              key={i}
              id={`pin-${i}`}
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-10 h-12 border border-gray-400 text-center rounded-md text-lg"
            />
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={handleCancell}
            className="w-24 h-10 bg-gray-300 rounded-md"
          >
            取  消
          </button>

          <button
            onClick={handleSubmit}
            className="w-24 h-10 bg-gray-400 text-white rounded-md"
          >
          解  锁
          </button>
        </div>
      </div>
    </div>
  );
}
