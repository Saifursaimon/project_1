"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  /* ----------  states  ---------- */
  const [coverPreview, setCoverPreview] = useState("");
  const [imagePreviews, setImagePreviews] = useState([]);
  const [pdfPreviews, setPdfPreviews] = useState([]);
  const [savedLinks, setSavedLinks] = useState([]);

  /* ----------  submit  ---------- */
  const onSubmit = (data) => {
    console.log("Form Data:", {
      productName: data.productName,
      productCategory: data.productCategory,
      productDescription: data.productDescription,
      coverImage: data.coverImage?.name || null,
      images: imagePreviews.map((p) => p.file.name),
      documents: pdfPreviews.map((p) => p.file.name),
      links: savedLinks,
    });
    router.push("/admin");
  };

  /* ----------  cover  ---------- */
  const handleCoverChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setValue("coverImage", file);
    const reader = new FileReader();
    reader.onloadend = () => setCoverPreview(reader.result);
    reader.readAsDataURL(file);
  };

  /* ----------  images (multiple)  ---------- */
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () =>
        setImagePreviews((prev) => [...prev, { url: reader.result, file }]);
      reader.readAsDataURL(file);
    });
  };
  const removeImage = (idx) =>
    setImagePreviews((prev) => prev.filter((_, i) => i !== idx));

  /* ----------  PDFs (multiple)  ---------- */
  const handlePdfChange = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      setPdfPreviews((prev) => [...prev, { name: file.name, file }]);
    });
  };
  const removePdf = (idx) =>
    setPdfPreviews((prev) => prev.filter((_, i) => i !== idx));

  /* ----------  links  ---------- */
  const handleSaveLink = () => {
    const raw = watch("links");
    if (!raw) return;
    setSavedLinks((prev) => [...prev, raw]);
    setValue("links", "");
  };
  const removeLink = (idx) =>
    setSavedLinks((prev) => prev.filter((_, i) => i !== idx));

  return (
    <div>
      <div className="bg-white m-4 rounded-lg p-8">
        <div className="max-w-4xl mx-auto">
          {/* header */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1 h-5 bg-[#919919]" />
            <h1 className="font-semibold text-lg">产品管理</h1>
          </div>

          <form className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-4 flex-1">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  *产品名称
                </label>
                <input
                  {...register("productName", { required: "请输入作品名称" })}
                  placeholder="请输入作品名称"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {errors.productName && (
                  <span className="text-red-500 text-sm">
                    {errors.productName.message}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 flex-1">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  *产品分类
                </label>
                <select
                  {...register("productCategory", {
                    required: "请选择作品分类",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">请选择作品分类</option>
                  <option value="display">展示类型</option>
                  <option value="ecommerce">电子商务</option>
                  <option value="oa">OA</option>
                  <option value="inventory">库存管理</option>
                  <option value="multi-vendor">多供应商电子商务</option>
                  <option value="service">服务</option>
                  <option value="social">社交媒体</option>
                  <option value="other">其他</option>
                </select>
                {errors.productCategory && (
                  <span className="text-red-500 text-sm">
                    {errors.productCategory.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-start gap-4">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap pt-2">
                *产品描述
              </label>
              <textarea
                {...register("productDescription", {
                  required: "请输入作品描述",
                })}
                placeholder="请输入作品描述"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              />
              {errors.productDescription && (
                <span className="text-red-500 text-sm">
                  {errors.productDescription.message}
                </span>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                上传封面
              </label>
              <div className="w-1/3 border-2 border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="hidden"
                  id="cover-upload"
                  name="coverImage"
                />
                <label htmlFor="cover-upload" className="cursor-pointer">
                  {coverPreview ? (
                    <img
                      src={coverPreview}
                      alt="cover"
                      className=" rounded-lg"
                    />
                  ) : (
                    <>
                      <Plus className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-600">
                        上传产品封面
                      </span>
                    </>
                  )}
                </label>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-2">
                <label className="text-sm font-medium text-gray-700">
                  上传图片
                </label>
                <span className="text-sm text-[#636363]">
                  单个文件最大支持20M，支持jpg/png
                </span>
              </div>
              <div className="w-1/4 bg-[#EEEEEE] rounded-lg p-6 text-center hover:bg-[#dad7d7] transition-colors cursor-pointer">
                <input
                  {...register("images")}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImagesChange}
                  className="hidden"
                  id="images-upload"
                />
                <label htmlFor="images-upload" className="cursor-pointer">
                  <p className="font-medium text-lg">点击上传</p>
                </label>
              </div>

              {imagePreviews.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {imagePreviews.map((p, idx) => (
                    <div key={idx} className="relative">
                      <img
                        src={p.url}
                        alt={`img-${idx}`}
                        className="h-24 w-24 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow"
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-4 mb-2">
                <label className="text-sm font-medium text-gray-700">
                  上传文档
                </label>
                <span className="text-sm text-[#636363]">PDF格式20M以内</span>
              </div>
              <div className="w-1/4 bg-[#EEEEEE] rounded-lg p-6 text-center hover:bg-[#dad7d7] transition-colors cursor-pointer">
                <input
                  {...register("documents")}
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={handlePdfChange}
                  className="hidden"
                  id="docs-upload"
                />
                <label htmlFor="docs-upload" className="cursor-pointer">
                  <p className="font-medium text-lg">点击上传</p>
                </label>
              </div>

              {pdfPreviews.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {pdfPreviews.map((p, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between w-1/3 px-3 py-1 "
                    >
                      <div className="flex items-center gap-5">
                        <Image
                          alt="pdf"
                          src="/pdf.png"
                          height={48}
                          width={48}
                        />
                        <p> {p.name}</p>
                      </div>

                      <button type="button" onClick={() => removePdf(idx)}>
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                上传链接
              </label>

              {savedLinks.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {savedLinks.map((link, idx) => (
                    <span
                      key={idx}
                      className="flex items-center w-1/3 justify-between px-3 py-1"
                    >
                      <p>{link}</p>
                      <button type="button" onClick={() => removeLink(idx)}>
                        <X className="h-5 w-5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4">
                <input
                  {...register("links")}
                  type="url"
                  placeholder="请输入或粘贴你要上传的链接"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="button"
                  onClick={handleSaveLink}
                  className="px-6 py-2 bg-[#AEAEAE] text-white rounded-lg hover:bg-[#d3d1d1] transition-colors"
                >
                  保存
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="  m-4 flex justify-end">
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="px-6 py-2 bg-[#AEAEAE] text-white rounded-lg hover:bg-[#d3d1d1] transition-colors"
        >
          上传
        </button>
      </div>
    </div>
  );
}
