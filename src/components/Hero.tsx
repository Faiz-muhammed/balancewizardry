
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/ui/button';
import { ChevronRight, BarChart3, FileSpreadsheet, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32 lg:pt-40 lg:pb-40">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] h-[600px] w-[600px] rounded-full bg-finance-100/30 blur-3xl" />
        <div className="absolute -top-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-finance-200/20 blur-3xl" />
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-finance-100 text-finance-800 mb-6 font-medium text-sm">
                <Zap className="mr-1.5 h-4 w-4" />
                Say goodbye to financial reporting hassles
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform <span className="text-gradient">financial data</span> into actionable insights
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-8">
                Our AI instantly generates P&L statements and balance sheets from your trial balance data,
                then answers any questions about your financial performance.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-finance-600 hover:bg-finance-700 text-white">
                  Get Started <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-finance-200 hover:bg-finance-50">
                  See Demo
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-bold text-foreground">99%</div>
                  <div className="text-sm text-foreground/70">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">2min</div>
                  <div className="text-sm text-foreground/70">Average Process Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-foreground/70">Analysis Available</div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3} className="relative">
            <div className="relative bg-white shadow-xl rounded-2xl p-6 border border-gray-100 z-10 animate-float">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-gray-500">Financial Analysis</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-finance-50 rounded-lg">
                  <FileSpreadsheet className="h-5 w-5 text-finance-600 mr-3" />
                  <div>
                    <div className="text-sm font-medium">Trial Balance Upload</div>
                    <div className="text-xs text-gray-500">FY2023-Q4.xlsx</div>
                  </div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Generated Reports</div>
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">Completed</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="px-2 py-1 bg-white border border-gray-200 rounded text-xs flex items-center">
                      <span>P&L Statement</span>
                    </div>
                    <div className="px-2 py-1 bg-white border border-gray-200 rounded text-xs flex items-center">
                      <span>Balance Sheet</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 rounded-lg bg-white border border-gray-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <BarChart3 className="h-4 w-4 text-finance-600" />
                    <div className="text-sm font-medium">Key Metrics Summary</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Gross Profit Margin</span>
                      <span className="font-medium">38.5%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-finance-500 h-1.5 rounded-full" style={{ width: "38.5%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Operating Margin</span>
                      <span className="font-medium">22.7%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-finance-500 h-1.5 rounded-full" style={{ width: "22.7%" }}></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Current Ratio</span>
                      <span className="font-medium">2.1</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div className="bg-finance-500 h-1.5 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-center text-gray-400 animate-pulse-subtle">
                  Ask any question about your financial data...
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-finance-100 rounded-xl opacity-50 z-0"></div>
            <div className="absolute -left-8 -top-8 w-24 h-24 rounded-lg border border-finance-200 z-0"></div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
