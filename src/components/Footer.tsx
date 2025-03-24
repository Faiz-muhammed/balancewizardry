
import { LinkedIn, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FadeIn } from '@/components/FadeIn';

export default function Footer() {
  return (
    <footer className="bg-finance-950 text-white pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <FadeIn className="md:col-span-2">
            <div className="mb-6">
              <h2 className="font-display font-bold text-2xl mb-2">FinanceAI</h2>
              <p className="text-white/70 max-w-sm">
                Transforming financial reporting and analysis with advanced AI technology.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-3">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Button className="bg-white text-finance-950 hover:bg-white/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <LinkedIn className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Security</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </FadeIn>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} FinanceAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
