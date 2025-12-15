"use client";

import ProjectCard from "@/components/ProjectCard";
import RecentProjectCard from "@/components/RecentProjectCard";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 6;

export default function Page() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");

  const handleDelete = async (projectId) => {
  
    try {
       const res = await fetch(`/api/products/${projectId}`,{
        method: "DELETE",
       });

      console.log(res)

      if (!res.ok) throw new Error("Delete failed");

      setProducts((prev) => prev.filter((p) => p._id !== projectId));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  console.log(products);

  // ✅ Filter by category
  const filtered = useMemo(() => {
    return category
      ? products.filter((p) => p.category === category)
      : products;
  }, [products, category]);

  // ✅ Pagination
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const list = filtered.slice(start, start + PAGE_SIZE);

  if (loading) {
    return <p className="mt-20 text-center">Loading...</p>;
  }

  return (
    <div className="w-full min-h-screen p-5">
      {/* ===== TABLE ===== */}
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

        {/* ===== TABLE BODY ===== */}
        <div className="mt-7">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#f9fafb] text-base font-medium text-[#979797]">
                <th className="text-left px-4 py-3">产品名称</th>
                <th className="text-left px-4 py-3">上传时间</th>
                <th className="text-left px-4 py-3">产品分类</th>
                <th className="text-center px-4 py-3">操作</th>
              </tr>
            </thead>

            <tbody>
              {list.map((item) => (
                <tr
                  key={item._id}
                  className="border-[#E5E5E5] border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3 text-center space-x-3">
                    <button
                      onClick={() => router.push(`/project/${item._id}`)}
                      className="hover:text-black text-gray-600"
                    >
                      查看
                    </button>
                    <button
                      onClick={() => router.push(`/admin/product/${item._id}`)}
                      className="hover:text-black text-gray-600"
                    >
                      编辑
                    </button>
                    <button onClick={()=>handleDelete(item._id)} className="hover:text-red-600 text-gray-600">
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ===== PAGINATION ===== */}
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
          </div>
        </div>
      </div>

      {/* ===== RECENT PRODUCTS ===== */}
      <div className="w-full bg-white rounded-lg mt-5 p-5">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#919191]" />
          <p className="font-semibold text-lg">最新作品</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-6">
          {products.slice(0, 4).map((p) => (
            <RecentProjectCard key={p._id} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
