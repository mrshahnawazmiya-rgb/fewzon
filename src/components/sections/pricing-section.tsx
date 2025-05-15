
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

interface Feature {
  id: string;
  name: string;
  description: string;
  price: number;
  includedIn: ("basic" | "pro" | "enterprise")[];
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  buttonText: string;
  highlighted: boolean;
}

const features: Feature[] = [
  {
    id: "website-builder",
    name: "Website Builder",
    description: "Create responsive websites with drag-and-drop",
    price: 9,
    includedIn: ["basic", "pro", "enterprise"]
  },
  {
    id: "graphic-editor",
    name: "Graphic Editor",
    description: "Design professional graphics and visuals",
    price: 12,
    includedIn: ["pro", "enterprise"]
  },
  {
    id: "animation-studio",
    name: "Animation Studio",
    description: "Create animated content and interactions",
    price: 15,
    includedIn: ["enterprise"]
  },
  {
    id: "blog-tools",
    name: "Blog Tools",
    description: "Content management for blogs and articles",
    price: 7,
    includedIn: ["basic", "pro", "enterprise"]
  },
  {
    id: "seo-tools",
    name: "SEO Tools",
    description: "Optimize your content for search engines",
    price: 8,
    includedIn: ["pro", "enterprise"]
  }
];

const plans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic",
    description: "Perfect for individuals and small projects",
    basePrice: 15,
    buttonText: "Get Started",
    highlighted: false
  },
  {
    id: "pro",
    name: "Pro",
    description: "Ideal for professionals and growing businesses",
    basePrice: 29,
    buttonText: "Go Pro",
    highlighted: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For teams and organizations with advanced needs",
    basePrice: 49,
    buttonText: "Contact Sales",
    highlighted: false
  }
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["website-builder"]);
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

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
          {/* Feature selection */}
          <FadeIn direction="right" once>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Choose your features</h3>
              
              <div className="space-y-6">
                {features.map((feature) => (
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
                      <ul className="space-y-2 text-sm">
                        {features.map(feature => {
                          const included = feature.includedIn.includes(plan.id as any);
                          const selected = selectedFeatures.includes(feature.id);
                          
                          return (
                            <li 
                              key={feature.id} 
                              className={`flex items-center ${
                                included || selected ? "text-white/90" : "text-white/40 line-through"
                              }`}
                            >
                              <svg 
                                className={`w-4 h-4 mr-2 ${
                                  included || selected ? "text-green-500" : "text-white/40"
                                }`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature.name}
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
