import Experience from "./components/Experince";
import GetTouch from "./components/gettouch";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
   <>
   <div className="relative w-full min-h-screen text-white overflow-hidden">

  {/*  GLOBAL BACKGROUND (only once here) */}
  <div className="fixed inset-0 -z-10 bg-[url('/imag.png')] bg-cover bg-center"></div>

  {/*  GLOBAL OVERLAY */}
  <div className="fixed inset-0 -z-10 bg-black/40"></div>

  <Hero />
  <Skills />
  <Projects/>
  <Experience/>
  <GetTouch/>
</div>
   </>
  );
}