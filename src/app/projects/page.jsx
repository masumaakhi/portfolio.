// src/app/projects/page.js
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function ProjectsPage() {
  return (
    <div className="my-12 bg-slate-800 min-h-screen py-12 px-6">
      <h1 className="text-center text-white text-4xl font-bold mb-10">
        All Projects
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
