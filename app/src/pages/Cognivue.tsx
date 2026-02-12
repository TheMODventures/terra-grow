import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Layers, Zap, Cpu, BarChart3 } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface CognivueProps {
  onNavigate: (page: Page) => void;
}

const capabilities = [
  {
    icon: Layers,
    title: 'Model Lifecycle Management',
    description: 'Train, validate, version, and deploy models from one dashboard.',
  },
  {
    icon: Zap,
    title: 'Real-Time Inference',
    description: 'Process live image and video streams instantly.',
  },
  {
    icon: Cpu,
    title: 'Edge Optimization',
    description: 'Run on NVIDIA Jetson and supported edge devices.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring & Analytics',
    description: 'Track performance, drift, and operational metrics.',
  },
];

const deploymentOptions = [
  {
    title: 'Cloud',
    description: 'Scalable cloud deployment with automatic scaling and load balancing.',
  },
  {
    title: 'Edge',
    description: 'Low-latency inference directly on edge devices.',
  },
  {
    title: 'Hybrid',
    description: 'Combine cloud and edge for optimal performance and cost.',
  },
  {
    title: 'On-Premise',
    description: 'Full control with on-premise deployment for sensitive data.',
  },
];

export function Cognivue({ onNavigate }: CognivueProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heroContent = heroContentRef.current;
    if (!heroContent) return;

    // Entrance animation
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    requestAnimationFrame(() => {
      heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[70vh] flex items-center pt-20"
      >
        {/* Background */}
        <div className="absolute inset-0 z-[1]">
          <img
            src="/images/data_trails_abstract.jpg"
            alt="Data visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 section-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-[2] w-full px-6 lg:px-[7vw] py-20">
          <div ref={heroContentRef} className="max-w-3xl" style={{ willChange: 'transform, opacity' }}>
            <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
              Product
            </span>
            <h1 className="mt-4 font-display text-hero text-terragrow-white">
              Cognivue by TerraGrow
            </h1>
            <p className="mt-6 text-body text-terragrow-gray max-w-xl">
              A production-ready computer vision platform designed for real-world deployment.
            </p>
            <div className="mt-8">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-6 py-3 rounded-button transition-all duration-200 hover:-translate-y-0.5"
              >
                Request Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-h2 text-terragrow-white">
              Core Capabilities
            </h2>
            <p className="mt-4 text-body text-terragrow-gray">
              Everything you need to build, deploy, and scale computer vision applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group relative bg-terragrow-dark-secondary border border-white/5 rounded-card p-8 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-terragrow-blue/10 flex items-center justify-center mb-6 group-hover:bg-terragrow-blue/20 transition-colors duration-300">
                  <cap.icon className="w-6 h-6 text-terragrow-blue" />
                </div>
                <h3 className="font-display text-h3 text-terragrow-white mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-terragrow-gray leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark-secondary">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-h2 text-terragrow-white">
              Deployment Options
            </h2>
            <p className="mt-4 text-body text-terragrow-gray">
              Flexible deployment to match your infrastructure requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentOptions.map((option) => (
              <div
                key={option.title}
                className="relative bg-terragrow-dark border border-white/5 rounded-card p-6 hover:border-white/10 transition-all duration-300"
              >
                <h3 className="font-display text-lg font-semibold text-terragrow-white mb-3">
                  {option.title}
                </h3>
                <p className="text-sm text-terragrow-gray leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-h2 text-terragrow-white">
              Ready to get started?
            </h2>
            <p className="mt-6 text-body text-terragrow-gray">
              See how Cognivue can transform your computer vision workflows.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-8 py-4 rounded-button text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => onNavigate('pricing')}
                variant="outline"
                className="border-white/20 text-terragrow-white hover:bg-white/5 hover:border-white/30 px-8 py-4 rounded-button text-base transition-all duration-200"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}