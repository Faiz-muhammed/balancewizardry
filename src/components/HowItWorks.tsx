
import { FadeIn } from '@/components/FadeIn';
import { FileUp, Bot, ChartBar, MessagesSquare } from 'lucide-react';

const steps = [
  {
    icon: FileUp,
    title: 'Upload Your Trial Balance',
    description: 'Simply upload your trial balance sheet in Excel, CSV, or PDF format.',
    color: 'text-blue-500',
  },
  {
    icon: Bot,
    title: 'AI Processes the Data',
    description: 'Our intelligent algorithm analyzes and categorizes all financial entries.',
    color: 'text-purple-500',
  },
  {
    icon: ChartBar,
    title: 'Reports Generated',
    description: 'Receive professionally formatted P&L and balance sheet reports instantly.',
    color: 'text-finance-600',
  },
  {
    icon: MessagesSquare,
    title: 'Ask Questions',
    description: 'Interact with your data by asking questions in plain language.',
    color: 'text-green-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-finance-50 to-transparent" />
      </div>
      
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How <span className="text-gradient">FinanceAI</span> Works
            </h2>
            <p className="text-lg text-foreground/80">
              Our streamlined process transforms your raw financial data into
              valuable insights in just a few simple steps.
            </p>
          </div>
        </FadeIn>
        
        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gray-200 -translate-x-1/2" />
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <FadeIn 
                key={index} 
                delay={0.2 * index}
                className="md:grid md:grid-cols-2 md:gap-8 md:items-center"
              >
                <div className={`mb-6 md:mb-0 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <h3 className="flex md:block items-center gap-3 text-xl font-bold mb-3">
                    <div className={`md:hidden ${step.color} p-2 rounded-full bg-white`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    {step.title}
                  </h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
                
                <div className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end md:order-1'}`}>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center z-10 relative">
                      <step.icon className={`h-8 w-8 ${step.color}`} />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gray-100 opacity-50" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
