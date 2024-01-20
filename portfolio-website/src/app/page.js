import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#372E29] container mx-auto px-12 py-4" >
      <Navbar />
      <div class='container mt-20 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>

      <Footer />
    </main>

  )
}
