import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const card = cardRef.current;
    const bg = bgRef.current;

    if (!section || !headline || !subheadline || !card || !bg) return;

    // Initial state for entrance animation
    const words = headline.querySelectorAll('.word');
    words.forEach((word, i) => {
      (word as HTMLElement).style.opacity = '0';
      (word as HTMLElement).style.transform = 'translateY(28px)';
      (word as HTMLElement).style.transition = `opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`;
    });

    subheadline.style.opacity = '0';
    subheadline.style.transform = 'translateY(18px)';
    subheadline.style.transition = 'opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s';

    card.style.opacity = '0';
    card.style.transform = 'translateX(10vw)';
    card.style.transition = 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s';

    bg.style.opacity = '0';
    bg.style.transform = 'scale(1.08)';
    bg.style.transition = 'opacity 1s ease, transform 1s ease';

    // Trigger entrance animation
    requestAnimationFrame(() => {
      words.forEach((word) => {
        (word as HTMLElement).style.opacity = '1';
        (word as HTMLElement).style.transform = 'translateY(0)';
      });
      subheadline.style.opacity = '1';
      subheadline.style.transform = 'translateY(0)';
      card.style.opacity = '1';
      card.style.transform = 'translateX(0)';
      bg.style.opacity = '1';
      bg.style.transform = 'scale(1)';
    });

    // Scroll-driven exit animation
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.5)));
      
      if (scrollProgress > 0) {
        const exitProgress = Math.min(1, scrollProgress * 2);
        headline.style.transform = `translateX(${-exitProgress * 18}vw)`;
        headline.style.opacity = `${1 - exitProgress * 0.75}`;
        
        card.style.transform = `translateX(${exitProgress * 10}vw)`;
        card.style.opacity = `${1 - exitProgress * 0.65}`;
        
        bg.style.transform = `scale(${1 + exitProgress * 0.06})`;
      } else {
        headline.style.transform = 'translateX(0)';
        headline.style.opacity = '1';
        card.style.transform = 'translateX(0)';
        card.style.opacity = '1';
        bg.style.transform = 'scale(1)';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineText = "AI that sees the real world.";
  const words = headlineText.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-[1]"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src="/images/city_night_aerial.jpg"
          alt="City night aerial"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[2] hero-gradient" />

      {/* Content */}
      <div className="relative z-[4] h-full flex flex-col justify-center px-6 lg:px-0">
        {/* Headline Block */}
        <div className="lg:absolute lg:left-[7vw] lg:top-[18vh] lg:w-[62vw]">
          <h1
            ref={headlineRef}
            className="font-display text-hero text-terragrow-white leading-[0.95]"
            style={{ willChange: 'transform, opacity' }}
          >
            {words.map((word, i) => (
              <span key={i} className="word inline-block mr-[0.3em]">
                {word}
              </span>
            ))}
          </h1>
          <p
            ref={subheadlineRef}
            className="mt-6 text-body text-terragrow-gray max-w-xl"
            style={{ willChange: 'transform, opacity' }}
          >
            TerraGrow builds Cognivue — a computer vision platform that helps teams deploy, train, and scale AI across cloud and edge environments.
          </p>
          
          {/* Helper Line */}
          <p className="mt-4 text-xs uppercase tracking-[0.08em] text-terragrow-gray/70">
            SDK-first. No-code tools. Enterprise-ready deployment.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-6 py-3 rounded-button transition-all duration-200 hover:-translate-y-0.5"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              onClick={() => onNavigate('pricing')}
              variant="outline"
              className="border-white/20 text-terragrow-white hover:bg-white/5 hover:border-white/30 px-6 py-3 rounded-button transition-all duration-200"
            >
              View Pricing
            </Button>
          </div>
        </div>

        {/* Info Card */}
        <div
          ref={cardRef}
          className="lg:absolute lg:right-[6vw] lg:bottom-[10vh] lg:w-[min(420px,34vw)] mt-10 lg:mt-0"
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="card-glass rounded-card p-6 lg:p-8">
            <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
              Cognivue Platform
            </span>
            <p className="mt-4 text-body text-terragrow-gray leading-relaxed">
              A unified SDK, API, and console to train, deploy, and monitor models—without managing fragmented pipelines.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-5 py-2.5 rounded-button text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Request a Demo
              </Button>
              <button
                onClick={() => onNavigate('pricing')}
                className="text-sm text-terragrow-gray hover:text-terragrow-white transition-colors"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}