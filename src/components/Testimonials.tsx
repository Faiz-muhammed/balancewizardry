
import { FadeIn } from '@/components/FadeIn';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "FinanceAI has transformed how we handle financial reporting. What used to take our accountants days now happens in minutes. The ability to ask questions and get instant insights has been game-changing for our executive meetings.",
    author: "Sarah Johnson",
    role: "CFO, TechVantage Solutions",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    id: 2,
    content: "As a small business owner, I never had the resources for comprehensive financial analysis. FinanceAI gives me enterprise-level insights at a fraction of the cost. I can make data-driven decisions confidently now.",
    author: "Michael Rodriguez",
    role: "Owner, Coastal Designs",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    id: 3,
    content: "The accuracy and speed of this tool are remarkable. Our team has cut report preparation time by 80%, and the conversational interface means everyone can access insights without specialized knowledge.",
    author: "Alex Wong",
    role: "Financial Controller, Horizon Group",
    avatar: "https://i.pravatar.cc/150?img=68",
    rating: 4,
  },
  {
    id: 4,
    content: "I was skeptical about AI financial tools, but FinanceAI proved me wrong. The reports generated match our manually prepared ones with over 99% accuracy, and the insights it provides are genuinely valuable.",
    author: "Jennifer Myers",
    role: "Accounting Manager, Elevate Retail",
    avatar: "https://i.pravatar.cc/150?img=47",
    rating: 5,
  },
  {
    id: 5,
    content: "This platform has become essential for our quarterly reporting process. I especially appreciate how it explains complex financial concepts in plain language when I ask questions about our performance.",
    author: "David Chen",
    role: "CEO, Nimble Startups",
    avatar: "https://i.pravatar.cc/150?img=53",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section id="testimonials" className="py-24 bg-finance-900 text-white relative">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-finance-800 to-transparent" />
        <div className="absolute -top-[50%] -right-[10%] h-[600px] w-[600px] rounded-full bg-finance-800/30 blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] h-[600px] w-[600px] rounded-full bg-finance-800/20 blur-3xl" />
      </div>
      
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Financial Professionals
            </h2>
            <p className="text-lg text-white/80">
              See how FinanceAI is revolutionizing financial reporting and analysis for businesses of all sizes.
            </p>
          </div>
        </FadeIn>
        
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 mb-10">
              <div className="flex space-x-1 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "h-5 w-5", 
                      i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
                    )} 
                  />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed min-h-[120px]">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].author}
                    className="h-12 w-12 rounded-full border-2 border-white/20"
                  />
                </div>
                <div>
                  <div className="font-bold">{testimonials[activeIndex].author}</div>
                  <div className="text-white/70 text-sm">{testimonials[activeIndex].role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex 
                    ? "bg-white" 
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
