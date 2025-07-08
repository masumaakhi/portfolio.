import Image from "next/image";
import Header from "./components/Header";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import ContactForm from "./components/contact";

export default function Home() {
  return (
    < >
      <Header />
      <About />
      <Techstack />
      <Projects />
      <ContactForm />
    </>
  );
}
