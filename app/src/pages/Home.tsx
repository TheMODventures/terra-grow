import { HeroSection } from '@/sections/HeroSection';
import { ProblemSection } from '@/sections/ProblemSection';
import { WhatWeBuildSection } from '@/sections/WhatWeBuildSection';
import { IndustriesSection } from '@/sections/IndustriesSection';
import { OriginSection } from '@/sections/OriginSection';
import { FinalCTASection } from '@/sections/FinalCTASection';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <main className="relative">
      <HeroSection onNavigate={onNavigate} />
      <ProblemSection />
      <WhatWeBuildSection />
      <IndustriesSection onNavigate={onNavigate} />
      <OriginSection onNavigate={onNavigate} />
      <FinalCTASection onNavigate={onNavigate} />
    </main>
  );
}