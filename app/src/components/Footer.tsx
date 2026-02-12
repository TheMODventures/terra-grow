import { Linkedin, Instagram } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const footerLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Cognivue', page: 'cognivue' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Blog', page: 'blog' },
  { label: 'Security', page: 'security' },
  { label: 'Contact', page: 'contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/terragrow/', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/official_terragrow/', icon: Instagram },
];

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-terragrow-dark-secondary border-t border-white/5">
      <div className="w-full px-6 lg:px-10 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <button onClick={() => onNavigate('home')} className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="TerraGrow" 
                className="h-12 w-auto object-contain"
              />
            </button>
            <p className="mt-4 text-terragrow-gray text-sm leading-relaxed">
              AI Infrastructure for Computer Vision. Deploy, train, and scale AI across cloud and edge environments.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-terragrow-gray hover:text-terragrow-white hover:bg-white/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {footerLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className="text-sm text-terragrow-gray hover:text-terragrow-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-terragrow-gray">
            © TerraGrow 2026. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('home')} className="text-xs text-terragrow-gray hover:text-terragrow-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('home')} className="text-xs text-terragrow-gray hover:text-terragrow-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
