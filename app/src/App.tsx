import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Cognivue } from '@/pages/Cognivue';
import { Solutions } from '@/pages/Solutions';
import { Pricing } from '@/pages/Pricing';
import { Blog } from '@/pages/Blog';
import { BlogPost } from '@/pages/BlogPost';
import { Security } from '@/pages/Security';
import { Contact } from '@/pages/Contact';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [blogPostSlug, setBlogPostSlug] = useState<string | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setBlogPostSlug(null);
    window.scrollTo(0, 0);
  };

  const handleReadArticle = (slug: string) => {
    setBlogPostSlug(slug);
    window.scrollTo(0, 0);
  };

  const handleBackFromPost = () => {
    setBlogPostSlug(null);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    if (currentPage === 'blog' && blogPostSlug) {
      return <BlogPost onNavigate={handleNavigate} postSlug={blogPostSlug} onBack={handleBackFromPost} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'cognivue':
        return <Cognivue onNavigate={handleNavigate} />;
      case 'solutions':
        return <Solutions onNavigate={handleNavigate} />;
      case 'pricing':
        return <Pricing onNavigate={handleNavigate} />;
      case 'blog':
        return <Blog onNavigate={handleNavigate} onReadArticle={handleReadArticle} />;
      case 'security':
        return <Security onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-terragrow-dark text-terragrow-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
