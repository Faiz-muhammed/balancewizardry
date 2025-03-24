
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const pricingOptions = [
  {
    id: "startup",
    name: "Startup",
    description: "Perfect for small businesses and startups",
    price: {
      monthly: 49,
      annually: 39,
    },
    features: [
      "Up to 5 financial reports monthly",
      "Basic financial analysis",
      "Email support",
      "Standard report templates",
      "7-day data history",
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline",
  },
  {
    id: "business",
    name: "Business",
    description: "Ideal for growing companies",
    price: {
      monthly: 99,
      annually: 79,
    },
    features: [
      "Up to 20 financial reports monthly",
      "Advanced financial analysis",
      "Priority email & chat support",
      "Custom report templates",
      "30-day data history",
      "Team collaboration features",
    ],
    popular: true,
    buttonText: "Get Started",
    buttonVariant: "default",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: {
      monthly: 249,
      annually: 199,
    },
    features: [
      "Unlimited financial reports",
      "Enterprise-grade analysis",
      "24/7 dedicated support",
      "Custom integration options",
      "Unlimited data history",
      "Advanced security features",
      "API access",
      "Dedicated account manager",
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline",
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Choose the plan that fits your business needs. All plans include core financial reporting and analysis features.
            </p>
            
            <div className="flex justify-center items-center space-x-3">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  "px-4 py-2 rounded-l-lg text-sm font-medium",
                  billingCycle === 'monthly'
                    ? "bg-finance-600 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annually')}
                className={cn(
                  "px-4 py-2 rounded-r-lg text-sm font-medium flex items-center",
                  billingCycle === 'annually'
                    ? "bg-finance-600 text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                Annually
                <span className="ml-2 text-xs py-0.5 px-1.5 bg-green-500 text-white rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((plan, index) => (
            <FadeIn key={plan.id} delay={0.1 * index} className="h-full">
              <div 
                className={cn(
                  "h-full rounded-2xl p-8 flex flex-col",
                  plan.popular 
                    ? "bg-finance-600 text-white" 
                    : "bg-white border border-gray-200"
                )}
              >
                {plan.popular && (
                  <div className="inline-block mb-4 text-xs font-semibold py-1 px-3 rounded-full bg-white/20">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.popular ? "text-white/80 mb-6" : "text-foreground/70 mb-6"}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${plan[billingCycle]}
                  </span>
                  <span className={plan.popular ? "text-white/80" : "text-foreground/70"}>
                    /month
                  </span>
                  {billingCycle === 'annually' && (
                    <div className="text-sm mt-1">
                      {plan.popular ? "Billed annually" : "Billed annually"}
                    </div>
                  )}
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className={cn(
                        "h-5 w-5 mr-3 flex-shrink-0 mt-0.5",
                        plan.popular ? "text-white" : "text-finance-600"
                      )} />
                      <span className={plan.popular ? "text-white/90" : "text-foreground/80"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <Button 
                    className={cn(
                      "w-full",
                      plan.popular
                        ? "bg-white text-finance-600 hover:bg-white/90"
                        : "bg-finance-600 text-white hover:bg-finance-700"
                    )}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn>
          <div className="mt-16 text-center">
            <p className="text-foreground/70">
              Need a custom solution? <a href="#" className="text-finance-600 font-medium">Contact our sales team</a> for a tailored package.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
