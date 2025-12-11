"use client";

import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProject =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryId === selectedCategory);

  return (
    <div>
      <h1 className="font-medium text-[28px] my-5">业务分类</h1>

      <div className="flex min-h-screen mt-9 gap-5">
        <Sidebar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="flex-1">
          <div className="grid grid-cols-3 gap-5 items-start">
            {filteredProject.map((p) => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
