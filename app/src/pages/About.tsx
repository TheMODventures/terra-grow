import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Lightbulb, Users } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We build technology that solves real-world problems and improves lives.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with AI and computer vision.',
  },
  {
    icon: Users,
    title: 'Customer Obsessed',
    description: 'We work closely with our customers to ensure their success.',
  },
];

export function About({ onNavigate }: AboutProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    hero.style.opacity = '0';
    hero.style.transform = 'translateY(30px)';
    
    requestAnimationFrame(() => {
      hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-[1]">
          <img
            src="/images/industrial_detection.jpg"
            alt="Industrial vision"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 section-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-[2] w-full px-6 lg:px-[7vw] py-20">
          <div ref={heroRef} className="max-w-3xl" style={{ willChange: 'transform, opacity' }}>
            <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
              About Us
            </span>
            <h1 className="mt-4 font-display text-hero text-terragrow-white">
              We build AI infrastructure for the real world.
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-h2 text-terragrow-white mb-8">
                Our Story
              </h2>
            </div>
            <div className="space-y-6 text-body text-terragrow-gray leading-relaxed">
              <p>
                Our first product, the Food Replicator, automated indoor farming using sensors and machine intelligence.
              </p>
              <p>
                As deployments expanded, we recognized a deeper need: visual intelligence was the missing layer across industries.
              </p>
              <p>
                We developed an internal computer vision system to support Food Replicator at scale. That system evolved into Cognivue — a platform built to make AI deployment faster, safer, and production-ready.
              </p>
              <p className="text-terragrow-white font-medium">
                Today, TerraGrow is focused on scaling Cognivue globally as the foundation for applied computer vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark-secondary">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-h2 text-terragrow-white">
              Our Values
            </h2>
            <p className="mt-4 text-body text-terragrow-gray">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-terragrow-blue/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-terragrow-blue" />
                </div>
                <h3 className="font-display text-h3 text-terragrow-white mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-terragrow-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-h2 text-terragrow-white">
              Join Our Team
            </h2>
            <p className="mt-4 text-body text-terragrow-gray">
              We're always looking for talented people who are passionate about building the future of AI infrastructure.
            </p>
          </div>

          <div className="text-center">
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-white/20 text-terragrow-white hover:bg-white/5 hover:border-white/30 px-8 py-4 rounded-button transition-all duration-200"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark-secondary">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-h2 text-terragrow-white">
              Want to learn more?
            </h2>
            <p className="mt-6 text-body text-terragrow-gray">
              We'd love to hear from you. Reach out and let's discuss how we can help.
            </p>
            <div className="mt-10">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-8 py-4 rounded-button text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
