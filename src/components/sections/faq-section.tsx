
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Fewzon?",
    answer: "Fewzon is an all-in-one platform that combines a website builder, graphic editor, and animation studio. It allows you to create beautiful digital experiences without writing code. Whether you're building a landing page, designing graphics, or creating interactive content, Fewzon provides all the tools you need in one place."
  },
  {
    question: "Do I need design or coding experience to use Fewzon?",
    answer: "No! Fewzon is designed to be accessible to everyone, regardless of technical experience. Our intuitive drag-and-drop interface and pre-built templates make it easy to create professional-looking designs without any prior knowledge of coding or design principles."
  },
  {
    question: "Can I try Fewzon before purchasing?",
    answer: "Yes, all Fewzon plans come with a 14-day free trial. You'll have full access to all features included in your selected plan, allowing you to thoroughly test the platform before making a commitment."
  },
  {
    question: "What's the difference between the Red Pill and Blue Pill options?",
    answer: "The Red Pill option is designed for those who want maximum creative freedom, with access to advanced graphic editing tools, custom code capabilities, and an animation studio. The Blue Pill option is more template-focused, making it perfect for those who want to get started quickly with pre-built designs and layouts."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll gain immediate access to new features. When downgrading, the change will take effect at the end of your current billing cycle."
  },
  {
    question: "Is there a limit to how many projects I can create?",
    answer: "No, all Fewzon plans include unlimited projects. You can create as many websites, graphics, or animations as you need without hitting any limits."
  },
  {
    question: "What kind of support is available?",
    answer: "All Fewzon plans include access to our comprehensive documentation, video tutorials, and community forum. Additionally, all paying customers receive 24/7 email support, with higher-tier plans including priority support and dedicated account managers."
  }
];

export function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" once>
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-4">FAQ</h2>
          <AnimatedText
            text="Frequently Asked Questions"
            className="text-4xl md:text-5xl font-bold mb-6"
            once
          />
          <p className="text-white/70">
            Everything you need to know about Fewzon. Can't find the answer you're looking for? 
            <a href="#" className="text-white underline ml-1">Contact our support team</a>.
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FadeIn 
              key={index} 
              className="mb-4"
              delay={index * 0.1}
              once
            >
              <div 
                className={`border ${
                  openItem === index
                    ? "border-white/20 bg-white/5"
                    : "border-white/10 bg-transparent"
                } rounded-lg overflow-hidden transition-all duration-300`}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className={`transform transition-transform duration-300 ${openItem === index ? "rotate-45" : "rotate-0"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-white/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
