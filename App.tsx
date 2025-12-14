import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { PageView } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigation = (page: PageView) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    // Simple transition effect delay
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 200);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-navy text-slate-200 font-sans selection:bg-accent selection:text-navy">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      
      <main className={`flex-grow transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;