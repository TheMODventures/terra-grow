import { useEffect, useRef } from 'react';
import { Code2, LayoutDashboard, Cloud } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'SDK & API',
    description: 'Integrate computer vision directly into your workflow using developer-friendly SDKs and clean APIs.',
  },
  {
    icon: LayoutDashboard,
    title: 'No-Code Console',
    description: 'Train, manage, and monitor models without needing a machine learning team.',
  },
  {
    icon: Cloud,
    title: 'Deploy Anywhere',
    description: 'Cloud, edge, hybrid, or on-premise — built for performance and compliance.',
  },
];

export function WhatWeBuildSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const handleScroll = () => {
      cards.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.85) {
          const delay = index * 0.1;
          card.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    };

    // Set initial state
    cards.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-terragrow-dark"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
            What We Build
          </span>
          <h2 className="mt-4 font-display text-h2 text-terragrow-white">
            Introducing Cognivue
          </h2>
          <p className="mt-4 text-body text-terragrow-gray">
            Cognivue is TerraGrow's production-ready computer vision platform designed for real-world environments.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative bg-terragrow-dark-secondary border border-white/5 rounded-card p-8 hover:border-white/10 transition-all duration-300"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="w-12 h-12 rounded-xl bg-terragrow-blue/10 flex items-center justify-center mb-6 group-hover:bg-terragrow-blue/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-terragrow-blue" />
              </div>
              <h3 className="font-display text-h3 text-terragrow-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-terragrow-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}