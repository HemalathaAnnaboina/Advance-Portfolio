import React, { useState } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import FeaturedProjects from './components/FeaturedProjects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      {/* Dynamic Ambient Particle Grid Background */}
      <BackgroundCanvas />

      {/* Sticky Responsive Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections - Strictly aligned with 10 Navigation Items */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <TechnicalSkills />
        <FeaturedProjects />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* Footer with Telugu Java Coders under Developer Community & Learning */}
      <Footer />

      {/* Interactive Resume Modal Viewer */}
      <ResumeModal isOpen={resumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}
