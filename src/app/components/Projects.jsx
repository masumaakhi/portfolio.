import ProjectCard from "./ProjectCard";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

export default function Projects() {
  return (
    <div id="projects" className="bg-slate-800 min-h-screen py-12 px-6">
      <h1 className="text-center text-white text-4xl font-bold mb-10">My Projects</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          image={p1}
          title="E-Commerce Website"
          description="A food recipe app where users can browse, search, and submit recipes."
          tasks={["React", "Firebase", "HTML", "CSS", "TailwindCSS"]}
        />

        <ProjectCard
          image={p2}
          title="Portfolio Website"
          viewLink="https://your-portfolio-site.com"
          githubLink="https://github.com/your-username/portfolio-project"
          description="Personal portfolio showcasing my skills, projects and contact info."
          tasks={["Next.js", "TailwindCSS", "Responsive Design"]}
        />

        <ProjectCard
          image={p3}
          title="Portfolio Website"
          description="Personal portfolio showcasing my skills, projects and contact info."
          tasks={["Next.js", "TailwindCSS", "Responsive Design"]}
        />
      </div>
    </div>
  );
}
