import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lock, Shield, FileText, CheckCircle, HeartPulse, Award } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface SecurityProps {
  onNavigate: (page: Page) => void;
}

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption in transit and at rest',
    description: 'All data is encrypted using industry-standard AES-256 encryption at rest and TLS 1.3 in transit.',
  },
  {
    icon: Shield,
    title: 'Role-based access control',
    description: 'Granular permissions ensure users only access the resources they need.',
  },
  {
    icon: FileText,
    title: 'Audit logging',
    description: 'Comprehensive logs of all system activities for compliance and security monitoring.',
  },
  {
    icon: CheckCircle,
    title: 'SOC 2 alignment',
    description: 'Our systems and processes are designed to meet SOC 2 Type II requirements.',
  },
  {
    icon: HeartPulse,
    title: 'HIPAA-ready workflows',
    description: 'Built-in support for healthcare compliance with Business Associate Agreements available.',
  },
  {
    icon: Award,
    title: 'Enterprise SLAs',
    description: 'Guaranteed uptime and response times with dedicated support channels.',
  },
];

export function Security({ onNavigate }: SecurityProps) {
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
              Security
            </span>
            <h1 className="mt-4 font-display text-hero text-terragrow-white">
              Security and compliance by design
            </h1>
            <p className="mt-6 text-body text-terragrow-gray max-w-xl">
              Enterprise-grade security built into every layer of our platform. Your data is protected by default.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-terragrow-dark-secondary border border-white/5 rounded-card p-8 hover:border-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-terragrow-blue/10 flex items-center justify-center mb-6 group-hover:bg-terragrow-blue/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-terragrow-blue" />
                </div>
                <h3 className="font-display text-lg font-semibold text-terragrow-white mb-3">
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

      {/* Compliance Section */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark-secondary">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-h2 text-terragrow-white mb-6">
                Compliance Ready
              </h2>
              <div className="space-y-4 text-body text-terragrow-gray leading-relaxed">
                <p>
                  We understand that compliance is critical for many industries. That's why we've built Cognivue with compliance in mind from day one.
                </p>
                <p>
                  Our platform supports HIPAA, SOC 2, and GDPR requirements, with regular third-party audits and penetration testing.
                </p>
                <p>
                  For enterprise customers, we offer custom compliance configurations and dedicated security reviews.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-terragrow-dark rounded-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-terragrow-blue/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-terragrow-blue" />
                </div>
                <h3 className="font-display font-semibold text-terragrow-white">SOC 2</h3>
                <p className="mt-2 text-xs text-terragrow-gray">Type II Aligned</p>
              </div>
              <div className="bg-terragrow-dark rounded-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-terragrow-blue/10 flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="w-8 h-8 text-terragrow-blue" />
                </div>
                <h3 className="font-display font-semibold text-terragrow-white">HIPAA</h3>
                <p className="mt-2 text-xs text-terragrow-gray">BAA Available</p>
              </div>
              <div className="bg-terragrow-dark rounded-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-terragrow-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-terragrow-blue" />
                </div>
                <h3 className="font-display font-semibold text-terragrow-white">GDPR</h3>
                <p className="mt-2 text-xs text-terragrow-gray">Compliant</p>
              </div>
              <div className="bg-terragrow-dark rounded-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-terragrow-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-terragrow-blue" />
                </div>
                <h3 className="font-display font-semibold text-terragrow-white">ISO 27001</h3>
                <p className="mt-2 text-xs text-terragrow-gray">In Progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-h2 text-terragrow-white">
              Have security questions?
            </h2>
            <p className="mt-6 text-body text-terragrow-gray">
              Our security team is happy to discuss your specific requirements and provide detailed documentation.
            </p>
            <div className="mt-10">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-8 py-4 rounded-button text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Security Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}