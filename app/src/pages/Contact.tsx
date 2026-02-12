import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

const industries = [
  'Healthcare',
  'Agriculture',
  'Sports',
  'Construction',
  'Smart Facilities',
  'Manufacturing',
  'Retail',
  'Other',
];

export function Contact({ onNavigate: _onNavigate }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="relative min-h-screen bg-terragrow-dark-secondary">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-16">
        <div className="w-full px-6 lg:px-[7vw]">
          <div ref={heroRef} className="text-center max-w-2xl mx-auto" style={{ willChange: 'transform, opacity' }}>
            <h1 className="font-display text-hero text-terragrow-white">
              Let's build with vision.
            </h1>
            <p className="mt-6 text-body text-terragrow-gray">
              Tell us what you're building. We'll reply within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full pb-24 lg:pb-32">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-2xl mx-auto">
            <div className="card-glass rounded-card p-8 lg:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-terragrow-blue/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-terragrow-blue" />
                  </div>
                  <h2 className="font-display text-h3 text-terragrow-white mb-4">
                    Thank you!
                  </h2>
                  <p className="text-terragrow-gray">
                    We've received your message and will get back to you within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-terragrow-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="bg-terragrow-dark border-white/10 text-terragrow-white placeholder:text-terragrow-gray/50 focus:border-terragrow-blue focus:ring-terragrow-blue/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-terragrow-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        required
                        className="bg-terragrow-dark border-white/10 text-terragrow-white placeholder:text-terragrow-gray/50 focus:border-terragrow-blue focus:ring-terragrow-blue/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-terragrow-white">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        required
                        className="bg-terragrow-dark border-white/10 text-terragrow-white placeholder:text-terragrow-gray/50 focus:border-terragrow-blue focus:ring-terragrow-blue/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-terragrow-white">
                        Industry
                      </Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                      >
                        <SelectTrigger className="bg-terragrow-dark border-white/10 text-terragrow-white focus:ring-terragrow-blue/20">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent className="bg-terragrow-dark-secondary border-white/10">
                          {industries.map((industry) => (
                            <SelectItem
                              key={industry}
                              value={industry}
                              className="text-terragrow-white hover:bg-terragrow-dark focus:bg-terragrow-dark"
                            >
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-terragrow-white">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-terragrow-dark border-white/10 text-terragrow-white placeholder:text-terragrow-gray/50 focus:border-terragrow-blue focus:ring-terragrow-blue/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium py-4 rounded-button text-base transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Request a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-center text-xs text-terragrow-gray">
                    We respond within 24–48 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
    </main>
  );
}