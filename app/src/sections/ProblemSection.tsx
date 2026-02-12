import { useEffect, useRef } from 'react';

export function ProblemSection() {
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
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height * 0.5)));
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
          className="max-w-4xl"
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="font-display text-h2 text-terragrow-white">
            Visual data is everywhere. Intelligence is not.
          </h2>
          <div className="mt-8 space-y-6 text-body text-terragrow-gray leading-relaxed">
            <p>
              Every industry collects massive amounts of visual data. But most of it is never analyzed. Deploying computer vision still requires months of integration, specialized ML teams, and heavy infrastructure.
            </p>
            <p className="text-terragrow-white font-medium">
              TerraGrow exists to change that.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
    </section>
  );
}