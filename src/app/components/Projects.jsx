// src/app/components/Projects.jsx
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import projects from "../data/projects"; // ✅ FIXED

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-800 min-h-screen py-12 px-6">
      <h1 className="text-center text-white text-4xl font-bold mb-10">My Projects</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link
          href="/projects"
          className="px-6 py-3 rounded-[22px] bg-blue-400 text-white font-medium hover:bg-blue-700 transition"
        >
          See More →
        </Link>
      </div>
    </div>
  );
}
