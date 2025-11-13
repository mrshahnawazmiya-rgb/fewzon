import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for individuals",
    features: [
      "Website Builder",
      "50+ Templates",
      "Job Search Tools",
      "Basic Analytics",
      "Email Support"
    ]
  },
  {
    name: "Pro",
    price: "$79",
    description: "Best for professionals",
    features: [
      "Everything in Basic",
      "Custom Code Editor",
      "Team Collaboration",
      "Advanced Analytics",
      "Priority Support",
      "AI Tools Access"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited Team Members",
      "Custom Integrations",
      "Dedicated Support",
      "SLA Guarantee",
      "Advanced Security"
    ]
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" once>
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Pricing</h2>
          <AnimatedText
            text="Choose your plan"
            className="text-4xl md:text-5xl font-bold mb-6"
            once
          />
          <p className="text-muted-foreground">
            Simple, transparent pricing that grows with you.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1} once>
              <motion.div
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary"
                    : "bg-card border border-border"
                }`}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
