"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const param = await params;
      console.log(param)
      try {
        const res = await fetch(`/api/products/${param.projectId}`);
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, []);

  if (loading) {
    return <p className="mt-10 text-center">Loading...</p>;
  }

  return (
    <div className="mt-24">
      <div>
        <h1 className="font-medium text-4xl">{project.name}</h1>
        <p className="mt-8">{project.description}</p>
      </div>

      {/* IMAGES */}
      <div className="mt-6 space-y-8">
        {(project.images?.length > 0
          ? project.images
          : ["/images/placeholder.png"]
        ).map((img, index) => (
          <div key={index} className="relative w-full h-[644px]">
            <Image
              src={img || "/images/placeholder.png"}
              alt={project.name}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* DOCUMENTS */}
      <div className="mt-12">
        {project.documents?.map((d, index) => (
          <div className="mb-8 flex items-center justify-between" key={index}>
            <div className="flex items-center gap-11">
              <Image alt="pdf" src="/pdf.png" height={93} width={93} />
              <p className="font-medium text-lg">{d.name}</p>
            </div>

            <Link
              className="w-[130px] h-[61px] bg-[#d9d9d9] rounded-full font-medium text-2xl px-10 py-4"
              target="_blank"
              href={d.url}
            >
              查看
            </Link>
          </div>
        ))}
      </div>

      {/* CONTACTS */}
      <div className="my-[72px] flex items-start gap-10">
        <p className="font-medium text-lg">链接地址:</p>
        <div>
          {project.contacts?.map((c, i) => (
            <p key={i} className="font-medium text-lg">
              {c}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
