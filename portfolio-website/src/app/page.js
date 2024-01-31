'use client';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectSection from '@/components/ProjectSection';
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className='flex min-w-full min-h-screen flex-col bg-[#372E29] container mx-auto px-4 py-4'>
      {/* <Navbar /> */}
      <Navigation />
      <div class='container mt-20 mx-auto items-center px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
