"use client";

import { useEffect, useState } from "react";
import PinLogin from "@/components/PinLogin";

export default function RecordsPage() {
  const [authorized, setAuthorized] = useState(false);

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
    <div className="p-10">
      <h1 className="text-2xl font-bold">洽谈记录页面</h1>
      <p className="mt-4">用户已成功登录，可查看记录内容。</p>
    </div>
  );
}
