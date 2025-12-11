import { projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const param = await params;

  const project = projects.find((p) => p.id == param.projectId);

  return (
    <div className="mt-24">
      <div>
        <h1 className="font-medium text-4xl">{project.name}</h1>
        <p className="mt-8">{project.description}</p>
      </div>
      <div className="mt-6">
        {project.images.map((i,index) => (
          <Image key={index} alt="" className="mb-8" src={i} width={1440} height={644} />
        ))}
      </div>
      <div className="mt-12">
        {project.documents.map((d, index) => {
          return (
            <div className="mb-8 flex items-center justify-between" key={index}>
              <div className="flex items-center gap-11">
                <Image alt="" src="/pdf.png" height={93} width={93} />
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
          );
        })}
      </div>
      <div className="my-[72px] flex items-start gap-10">
        <p className="font-medium text-lg">链接地址:</p>
        <div>
          {project.contacts.map((c) => (
            <p className="font-medium text-lg">{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
