import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

const tiers = [
  {
    name: 'Starter',
    price: '$1,200',
    period: '/year',
    description: 'For individual developers and startups',
    features: [
      '50K API calls/month',
      'Basic SDK access',
      '2 trainable models',
      'Cloud deployment',
      'Email support (48h)',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$6,000',
    period: '/year',
    description: 'For SMBs and sports facilities',
    features: [
      '500K API calls/month',
      'Standard SDK',
      '10 trainable models',
      'Cloud deployment',
      'Email + Docs (24h)',
      'SOC 2 compliance',
    ],
    cta: 'Choose Professional',
    highlighted: false,
  },
  {
    name: 'Business',
    price: '$24,000',
    period: '/year',
    description: 'For mid-market operations',
    features: [
      '2M API calls/month',
      'Advanced SDK + Edge',
      '50 trainable models',
      'Cloud + Edge',
      'Priority support',
      'SOC 2 + HIPAA',
    ],
    cta: 'Scale with Business',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For regulated and large-scale deployments',
    features: [
      'Unlimited API calls',
      'Full SDK + custom dev',
      'Unlimited models',
      'Hybrid / On-premise',
      '24/7 support',
      'Full compliance + SLA',
    ],
    cta: 'Talk to Sales',
    highlighted: false,
  },
];

export function Pricing({ onNavigate }: PricingProps) {
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
    <main className="relative bg-terragrow-dark">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16">
        <div className="w-full px-6 lg:px-[7vw]">
          <div ref={heroRef} className="text-center max-w-2xl mx-auto" style={{ willChange: 'transform, opacity' }}>
            <h1 className="font-display text-hero text-terragrow-white">
              Pricing that scales with your usage
            </h1>
            <p className="mt-6 text-body text-terragrow-gray">
              Start small. Prove value. Expand to production.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full pb-24 lg:pb-32">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-card p-8 flex flex-col ${
                  tier.highlighted
                    ? 'bg-terragrow-dark-secondary border-2 border-terragrow-blue shadow-glow'
                    : 'bg-terragrow-dark-secondary border border-white/10'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-terragrow-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-lg font-semibold text-terragrow-white">
                    {tier.name}
                  </h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="font-display text-3xl font-bold text-terragrow-white">
                      {tier.price}
                    </span>
                    <span className="text-terragrow-gray ml-1">{tier.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-terragrow-gray">
                    {tier.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-terragrow-gray">
                      <Check className="w-5 h-5 text-terragrow-blue flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-3 rounded-button font-medium transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-terragrow-blue hover:bg-terragrow-blue-light text-white'
                      : 'bg-white/10 hover:bg-white/20 text-terragrow-white border border-white/20'
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark-secondary">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-h2 text-terragrow-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-terragrow-dark rounded-card p-6 border border-white/10">
                <h3 className="font-display font-semibold text-terragrow-white mb-2">
                  Can I upgrade my plan later?
                </h3>
                <p className="text-sm text-terragrow-gray">
                  Yes, you can upgrade your plan at any time. Your new limits will be effective immediately.
                </p>
              </div>
              
              <div className="bg-terragrow-dark rounded-card p-6 border border-white/10">
                <h3 className="font-display font-semibold text-terragrow-white mb-2">
                  What happens if I exceed my API call limit?
                </h3>
                <p className="text-sm text-terragrow-gray">
                  We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional calls as needed.
                </p>
              </div>
              
              <div className="bg-terragrow-dark rounded-card p-6 border border-white/10">
                <h3 className="font-display font-semibold text-terragrow-white mb-2">
                  Do you offer custom enterprise solutions?
                </h3>
                <p className="text-sm text-terragrow-gray">
                  Absolutely. Contact our sales team to discuss custom pricing, SLAs, and dedicated support options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
