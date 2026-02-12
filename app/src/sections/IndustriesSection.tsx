import { useEffect, useRef } from 'react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface IndustriesSectionProps {
  onNavigate: (page: Page) => void;
}

const industries = [
  {
    title: 'Healthcare',
    description: 'Assistive detection and compliant AI deployment.',
    image: '/images/usecase_healthcare.jpg',
  },
  {
    title: 'Agriculture',
    description: 'Monitor growth, detect anomalies, optimize yield.',
    image: '/images/usecase_agriculture.jpg',
  },
  {
    title: 'Sports',
    description: 'Real-time analytics and vision-powered insights.',
    image: '/images/usecase_sports.jpg',
  },
  {
    title: 'Construction',
    description: 'Track safety, progress, and operational visibility.',
    image: '/images/usecase_construction.jpg',
  },
  {
    title: 'Smart Facilities',
    description: 'Automate surveillance insights and monitoring.',
    image: '/images/usecase_facilities.jpg',
  },
];

export function IndustriesSection({ onNavigate }: IndustriesSectionProps) {
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
          const delay = index * 0.08;
          card.style.transition = `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`;
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }
      });
    };

    cards.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px)';
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-h2 text-terragrow-white">
            Built for high-stakes environments
          </h2>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="group relative overflow-hidden rounded-card border border-white/5 hover:border-white/10 transition-all duration-300"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-terragrow-dark via-terragrow-dark/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-16">
                <h3 className="font-display text-h3 text-terragrow-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-terragrow-gray leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('solutions')}
            className="inline-flex items-center gap-2 text-terragrow-blue hover:text-terragrow-blue-light transition-colors font-medium"
          >
            Explore all solutions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}