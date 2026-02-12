import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface OriginSectionProps {
  onNavigate: (page: Page) => void;
}

export function OriginSection({ onNavigate }: OriginSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height * 0.3)));
        const yOffset = (1 - progress) * 30;
        const opacity = progress;
        
        content.style.transform = `translateY(${yOffset}px)`;
        content.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-terragrow-dark-secondary"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div
          ref={contentRef}
          className="max-w-4xl"
          style={{ willChange: 'transform, opacity' }}
        >
          <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
            Our Origin
          </span>
          <h2 className="mt-4 font-display text-h2 text-terragrow-white">
            From food systems to vision systems.
          </h2>
          <div className="mt-8 space-y-6 text-body text-terragrow-gray leading-relaxed">
            <p>
              TerraGrow began with a physical-world challenge — building the Food Replicator, an autonomous indoor farming system designed to improve food reliability.
            </p>
            <p>
              To make it scalable, we built a vision layer that could detect anomalies and automate decisions in real time.
            </p>
            <p>
              That internal system became Cognivue — a universal computer vision platform built for any industry that relies on visual data.
            </p>
            <p className="text-terragrow-white">
              Today, TerraGrow focuses on scaling Cognivue globally while continuing to innovate at the intersection of AI and the physical world.
            </p>
          </div>

          <div className="mt-10">
            <Button
              onClick={() => onNavigate('about')}
              variant="outline"
              className="border-white/20 text-terragrow-white hover:bg-white/5 hover:border-white/30 px-6 py-3 rounded-button transition-all duration-200"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-l from-terragrow-blue to-transparent" />
      </div>
    </section>
  );
}