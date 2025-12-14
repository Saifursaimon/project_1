"use client";

import Sidebar from "@/components/Sidebar";
import ProjectCard from "@/components/ProjectCard";
import { useState,useEffect } from "react";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Failed to load projects", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProject =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.categoryId === selectedCategory);

  if (loading) {
    return <p className="mt-10 text-center">Loading...</p>;
  }

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
              <ProjectCard key={p._id} p={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
