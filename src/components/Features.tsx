
import { FadeIn } from '@/components/FadeIn';
import { FileText, PieChart, BarChart4, Search, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Instant Financial Reports',
    description: 'Generate comprehensive P&L statements and balance sheets in seconds, not hours or days.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: PieChart,
    title: 'Automated Analysis',
    description: 'Our AI identifies trends, anomalies, and key performance indicators automatically.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Search,
    title: 'Conversational Insights',
    description: 'Ask questions about your financial data in plain English and get immediate answers.',
    color: 'text-finance-600',
    bgColor: 'bg-finance-50',
  },
  {
    icon: BarChart4,
    title: 'Ratio Analysis',
    description: 'Automatically calculate and track key financial ratios to gauge business health.',
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Clock,
    title: 'Time Series Comparisons',
    description: 'Compare performance across different time periods to identify trends and seasonality.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: Shield,
    title: 'Secure & Confidential',
    description: 'Your financial data is encrypted and never stored, ensuring complete confidentiality.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-finance-50">
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Financial Data, <span className="text-gradient">Reimagined</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Our AI-powered platform transforms complex financial data into clear, actionable insights
              that help you make informed business decisions.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.1 * index} className="h-full">
              <div className="h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`${feature.bgColor} ${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
