"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PAGE_SIZE = 6;

export default function Page() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");

  // Filter by category
  const filtered = category
    ? projects.filter((p) => p.category === category)
    : projects;

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const list = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="w-full min-h-screen p-5">
      <div className="w-full bg-white rounded-lg p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#919191]" />
            <p className="font-semibold text-lg">产品管理</p>
          </div>

          <div className="flex items-center gap-7">
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className="p-3 bg-[#eeeeee] rounded-lg"
            >
              <option value="">全部分类</option>
              <option value="展示类型">展示类型</option>
              <option value="电子商务">电子商务</option>
              <option value="OA">OA</option>
              <option value="库存管理">库存管理</option>
              <option value="多供应商电子商务">多供应商电子商务</option>
              <option value="服务">服务</option>
              <option value="社交媒体">社交媒体</option>
              <option value="其他">其他</option>
            </select>

            <button
              onClick={() => router.push("/admin/product/create")}
              className="flex items-center gap-3 p-3 bg-[#b2b2b2] rounded-lg"
            >
              <Image src="/plus.png" height={25} width={22} alt="plus" />
              <p className="font-medium text-lg text-white">创建作品</p>
            </button>
          </div>
        </div>
        <div className="mt-7">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f9fafb] text-base font-medium  text-[#979797]">
                <th className="text-left px-4 py-3">产品名称</th>
                <th className="text-left px-4 py-3">上传时间</th>
                <th className="text-left px-4 py-3">产品分类</th>
                <th className="text-center px-4 py-3">操作</th>
              </tr>
            </thead>

            <tbody>
              {list.map((item) => (
                <tr
                  key={item.id}
                  className="border-[#E5E5E5] border-b text-base text-[#404040] hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3 text-center space-x-3">
                    <button
                      onClick={() => router.push(`/project/${item.id}`)}
                      className="hover:text-black text-gray-600"
                    >
                      查看
                    </button>
                    <button
                      onClick={() => router.push(`admin/product/${item.id}`)}
                      className="hover:text-black text-gray-600"
                    >
                      编辑
                    </button>
                    <button className="hover:text-red-600 text-gray-600">
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center gap-2 mt-6 text-sm">
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-3 py-1 rounded ${
                    page === p
                      ? "bg-gray-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {p}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              下一页
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white rounded-lg mt-5 p-5">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#919191]" />
          <p className="font-semibold text-lg">产品管理</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-6">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
