
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  includedIn: ("basic" | "pro" | "enterprise")[];
  category: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  buttonText: string;
  highlighted: boolean;
}

// Extended feature list organized by categories
const featureCategories = [
  {
    id: "website",
    name: "Website Builder"
  },
  {
    id: "jobs",
    name: "Job Hunter"
  },
  {
    id: "collaboration",
    name: "Collaboration"
  },
  {
    id: "learning",
    name: "Learning Management"
  },
  {
    id: "design",
    name: "Design & Graphics"
  },
  {
    id: "ai",
    name: "AI Tools"
  },
  {
    id: "marketing",
    name: "Marketing & Social Media"
  },
  {
    id: "marketplace",
    name: "Marketplaces"
  },
  {
    id: "security",
    name: "Security & Support"
  }
];

const features: Feature[] = [
  // Website Builder Features
  {
    id: "website-builder",
    name: "Drag-and-drop Website Builder",
    description: "Create responsive websites easily",
    price: 9,
    includedIn: ["basic", "pro", "enterprise"],
    category: "website"
  },
  {
    id: "custom-code",
    name: "Custom Code Option",
    description: "HTML, CSS, JavaScript customization",
    price: 7,
    includedIn: ["pro", "enterprise"],
    category: "website"
  },
  {
    id: "templates",
    name: "Pre-built Website Templates",
    description: "Professional ready-to-use designs",
    price: 5,
    includedIn: ["basic", "pro", "enterprise"],
    category: "website"
  },
  {
    id: "responsive-design",
    name: "Responsive Design",
    description: "Mobile-ready websites",
    price: 4,
    includedIn: ["basic", "pro", "enterprise"],
    category: "website"
  },
  
  // Job Hunter Features
  {
    id: "job-scraping",
    name: "Job Board Scraping",
    description: "Auto-scrape from multiple job boards",
    price: 12,
    includedIn: ["pro", "enterprise"],
    category: "jobs"
  },
  {
    id: "job-filters",
    name: "Advanced Job Filters",
    description: "Filter by role, location, salary, etc.",
    price: 6,
    includedIn: ["basic", "pro", "enterprise"],
    category: "jobs"
  },
  {
    id: "job-tracker",
    name: "Application Tracker",
    description: "Track all your job applications",
    price: 5,
    includedIn: ["basic", "pro", "enterprise"],
    category: "jobs"
  },
  
  // Collaboration Features
  {
    id: "team-projects",
    name: "Team Projects",
    description: "Collaborate with team members",
    price: 15,
    includedIn: ["pro", "enterprise"],
    category: "collaboration"
  },
  {
    id: "real-time-editing",
    name: "Real-time Editing",
    description: "Collaborate simultaneously on projects",
    price: 10,
    includedIn: ["enterprise"],
    category: "collaboration"
  },
  {
    id: "version-control",
    name: "Version Control",
    description: "Track changes in documents and code",
    price: 8,
    includedIn: ["pro", "enterprise"],
    category: "collaboration"
  },
  
  // Learning Management Features
  {
    id: "course-creation",
    name: "Course Creation",
    description: "Create courses with videos and quizzes",
    price: 18,
    includedIn: ["enterprise"],
    category: "learning"
  },
  {
    id: "progress-tracking",
    name: "Learner Progress Tracking",
    description: "Monitor student progress",
    price: 7,
    includedIn: ["pro", "enterprise"],
    category: "learning"
  },
  
  // Design Features
  {
    id: "graphic-editor",
    name: "Graphic Design Tools",
    description: "Professional graphic design capabilities",
    price: 14,
    includedIn: ["pro", "enterprise"],
    category: "design"
  },
  {
    id: "design-templates",
    name: "Design Templates",
    description: "Social media, ads, poster templates",
    price: 8,
    includedIn: ["basic", "pro", "enterprise"],
    category: "design"
  },
  
  // AI Tools
  {
    id: "ai-ad-generator",
    name: "AI Ad Generator",
    description: "Create ads with AI for various platforms",
    price: 20,
    includedIn: ["enterprise"],
    category: "ai"
  },
  {
    id: "ai-content",
    name: "AI Content Generation",
    description: "Generate articles and blog posts",
    price: 15,
    includedIn: ["pro", "enterprise"],
    category: "ai"
  },
  
  // Marketing & Social Media
  {
    id: "social-management",
    name: "Social Media Management",
    description: "Schedule posts and manage accounts",
    price: 12,
    includedIn: ["pro", "enterprise"],
    category: "marketing"
  },
  {
    id: "analytics",
    name: "Analytics Dashboard",
    description: "Track performance across platforms",
    price: 10,
    includedIn: ["pro", "enterprise"],
    category: "marketing"
  },
  
  // Marketplaces
  {
    id: "course-marketplace",
    name: "Course Marketplace",
    description: "Sell courses to users",
    price: 25,
    includedIn: ["enterprise"],
    category: "marketplace"
  },
  {
    id: "template-marketplace",
    name: "Template Marketplace",
    description: "Sell your templates and designs",
    price: 15,
    includedIn: ["enterprise"],
    category: "marketplace"
  },
  
  // Security & Support
  {
    id: "security",
    name: "Advanced Security",
    description: "Data encryption and 2FA",
    price: 8,
    includedIn: ["pro", "enterprise"],
    category: "security"
  },
  {
    id: "support",
    name: "Priority Support",
    description: "Live chat and priority assistance",
    price: 10,
    includedIn: ["enterprise"],
    category: "security"
  }
];

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for individuals and small projects",
    basePrice: 19,
    buttonText: "Get Started",
    highlighted: false
  },
  {
    id: "pro",
    name: "Pro",
    description: "Ideal for professionals and growing businesses",
    basePrice: 49,
    buttonText: "Go Pro",
    highlighted: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams and organizations with advanced needs",
    basePrice: 99,
    buttonText: "Contact Sales",
    highlighted: false
  }
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["website-builder", "templates", "responsive-design"]);
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");
  const [selectedTab, setSelectedTab] = useState<string>("website");

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(featureId)) {
        return prev.filter(id => id !== featureId);
      } else {
        return [...prev, featureId];
      }
    });
  };

  const calculatePrice = (plan: PricingPlan) => {
    let total = plan.basePrice;
    
    // Add price for selected features not included in the plan
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature && !feature.includedIn.includes(plan.id as any)) {
        total += feature.price;
      }
    });

    // Apply yearly discount
    if (billingCycle === "yearly") {
      total = total * 10; // 12 months but with 2 months free
    }

    return total;
  };

  // Filter features by selected category
  const filteredFeatures = features.filter(feature => feature.category === selectedTab);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black to-transparent z-0"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-redpill/10 blur-[100px]"></div>
      <div className="absolute -right-40 bottom-40 w-80 h-80 rounded-full bg-bluepill/10 blur-[100px]"></div>
      
      <Container className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" once>
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-4">Pricing</h2>
          <AnimatedText
            text="Choose the perfect plan for your needs"
            className="text-4xl md:text-5xl font-bold mb-6"
            once
          />
          <p className="text-white/70 mb-8">
            Select only what you need and scale as you grow. All plans come with a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-white" : "text-white/60"}`}>
              Monthly
            </span>
            <Switch
              checked={billingCycle === "yearly"}
              onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
            />
            <span className={`text-sm ${billingCycle === "yearly" ? "text-white" : "text-white/60"}`}>
              Yearly <span className="text-redpill">(Save 16%)</span>
            </span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Feature selection with tabs by category */}
          <FadeIn direction="right" once>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Choose your features</h3>
              
              <Tabs 
                defaultValue="website" 
                value={selectedTab}
                onValueChange={setSelectedTab}
                className="mb-6"
              >
                <TabsList className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                  {featureCategories.map(category => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="text-xs sm:text-sm"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {featureCategories.map(category => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    <div className="space-y-6">
                      {filteredFeatures.map((feature) => (
                        <div key={feature.id} className="flex items-start">
                          <Checkbox
                            id={feature.id}
                            checked={selectedFeatures.includes(feature.id)}
                            onCheckedChange={() => handleFeatureToggle(feature.id)}
                            className="mt-1"
                          />
                          <div className="ml-4">
                            <label 
                              htmlFor={feature.id} 
                              className="font-medium cursor-pointer block mb-1"
                            >
                              {feature.name}
                              <span className="ml-2 text-sm text-white/50">
                                +${feature.price}/mo
                              </span>
                            </label>
                            <p className="text-sm text-white/70">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-white">Selected features:</span> {selectedFeatures.length}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedFeatures.map(featureId => {
                    const feature = features.find(f => f.id === featureId);
                    return feature ? (
                      <div 
                        key={feature.id}
                        className="bg-white/10 text-xs px-2 py-1 rounded-full flex items-center"
                      >
                        {feature.name}
                        <button 
                          onClick={() => handleFeatureToggle(feature.id)}
                          className="ml-1 text-white/70 hover:text-white"
                        >
                          ×
                        </button>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Plans */}
          <FadeIn direction="left" delay={0.2} once>
            <div className="grid gap-6">
              {plans.map((plan) => {
                const price = calculatePrice(plan);
                const isSelected = selectedPlan === plan.id;
                
                return (
                  <motion.div
                    key={plan.id}
                    whileHover={{ y: -4 }}
                    className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                      isSelected 
                        ? "bg-white/10 border border-white/20" 
                        : "bg-white/5 border border-white/10"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-redpill to-bluepill text-white text-xs rounded-full font-medium">
                        Popular
                      </div>
                    )}
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-sm text-white/70 mb-2">{plan.description}</p>
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">${price}</span>
                          <span className="text-white/70 text-sm ml-1">/{billingCycle === "yearly" ? "year" : "month"}</span>
                        </div>
                      </div>
                      <div>
                        <button 
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            isSelected 
                              ? "bg-gradient-to-r from-redpill to-bluepill text-white"
                              : "bg-white/10 hover:bg-white/20 text-white"
                          }`}
                        >
                          {plan.buttonText}
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="mb-4">
                        <span className="text-sm font-medium">Includes features you selected:</span>
                      </div>
                      <ul className="space-y-2 text-sm max-h-48 overflow-y-auto pr-2 scrollbar-thin">
                        {selectedFeatures.map(featureId => {
                          const feature = features.find(f => f.id === featureId);
                          const included = feature?.includedIn.includes(plan.id as any);
                          
                          if (!feature) return null;
                          
                          return (
                            <li 
                              key={feature.id} 
                              className={`flex items-center ${
                                included ? "text-white/90" : "text-white/40"
                              }`}
                            >
                              <svg 
                                className={`w-4 h-4 mr-2 ${
                                  included ? "text-green-500" : "text-white/40"
                                }`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={included ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                              </svg>
                              {feature.name}
                              {!included && (
                                <span className="ml-1 text-xs text-white/60">
                                  (+${feature.price}/mo)
                                </span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>
        </div>

        <FadeIn className="text-center" once>
          <p className="text-white/70 text-sm">
            All plans include unlimited projects, free updates, and 24/7 customer support.
            <br />
            Need a custom solution? <a href="#" className="text-white underline">Contact our sales team</a>.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
