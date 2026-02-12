import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface BlogPostProps {
  onNavigate: (page: Page) => void;
  postSlug: string;
  onBack: () => void;
}

interface BlogPostData {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  'future-of-computer-vision-agriculture': {
    id: '1',
    title: 'The Future of Computer Vision in Agriculture',
    content: `
      <p>Computer vision is revolutionizing the agriculture industry, bringing unprecedented precision and efficiency to farming operations worldwide. From crop monitoring to automated harvesting, AI-powered vision systems are transforming how we approach food production.</p>
      
      <h3>The Rise of Precision Agriculture</h3>
      <p>Precision agriculture leverages computer vision to monitor crop health at the individual plant level. Drones equipped with high-resolution cameras can survey thousands of acres, detecting early signs of disease, nutrient deficiencies, and pest infestations before they become visible to the human eye.</p>
      
      <h3>Automated Harvesting Systems</h3>
      <p>One of the most exciting applications is in automated harvesting. Computer vision systems can now identify ripe produce with remarkable accuracy, enabling robots to pick fruits and vegetables at the optimal time. This not only reduces labor costs but also ensures consistent quality.</p>
      
      <h3>Yield Prediction and Optimization</h3>
      <p>By analyzing visual data throughout the growing season, machine learning models can predict yields with increasing accuracy. This helps farmers make better decisions about resource allocation, pricing, and distribution.</p>
      
      <h3>Sustainable Farming Practices</h3>
      <p>Computer vision also plays a crucial role in sustainable agriculture. By precisely identifying areas that need water, fertilizer, or pesticides, farmers can reduce waste and minimize environmental impact while maintaining or improving yields.</p>
      
      <h3>The Road Ahead</h3>
      <p>As computer vision technology continues to advance, we can expect even more sophisticated applications. From autonomous tractors to AI-powered greenhouses, the future of agriculture is increasingly visual and intelligent.</p>
    `,
    author: 'TerraGrow Team',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    category: 'Agriculture',
    image: '/images/usecase_agriculture.jpg',
    slug: 'future-of-computer-vision-agriculture',
  },
  'deploying-ai-edge-best-practices': {
    id: '2',
    title: 'Deploying AI at the Edge: Best Practices',
    content: `
      <p>Edge deployment of AI models has become increasingly important as organizations seek to reduce latency, improve privacy, and minimize bandwidth costs. In this article, we'll explore best practices for deploying computer vision models at the edge.</p>
      
      <h3>Understanding Edge Computing</h3>
      <p>Edge computing brings data processing closer to where it's generated, rather than relying on centralized cloud servers. For computer vision applications, this means processing video streams directly on cameras, gateways, or local servers.</p>
      
      <h3>Model Optimization Techniques</h3>
      <p>Deploying models at the edge requires careful optimization. Techniques like quantization, pruning, and knowledge distillation can significantly reduce model size and inference time without sacrificing accuracy.</p>
      
      <h3>Hardware Considerations</h3>
      <p>Choosing the right hardware is crucial. NVIDIA Jetson devices, Intel NUCs, and ARM-based systems each have their strengths. Consider factors like power consumption, processing power, and cost when selecting edge hardware.</p>
      
      <h3>Managing Model Updates</h3>
      <p>Edge devices need a robust system for model updates. Over-the-air (OTA) updates allow you to deploy improvements and security patches without physical access to devices.</p>
      
      <h3>Monitoring and Logging</h3>
      <p>Even at the edge, monitoring is essential. Implement logging and telemetry to track model performance, device health, and usage patterns. This data is invaluable for continuous improvement.</p>
    `,
    author: 'TerraGrow Team',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
    category: 'Engineering',
    image: '/images/industrial_detection.jpg',
    slug: 'deploying-ai-edge-best-practices',
  },
  'hipaa-compliance-healthcare-ai': {
    id: '3',
    title: 'HIPAA Compliance for Healthcare AI',
    content: `
      <p>Deploying AI in healthcare requires careful attention to regulatory requirements, particularly HIPAA. This guide covers the key considerations for building compliant computer vision solutions in healthcare.</p>
      
      <h3>Understanding HIPAA Requirements</h3>
      <p>The Health Insurance Portability and Accountability Act (HIPAA) sets standards for protecting sensitive patient data. Any AI system handling protected health information (PHI) must comply with these regulations.</p>
      
      <h3>Data Encryption</h3>
      <p>All PHI must be encrypted both at rest and in transit. Use industry-standard encryption algorithms and ensure keys are properly managed. Regular security audits are essential.</p>
      
      <h3>Access Controls</h3>
      <p>Implement role-based access control (RBAC) to ensure only authorized personnel can access patient data. Multi-factor authentication should be standard for all system access.</p>
      
      <h3>Audit Logging</h3>
      <p>Comprehensive audit logs are required for HIPAA compliance. Track all access to PHI, including who accessed what data and when. Logs must be retained for specified periods.</p>
      
      <h3>Business Associate Agreements</h3>
      <p>When working with third-party vendors, ensure Business Associate Agreements (BAAs) are in place. These contracts establish how PHI will be protected and used.</p>
      
      <h3>Regular Risk Assessments</h3>
      <p>HIPAA requires regular risk assessments to identify and address potential vulnerabilities. This should be an ongoing process, not a one-time activity.</p>
    `,
    author: 'TerraGrow Team',
    date: 'Jan 5, 2026',
    readTime: '6 min read',
    category: 'Healthcare',
    image: '/images/usecase_healthcare.jpg',
    slug: 'hipaa-compliance-healthcare-ai',
  },
  'food-replicator-to-cognivue-journey': {
    id: '4',
    title: 'From Food Replicator to Cognivue: Our Journey',
    content: `
      <p>TerraGrow's story began not with computer vision, but with a simple mission: to make food production more reliable and sustainable. This is the story of how that mission led us to build Cognivue.</p>
      
      <h3>The Food Replicator Project</h3>
      <p>Our first product was the Food Replicator, an autonomous indoor farming system designed to grow fresh produce in controlled environments. The system used sensors and basic automation to monitor and adjust growing conditions.</p>
      
      <h3>The Vision Challenge</h3>
      <p>As we scaled the Food Replicator, we encountered a critical challenge: how do we monitor plant health at scale? Manual inspection was too slow and expensive. We needed a way to "see" what was happening in our farms automatically.</p>
      
      <h3>Building the Vision Layer</h3>
      <p>We started building an internal computer vision system to detect plant health issues, growth stages, and harvest readiness. What began as a simple tool quickly evolved into something much more powerful.</p>
      
      <h3>Recognizing the Broader Need</h3>
      <p>As we talked to other companies, we realized that visual intelligence was a missing piece across many industries. Healthcare, construction, sports, and security all had similar needs for automated visual analysis.</p>
      
      <h3>The Birth of Cognivue</h3>
      <p>We took our internal vision system, generalized it, and turned it into a platform. Cognivue was born — a universal computer vision platform designed to make AI deployment faster, safer, and production-ready.</p>
      
      <h3>Looking Forward</h3>
      <p>Today, TerraGrow is focused on scaling Cognivue globally. But we haven't forgotten our roots. The same mission that drove the Food Replicator — improving reliability in physical systems — continues to guide everything we do.</p>
    `,
    author: 'TerraGrow Team',
    date: 'Dec 28, 2025',
    readTime: '4 min read',
    category: 'Company',
    image: '/images/city_night_aerial.jpg',
    slug: 'food-replicator-to-cognivue-journey',
  },
  'sports-analytics-computer-vision': {
    id: '5',
    title: 'Real-Time Sports Analytics with Computer Vision',
    content: `
      <p>Sports teams are increasingly turning to computer vision to gain competitive advantages. From player tracking to tactical analysis, AI is transforming how teams prepare, perform, and engage with fans.</p>
      
      <h3>Player Tracking Technology</h3>
      <p>Computer vision enables precise tracking of player movements on the field. This data provides insights into player positioning, speed, acceleration, and fatigue that were previously impossible to measure at scale.</p>
      
      <h3>Performance Analytics</h3>
      <p>By analyzing video footage, teams can quantify player performance in new ways. Shooting accuracy, passing efficiency, defensive positioning — all can be measured and tracked over time.</p>
      
      <h3>Tactical Analysis</h3>
      <p>Coaches use computer vision to analyze team formations and strategies. By tracking how players move as a unit, teams can identify strengths, weaknesses, and opportunities for improvement.</p>
      
      <h3>Fan Engagement</h3>
      <p>Beyond the field, computer vision powers new fan experiences. Automated highlight generation, real-time statistics, and interactive replays all rely on AI-powered video analysis.</p>
      
      <h3>The Future of Sports Tech</h3>
      <p>As computer vision technology improves, we can expect even more sophisticated applications. From injury prediction to automated officiating, the possibilities are endless.</p>
    `,
    author: 'TerraGrow Team',
    date: 'Dec 20, 2025',
    readTime: '5 min read',
    category: 'Sports',
    image: '/images/usecase_sports.jpg',
    slug: 'sports-analytics-computer-vision',
  },
  'construction-safety-ai-monitoring': {
    id: '6',
    title: 'Construction Site Safety with AI Monitoring',
    content: `
      <p>Construction remains one of the most dangerous industries. Computer vision is helping to change that by providing continuous safety monitoring that never gets tired or distracted.</p>
      
      <h3>The Safety Challenge</h3>
      <p>Construction sites are dynamic environments with constantly changing hazards. Traditional safety inspections are periodic and can't catch every violation. AI-powered monitoring provides continuous oversight.</p>
      
      <h3>PPE Detection</h3>
      <p>Computer vision systems can automatically detect whether workers are wearing required personal protective equipment (PPE) — hard hats, safety vests, gloves, and more. Violations can be flagged in real-time.</p>
      
      <h3>Zone Monitoring</h3>
      <p>Dangerous zones can be monitored continuously. If a worker enters a restricted area or gets too close to heavy machinery, the system can immediately alert supervisors.</p>
      
      <h3>Incident Documentation</h3>
      <p>When incidents do occur, computer vision provides detailed documentation. Video footage can be reviewed to understand what happened and prevent future occurrences.</p>
      
      <h3>Compliance Reporting</h3>
      <p>Automated systems generate detailed compliance reports, making it easier to demonstrate adherence to safety regulations and identify areas for improvement.</p>
      
      <h3>The Human Element</h3>
      <p>AI doesn't replace safety professionals — it augments them. By handling routine monitoring, computer vision frees up human experts to focus on complex safety challenges and training.</p>
    `,
    author: 'TerraGrow Team',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
    category: 'Construction',
    image: '/images/usecase_construction.jpg',
    slug: 'construction-safety-ai-monitoring',
  },
};

