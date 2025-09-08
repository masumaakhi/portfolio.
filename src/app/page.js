import dynamic from 'next/dynamic';
import Header from "./components/Header";

// Dynamic imports for better code splitting
const About = dynamic(() => import("./components/About"), {
  loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-lg" />,
});

const Techstack = dynamic(() => import("./components/Techstack"), {
  loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-lg" />,
});

const Projects = dynamic(() => import("./components/Projects"), {
  loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-lg" />,
});

const Contact = dynamic(() => import("./components/contact"), {
  loading: () => <div className="h-96 bg-slate-800 animate-pulse rounded-lg" />,
});

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Techstack />
      <Projects />
      <Contact />
    </>
  );
}
