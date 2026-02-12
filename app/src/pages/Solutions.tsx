import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Sprout, Trophy, HardHat, Building2 } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface SolutionsProps {
  onNavigate: (page: Page) => void;
}

const solutions = [
  {
    icon: Sprout,
    title: 'Agriculture',
    description: 'Monitor growth, detect anomalies, and optimize yield with precision agriculture solutions.',
    features: [
      'Crop health monitoring',
      'Pest detection',
      'Yield prediction',
      'Automated harvesting',
    ],
    image: '/images/usecase_agriculture.jpg',
  },
  {
    icon: Trophy,
    title: 'Sports',
    description: 'Real-time analytics and vision-powered insights for athlete performance and fan engagement.',
    features: [
      'Tracking',
      'Measurement',
      'Analytics',
      'Social Media Integration',
    ],
    image: '/images/usecase_sports.jpg',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Assistive detection and compliant AI deployment for medical imaging, patient monitoring, and diagnostic assistance.',
    features: [
      'Medical image analysis',
      'Patient monitoring',
      'Diagnostic assistance',
      'HIPAA compliance',
    ],
    image: '/images/usecase_healthcare.jpg',
  },
  {
    icon: HardHat,
    title: 'Construction',
    description: 'Track safety, progress, and operational visibility across construction sites.',
    features: [
      'Safety compliance monitoring',
      'Progress tracking',
      'Equipment monitoring',
      'Quality control',
    ],
    image: '/images/usecase_construction.jpg',
  },
  {
    icon: Building2,
    title: 'Smart Facilities',
    description: 'Automate surveillance insights and monitoring for buildings and facilities.',
    features: [
      'Access control',
      'Occupancy monitoring',
      'Security surveillance',
      'Energy optimization',
    ],
    image: '/images/usecase_facilities.jpg',
  },
];

export function Solutions({ onNavigate }: SolutionsProps) {
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
      <section className="relative w-full min-h-[60vh] flex items-center pt-20 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw] py-20">
          <div ref={heroRef} className="max-w-3xl" style={{ willChange: 'transform, opacity' }}>
            <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
              Solutions
            </span>
            <h1 className="mt-4 font-display text-hero text-terragrow-white">
              Built for your industry
            </h1>
            <p className="mt-6 text-body text-terragrow-gray max-w-xl">
              Cognivue adapts to the unique challenges of your industry, delivering computer vision solutions that drive real results.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 rounded-xl bg-terragrow-blue/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-terragrow-blue" />
                  </div>
                  <h2 className="font-display text-h2 text-terragrow-white mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-body text-terragrow-gray mb-8">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-terragrow-gray">
                        <span className="w-1.5 h-1.5 rounded-full bg-terragrow-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-card overflow-hidden border border-white/5">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-terragrow-dark/60 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark-secondary">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-h2 text-terragrow-white">
              Need a custom solution?
            </h2>
            <p className="mt-6 text-body text-terragrow-gray">
              Our team can help you design and implement a computer vision solution tailored to your specific needs.
            </p>
            <div className="mt-10">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-8 py-4 rounded-button text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Talk to Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
