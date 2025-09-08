// src/app/data/projects.js
import { assets } from "../assets/assets";

const projects = [
      {
    image: assets.p4,
    title: "Food Recipe Website",
    description: "A food recipe app where users can browse, search, and submit recipes.",
    tasks: ["Nextjs", "MongoDb", "HTML", "CSS", "TailwindCSS", "JavaScript"],
    viewLink: "https://nextjsrecipes.netlify.app",
    githubLink: "https://github.com/masumaakhi/nextjsrecipes",
  },
   {
    image: assets.p5,
    title: "E-Commerce Shop Website",
    description: "Responsive e-commerce app with product listing, cart, and secure checkout optimized for speed.",
    tasks: ["Reactjs", "TailwindCSS", "Firebase", "JavaScript"],
    viewLink: "https://reactjsecomer.netlify.app",
    githubLink: "https://github.com/masumaakhi/reactjs.e-com",
  },  
  {
    image: assets.p3,
    title: "Authentication System",
    description: "Full-stack authentication system featuring JWT login, Google sign-in, and secure password reset.",
    tasks: ["HTML", "CSS", "JavaScript", "Reactjs", "Tailwindcss", "Express.js", "Node.js"],
    viewLink: "https://gleeful-dasik-8674b2.netlify.app",
    githubLink: "https://github.com/masumaakhi/mern-authenticate",
  },
   {
    image: assets.p6,
    title: "Foodie Website",
    description: "A food recipe app where users can browse, search, and submit recipes.",
    tasks: ["React", "Firebase", "HTML", "CSS", "TailwindCSS"],
    viewLink: "https://foodrecipeesa.netlify.app",
    githubLink: "https://github.com/your-username/ecommerce",
  },
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

];

export default projects;
