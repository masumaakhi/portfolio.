// src/app/data/projects.js
import { assets } from "../assets/assets";

const projects = [
  {
    image: assets.p1,
    title: "E-Commerce Website",
    description: "A food recipe app where users can browse, search, and submit recipes.",
    tasks: ["React", "Firebase", "HTML", "CSS", "TailwindCSS"],
    viewLink: "https://your-ecommerce.com",
    githubLink: "https://github.com/your-username/ecommerce",
  },
  {
    image: assets.p2,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing my skills, projects and contact info.",
    tasks: ["Next.js", "TailwindCSS", "Responsive Design"],
    viewLink: "https://your-portfolio.com",
    githubLink: "https://github.com/your-username/portfolio",
  },
  {
    image: assets.p3,
    title: "Blog Platform",
    description: "Full-featured blog app with authentication and comments.",
    tasks: ["Next.js", "MongoDB", "TailwindCSS", "JWT"],
    viewLink: "https://your-blog.com",
    githubLink: "https://github.com/your-username/blog",
  },
];

export default projects;
