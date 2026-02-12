import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface BlogProps {
  onNavigate: (page: Page) => void;
  onReadArticle: (slug: string) => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Computer Vision in Agriculture',
    excerpt: 'How AI-powered vision systems are transforming crop monitoring, yield prediction, and sustainable farming practices.',
    author: 'TerraGrow Team',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    category: 'Agriculture',
    image: '/images/usecase_agriculture.jpg',
    slug: 'future-of-computer-vision-agriculture',
  },
  {
    id: '2',
    title: 'Deploying AI at the Edge: Best Practices',
    excerpt: 'Learn how to optimize your computer vision models for edge devices with low latency and high performance.',
    author: 'TerraGrow Team',
    date: 'Jan 10, 2026',
    readTime: '7 min read',
    category: 'Engineering',
    image: '/images/industrial_detection.jpg',
    slug: 'deploying-ai-edge-best-practices',
  },
  {
    id: '3',
    title: 'HIPAA Compliance for Healthcare AI',
    excerpt: 'A comprehensive guide to building compliant computer vision solutions for healthcare applications.',
    author: 'TerraGrow Team',
    date: 'Jan 5, 2026',
    readTime: '6 min read',
    category: 'Healthcare',
    image: '/images/usecase_healthcare.jpg',
    slug: 'hipaa-compliance-healthcare-ai',
  },
  {
    id: '4',
    title: 'From Food Replicator to Cognivue: Our Journey',
    excerpt: 'The story of how TerraGrow evolved from an indoor farming project to a universal computer vision platform.',
    author: 'TerraGrow Team',
    date: 'Dec 28, 2025',
    readTime: '4 min read',
    category: 'Company',
    image: '/images/city_night_aerial.jpg',
    slug: 'food-replicator-to-cognivue-journey',
  },
  {
    id: '5',
    title: 'Real-Time Sports Analytics with Computer Vision',
    excerpt: 'How teams are using AI to gain competitive advantages through player tracking and performance analysis.',
    author: 'TerraGrow Team',
    date: 'Dec 20, 2025',
    readTime: '5 min read',
    category: 'Sports',
    image: '/images/usecase_sports.jpg',
    slug: 'sports-analytics-computer-vision',
  },
  {
    id: '6',
    title: 'Construction Site Safety with AI Monitoring',
    excerpt: 'Implementing computer vision systems to improve safety compliance and reduce workplace incidents.',
    author: 'TerraGrow Team',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
    category: 'Construction',
    image: '/images/usecase_construction.jpg',
    slug: 'construction-safety-ai-monitoring',
  },
];

const categories = ['All', 'Agriculture', 'Healthcare', 'Sports', 'Construction', 'Engineering', 'Company'];

export function Blog({ onNavigate: _onNavigate, onReadArticle }: BlogProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center pt-20 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw] py-20">
          <div ref={heroRef} className="max-w-3xl" style={{ willChange: 'transform, opacity' }}>
            <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
              Blog
            </span>
            <h1 className="mt-4 font-display text-hero text-terragrow-white">
              Insights & Updates
            </h1>
            <p className="mt-6 text-body text-terragrow-gray max-w-xl">
              Thoughts on computer vision, AI infrastructure, and the future of visual intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-16 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div 
            className="relative rounded-card overflow-hidden border border-white/5 group cursor-pointer hover:border-white/10 transition-all duration-300"
            onClick={() => onReadArticle(featuredPost.slug)}
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-terragrow-dark/80 lg:bg-gradient-to-l" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.08em] text-terragrow-blue font-medium">
                  {featuredPost.category}
                </span>
                <h2 className="mt-4 font-display text-h2 text-terragrow-white group-hover:text-terragrow-blue transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-body text-terragrow-gray">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-6 text-sm text-terragrow-gray">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <div className="mt-8">
                  <Button
                    variant="outline"
                    className="border-white/20 text-terragrow-white hover:bg-white/5 hover:border-white/30 px-6 py-3 rounded-button transition-all duration-200"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="w-full py-8 bg-terragrow-dark border-y border-white/5">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-terragrow-blue text-white'
                    : 'bg-white/5 text-terragrow-gray hover:bg-white/10 hover:text-terragrow-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="group relative bg-terragrow-dark-secondary border border-white/5 rounded-card overflow-hidden hover:border-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => onReadArticle(post.slug)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-terragrow-dark-secondary to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-terragrow-blue/90 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-terragrow-white mb-3 group-hover:text-terragrow-blue transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-terragrow-gray leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-terragrow-gray">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-24 lg:py-32 bg-terragrow-dark-secondary">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-h2 text-terragrow-white">
              Stay in the loop
            </h2>
            <p className="mt-4 text-body text-terragrow-gray">
              Get the latest updates on computer vision, AI infrastructure, and TerraGrow news delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-3 bg-terragrow-dark border border-white/10 rounded-button text-terragrow-white placeholder:text-terragrow-gray/50 focus:border-terragrow-blue focus:outline-none focus:ring-1 focus:ring-terragrow-blue/20 w-full sm:w-72"
              />
              <Button
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-6 py-3 rounded-button transition-all duration-200 hover:-translate-y-0.5"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
