
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Attach } from "lucide-react";

interface Pill {
  id: string;
  label: string;
  icon: JSX.Element;
}

const pills: Pill[] = [
  {
    id: "markdown",
    label: "Markdown editor",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 12H7L10 9L13 15L16 12L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    id: "fitness",
    label: "Fitness tracker",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8H17V6C17 4.89543 16.1046 4 15 4H9C7.89543 4 7 4.89543 7 6V8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    id: "music",
    label: "Music player",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5L21 3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  },
  {
    id: "slideshow",
    label: "Slidev presentation",
    icon: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6H9C6.79086 6 5 7.79086 5 10V16C5 18.2091 6.79086 20 9 20H15C17.2091 20 19 18.2091 19 16V10C19 7.79086 17.2091 6 15 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  }
];

export function HeroSection() {
  const [prompt, setPrompt] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Tell us what you'd like to build",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    toast({
      title: "Building your digital experience",
      description: `Creating "${prompt}" for you`,
    });
    
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      window.location.href = "#solution";
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700/20 via-background/0 to-background/0"></div>
        
        {/* Subtle animated orbs for background interest */}
        <motion.div 
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-redpill/10 blur-[180px]"
        />
        
        <motion.div 
          initial={{ opacity: 0.2 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-bluepill/10 blur-[140px]"
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Early Access Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
          >
            <motion.span 
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="w-2 h-2 mr-2 rounded-full bg-green-500"
            />
            <span className="text-sm text-white/80">Fewzon is now available for early access</span>
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gradient leading-tight mb-5"
          >
            Build something <span className="text-gradient glow">Lovable</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 mb-10"
          >
            Idea to app in seconds, with your personal full stack engineer
          </motion.p>
          
          {/* Main Input Box - Styled similarly to Lovable's clean, minimal design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-white/20 via-white/10 to-white/20 shadow-lg">
              <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden">
                <div className="relative flex flex-col">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Ask Fewzon to create a prototype..."
                    rows={5}
                    className="w-full bg-transparent border-0 p-5 text-lg text-white placeholder:text-white/50 focus:ring-0 resize-none"
                  />
                  
                  <div className="flex items-center justify-between p-3 border-t border-white/10 bg-white/5">
                    <div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                      >
                        <Attach className="h-5 w-5 mr-1" /> Attach
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <motion.span
                        animate={isGenerating ? {
                          opacity: [0.5, 1, 0.5],
                        } : {}}
                        transition={isGenerating ? {
                          repeat: Infinity,
                          duration: 1.5,
                        } : {}}
                        className={`px-2.5 py-1 text-sm rounded-full border ${isGenerating ? 'text-green-300 border-green-500/30' : 'text-white/70 border-white/10'}`}
                      >
                        {isGenerating ? "Building..." : "Public"}
                      </motion.span>
                      
                      <Button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-gradient-to-r from-bluepill to-redpill hover:opacity-90"
                      >
                        {isGenerating ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-t-white border-white/30 rounded-full"
                          />
                        ) : (
                          "Generate"
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Start Pills - Similar to Lovable's suggestion pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {pills.map((pill) => (
              <motion.button
                key={pill.id}
                onClick={() => setPrompt(`Create a ${pill.label.toLowerCase()}`)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + (pills.indexOf(pill) * 0.1) }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white/80 transition-all"
              >
                <span className="mr-2">{pill.icon}</span>
                {pill.label}
              </motion.button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
