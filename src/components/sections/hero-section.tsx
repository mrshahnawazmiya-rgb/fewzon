
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/animations/animated-text";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Pill {
  id: "red" | "blue";
  name: string;
  description: string;
  features: string[];
}

const pills: Pill[] = [
  {
    id: "red",
    name: "Red Pill",
    description: "Embrace full creative freedom",
    features: ["Advanced Graphic Editor", "Custom Code", "Animation Studio", "Full Design System"]
  },
  {
    id: "blue",
    name: "Blue Pill",
    description: "Get started quickly with templates",
    features: ["Website Builder", "Template Library", "Blog Creator", "SEO Tools"]
  }
];

export function HeroSection() {
  const [appName, setAppName] = useState("");
  const [selectedPill, setSelectedPill] = useState<"red" | "blue" | null>(null);
  const [isGenerated, setIsGenerated] = useState(false);

  const handlePillSelect = (pill: "red" | "blue") => {
    setSelectedPill(pill);
  };

  const handleGenerate = () => {
    if (appName && selectedPill) {
      setIsGenerated(true);
      // In a real app, this would trigger generation of content
      setTimeout(() => {
        // Simulate generation complete
        window.location.href = "#solution";
      }, 1500);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-background"></div>
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-redpill/20 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-bluepill/20 blur-[100px] animate-pulse-glow"></div>
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <div className="mb-6 inline-block px-6 py-2 border border-white/10 rounded-full text-sm text-white/70">
              <span className="mr-2 inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              Fewzon is now available for early access
            </div>
          </FadeIn>

          <AnimatedText
            text="Build Anything with Fewzon"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient leading-tight mb-6"
            delay={0.2}
          />

          <FadeIn delay={0.4} direction="up">
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Website Builder, Graphic Editor, and everything you need to create beautiful digital experiences without code.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="max-w-md mx-auto mb-16">
              <div className="flex gap-4 mb-8">
                <Input
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  placeholder="Enter your app name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                />
                <Button 
                  onClick={handleGenerate}
                  disabled={!appName || !selectedPill || isGenerated}
                  className={`px-8 ${
                    selectedPill === "red" 
                      ? "bg-redpill hover:bg-redpill/90" 
                      : selectedPill === "blue" 
                      ? "bg-bluepill hover:bg-bluepill/90" 
                      : "bg-white/20 hover:bg-white/30"
                  } transition-all duration-300`}
                >
                  {isGenerated ? "Generating..." : "Generate"}
                </Button>
              </div>
              
              <div className="text-center mb-2 text-white/70 text-sm">Choose your path:</div>
              
              <div className="flex gap-4 justify-center">
                {pills.map((pill) => (
                  <motion.div
                    key={pill.id}
                    onClick={() => handlePillSelect(pill.id)}
                    className={`cursor-pointer p-0.5 rounded-lg ${
                      selectedPill === pill.id ? "scale-105" : ""
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className={`p-6 rounded-lg border ${
                        selectedPill === pill.id
                          ? pill.id === "red"
                            ? "border-redpill/50 bg-redpill/10"
                            : "border-bluepill/50 bg-bluepill/10"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      } transition-all duration-300`}
                    >
                      <h3 
                        className={`text-xl font-bold mb-2 ${
                          pill.id === "red" ? "text-redpill" : "text-bluepill"
                        }`}
                      >
                        {pill.name}
                      </h3>
                      <p className="text-white/70 mb-4">{pill.description}</p>
                      <ul className="text-sm text-left">
                        {pill.features.map((feature, index) => (
                          <li key={index} className="mb-1 flex items-center text-white/80">
                            <svg className={`w-4 h-4 mr-2 ${pill.id === "red" ? "text-redpill" : "text-bluepill"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          <AnimatePresence>
            {isGenerated && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <div className="inline-block px-6 py-3 bg-white/10 rounded-lg">
                  <span className="inline-block w-4 h-4 border-2 border-t-redpill border-r-bluepill border-b-redpill border-l-bluepill rounded-full animate-spin mr-2"></span>
                  Generating your {selectedPill === "red" ? "creative studio" : "website builder"}...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
