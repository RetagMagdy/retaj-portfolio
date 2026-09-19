
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}