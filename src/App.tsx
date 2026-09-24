/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { MissionVision } from './components/MissionVision';
import { ActionLines } from './components/ActionLines';
import { DonationsSection } from './components/DonationsSection';
import { Footer } from './components/Footer';
import { VolunteerModal } from './components/VolunteerModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { HeartSplash } from './components/HeartSplash';

export default function App() {
  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2320]">
      {/* Intro Heart Splash Animation upon opening */}
      <HeartSplash />

      {/* Top navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Nuestra historia */}
        <StorySection />

        {/* 3. Misión y visión */}
        <MissionVision />

        {/* 4. ¿Cómo ayudamos? */}
        <ActionLines
          onOpenVolunteer={() => setVolunteerModalOpen(true)}
        />

        {/* 5. Donaciones (Coordinación previa por correo) */}
        <DonationsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <ScrollToTopButton />

      {/* Interactive Modals */}
      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
      />
    </div>
  );
}
