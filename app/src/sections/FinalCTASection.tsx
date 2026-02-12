import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface FinalCTASectionProps {
  onNavigate: (page: Page) => void;
}

export function FinalCTASection({ onNavigate }: FinalCTASectionProps) {
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
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.6)));
        const yOffset = (1 - progress) * 40;
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
      className="relative w-full py-24 lg:py-32 bg-terragrow-dark"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center"
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="font-display text-h2 text-terragrow-white">
            Ready to deploy computer vision in production?
          </h2>
          <p className="mt-6 text-body text-terragrow-gray">
            Get a personalized demo and see how Cognivue can transform your visual data into actionable intelligence.
          </p>
          
          <div className="mt-10">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-8 py-4 rounded-button text-base transition-all duration-200 hover:-translate-y-0.5 glow-blue"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terragrow-blue/5 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}