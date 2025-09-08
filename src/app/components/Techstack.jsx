import React from 'react'
import { Laptop2, DatabaseZap, Puzzle, Webhook, GraduationCap, Palette } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    icon: <Laptop2 size={32} />,
    items: ["HTML5", "CSS3", "ReactJs", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap", "Next.js"],
  },
  {
    title: "Backend & Database",
    icon: <DatabaseZap size={32} />,
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", "MySQL / SQL"],
  },
  {
    title: "Programming Languages",
    icon: <Puzzle size={32} />,
    items: ["C & C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Tools & Platforms",
    icon: <Webhook size={32} />,
    items: ["Git & GitHub", "VS Code", "Vercel", "Render", "Postman (API Testing)","Netlify",  "Firebase Hosting"],
  },
    {
    title: "Relevant Coursework",
    icon: <GraduationCap size={32} />,
    items: ["Algorithms", "Operating Systems", "OOP", "DBMS","System Design", "Software Architecture"],
  },
    {
    title: "Soft Skills",
    icon: <Palette size={32} />,
    items: ["Problem Solving", "Collaboration", "Adaptability", "Self-learning", "Time Management", "Leadership"],
  }
];


const Techstack = () => {
  return (
   <section id="tech" className="bg-slate-900 text-[#F8FAFC] py-16">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Technical Expertise
      </h2>
     <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-8"> 
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-700 p-8 rounded-2xl shadow-xl"
          >
            <div className="mb-4 text-[#38BDF8]">{skill.icon}</div>
            <h2 className="text-2xl font-semibold mb-6">{skill.title}</h2>
            <div className="flex flex-wrap gap-4">
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  className="techstack bg-slate-600 text-[#F8FAFC] px-4 py-2 rounded-[24px] text-sm  border-1 border-[#38BDF8]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Techstack