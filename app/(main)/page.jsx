import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

export default function Home() {
  return (
    <div className="mt-9 flex flex-col">
      <h1 className="font-medium text-[28px]">业务分类</h1>
      <div className="flex h-full gap-5 mt-5">
        <Sidebar />
        <div className="grid grid-cols-3 gap-5  ">
          {projects.map((p) => (
           <ProjectCard key={p.id} p={p}/>
          ))}
        </div>
      </div>
    </div>
  );
}