export function BlogPost({ onNavigate, postSlug, onBack }: BlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const post = blogPostsData[postSlug];

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
      content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    });
  }, [postSlug]);

  if (!post) {
    return (
      <main className="relative min-h-screen bg-terragrow-dark pt-32">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-h2 text-terragrow-white">Article Not Found</h1>
            <p className="mt-4 text-terragrow-gray">The article you're looking for doesn't exist.</p>
            <Button
              onClick={() => onNavigate('blog')}
              className="mt-8 bg-terragrow-blue hover:bg-terragrow-blue-light text-white"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-terragrow-dark">
      {/* Hero Image */}
      <div className="relative h-[50vh] lg:h-[60vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terragrow-dark via-terragrow-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative -mt-32 pb-24">
        <div className="w-full px-6 lg:px-[7vw]">
          <div ref={contentRef} className="max-w-3xl mx-auto" style={{ willChange: 'transform, opacity' }}>
            {/* Back Button */}
            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-8 text-terragrow-gray hover:text-terragrow-white hover:bg-white/5"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Blog
            </Button>

            {/* Category */}
            <span className="inline-block px-3 py-1 bg-terragrow-blue/20 text-terragrow-blue text-xs font-medium rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-terragrow-white mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-sm text-terragrow-gray mb-10 pb-10 border-b border-white/10">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>

            {/* Article Content */}
            <article 
              className="prose prose-invert prose-lg max-w-none text-terragrow-gray leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-16 pt-10 border-t border-white/10">
              <h3 className="font-display text-xl text-terragrow-white mb-4">
                Want to learn more?
              </h3>
              <p className="text-terragrow-gray mb-6">
                Discover how Cognivue can transform your computer vision workflows.
              </p>
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
