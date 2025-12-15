"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ContractPreview from "@/components/ContractPreview";

export default function PreviewPage() {
    const router = useRouter();
  const searchParams = useSearchParams();
  const raw = searchParams.get("data");

  if (!raw) return <div className="p-6">No data available</div>;

  let data = {};
  try {
    data = JSON.parse(decodeURIComponent(raw));
  } catch (err) {
    return <div className="p-6">Invalid data</div>;
  }

  

  return (
    <div className="p-6">
      <div className="print-section">
        <ContractPreview data={data} />
      </div>

      <div className="mt-6 flex justify-end max-w-[794px] mx-auto">
        <div className="flex items-center gap-8">
        <button
          onClick={() => router.push('/')}
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
            返回首页
        </button>
        <button
          onClick={() => window.print()}
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          打印合同
        </button>

        </div>
      </div>
    </div>
  );
}
