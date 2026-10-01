import React, { useState } from 'react';
import './App.css';
import { ProposalComparisonBanner } from './components/ProposalComparisonBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionFinder } from './components/SolutionFinder';
import { ProgramsSection } from './components/ProgramsSection';
import { TimelineSection } from './components/TimelineSection';
import { DifferentiatorsSection } from './components/DifferentiatorsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { ProgramDetailModal } from './components/ProgramDetailModal';
import type { Program } from './data/programsData';

export const App: React.FC = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedProgramNameForBooking, setSelectedProgramNameForBooking] = useState<string | undefined>();
  const [selectedProgramForDetail, setSelectedProgramForDetail] = useState<Program | null>(null);

  const handleOpenSchedule = (programName?: string) => {
    setSelectedProgramNameForBooking(programName);
    setIsScheduleModalOpen(true);
  };

  const handleCloseSchedule = () => {
    setIsScheduleModalOpen(false);
    setSelectedProgramNameForBooking(undefined);
  };

  const handleOpenProgramDetail = (program: Program) => {
    setSelectedProgramForDetail(program);
  };

  const handleCloseProgramDetail = () => {
    setSelectedProgramForDetail(null);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Strategic Comparison Notice */}
      <ProposalComparisonBanner />

      {/* Main Navigation */}
      <Navbar 
        onOpenSchedule={() => handleOpenSchedule()} 
        onSelectProgram={() => {}}
      />

      <main>
        {/* Hero Section */}
        <Hero 
          onOpenSchedule={() => handleOpenSchedule()} 
          onExplorePrograms={handleExplorePrograms}
        />

        {/* Flagship: Interactive Solution Finder */}
        <SolutionFinder 
          onOpenSchedule={() => handleOpenSchedule()}
          onOpenProgramDetail={handleOpenProgramDetail}
        />

        {/* Educational Programs Showcase */}
        <ProgramsSection 
          onOpenProgramDetail={handleOpenProgramDetail}
          onOpenSchedule={() => handleOpenSchedule()}
        />

        {/* Timeline: A Day at AKdemia */}
        <TimelineSection 
          onOpenSchedule={() => handleOpenSchedule()}
        />

        {/* Key Differentiators & Screen-free Banner */}
        <DifferentiatorsSection />

        {/* Philosophy, Mission & Testimonials */}
        <PhilosophySection />

        {/* FAQs */}
        <FAQSection />
      </main>

      {/* Footer & Legal Modals */}
      <Footer />

      {/* Interactive Modals */}
      <ScheduleVisitModal 
        isOpen={isScheduleModalOpen}
        onClose={handleCloseSchedule}
        defaultProgramName={selectedProgramNameForBooking}
      />

      <ProgramDetailModal 
        program={selectedProgramForDetail}
        onClose={handleCloseProgramDetail}
        onOpenSchedule={(name) => handleOpenSchedule(name)}
      />
    </div>
  );
};

export default App;
