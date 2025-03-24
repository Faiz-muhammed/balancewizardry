
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'py-3 backdrop-blur-lg bg-white/80 shadow-sm' : 'py-6'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center z-50">
          <span className="font-display font-bold text-2xl text-foreground">FinanceAI</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/90 hover:text-finance-600 transition-colors font-medium">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground/90 hover:text-finance-600 transition-colors font-medium">
            How It Works
          </a>
          <a href="#testimonials" className="text-foreground/90 hover:text-finance-600 transition-colors font-medium">
            Testimonials
          </a>
          <a href="#pricing" className="text-foreground/90 hover:text-finance-600 transition-colors font-medium">
            Pricing
          </a>
          <Button className="ml-2 bg-finance-600 hover:bg-finance-700">
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white transition-all duration-300 flex flex-col items-center justify-center space-y-8 md:hidden',
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <a 
            href="#features" 
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#pricing" 
            className="text-xl font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <Button 
            className="mt-4 bg-finance-600 hover:bg-finance-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
