
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText } from "@/components/animations/animated-text";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

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
    description: "Startup journey from idea to MVP",
    features: ["Website Builder", "Marketing Tools", "Graphic Design", "MVP Development"]
  },
  {
    id: "blue",
    name: "Blue Pill",
    description: "Job hunting & skill development",
    features: ["Job Search Tools", "Skill Learning", "Resume Builder", "Interview Prep"]
  }
];

// Creative cursor effect for input field
const CursorBlink = () => (
  <motion.div 
    className="inline-block w-0.5 h-8 bg-white"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ repeat: Infinity, duration: 1.2 }}
  />
);

export function HeroSection() {
  const [appName, setAppName] = useState("");
  const [selectedPill, setSelectedPill] = useState<"red" | "blue" | null>(null);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Enter your vision...");
  const [showCursor, setShowCursor] = useState(false);
  const { toast } = useToast();

  // Creative effect: cycle through different placeholder texts
  useEffect(() => {
    const placeholders = [
      "Enter your app or startup idea...",
      "Describe your dream project...",
      "What do you want to build today?",
      "Your next big idea starts here...",
      "Transform your concept into reality...",
    ];
    
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      setPlaceholderText(placeholders[randomIndex]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePillSelect = (pill: "red" | "blue") => {
    setSelectedPill(pill);
  };

  const handleGenerate = () => {
    if (appName && selectedPill) {
      setIsGenerated(true);
      toast({
        title: "Creating your digital experience",
        description: `Generating ${selectedPill === "red" ? "startup toolkit" : "job hunting assistant"} for "${appName}"`,
      });
      // In a real app, this would trigger generation of content
      setTimeout(() => {
        // Simulate generation complete
        window.location.href = "#solution";
      }, 1500);
    } else {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please enter an app name and select a path to continue",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-8 pb-16 overflow-hidden">
      {/* Enhanced background elements with more dynamic animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-background"></div>
        
        {/* Creative animated orbs */}
        <motion.div 
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 0.7, 0.5],
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-redpill/20 blur-[140px]"
        />
        
        <motion.div 
          initial={{ opacity: 0.5 }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-bluepill/20 blur-[140px]"
        />
        
        {/* Adding a third orb for more complexity */}
        <motion.div 
          initial={{ opacity: 0.3 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-purple-500/20 blur-[120px]"
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" style={{ backgroundSize: '72px 72px' }}></div>
        </div>
      </div>

      <Container className="relative z-10 py-10">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.3} direction="up">
            <motion.div 
              className="mb-8 text-center inline-block px-6 py-2 border border-white/10 rounded-full text-sm text-white/80 backdrop-blur-sm bg-white/5"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span 
                className="mr-2 inline-block w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}  
              />
              Fewzon is now available for early access
            </motion.div>
          </FadeIn>
          
          {/* Main heading with enhanced styling and positioning */}
          <motion.div className="mb-14 text-center">
            <AnimatedText
              text="Don't wait for the future. Build it with Fewzon."
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gradient glow leading-tight mb-6"
              delay={0.2}
            />

            <FadeIn delay={0.4} direction="up">
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Website Builder, Graphic Editor, and everything you need to create beautiful digital experiences without code.
              </p>
            </FadeIn>
          </motion.div>

          <FadeIn delay={0.6} direction="up">
            <div className="max-w-3xl mx-auto mb-16">
              {/* Super creative, prominent input field with advanced animations */}
              <motion.div 
                className={`relative mb-10 group ${
                  selectedPill === "red" 
                    ? "bg-gradient-to-r from-redpill/30 to-redpill/5" 
                    : selectedPill === "blue"
                    ? "bg-gradient-to-r from-bluepill/30 to-bluepill/5" 
                    : "bg-white/5"
                } p-[2px] rounded-3xl transition-all duration-300 backdrop-blur-sm shadow-lg`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Dynamic border animation */}
                <motion.div
                  className="absolute inset-0 rounded-3xl overflow-hidden z-0"
                  animate={{
                    background: selectedPill === "red" 
                      ? ["linear-gradient(90deg, rgba(255,69,58,0) 0%, rgba(255,69,58,0.5) 50%, rgba(255,69,58,0) 100%)", 
                         "linear-gradient(90deg, rgba(255,69,58,0.5) 0%, rgba(255,69,58,0) 50%, rgba(255,69,58,0.5) 100%)"]
                      : selectedPill === "blue"
                      ? ["linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.5) 50%, rgba(59,130,246,0) 100%)", 
                         "linear-gradient(90deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0) 50%, rgba(59,130,246,0.5) 100%)"]
                      : ["linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)", 
                         "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.2) 100%)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  style={{ opacity: isFocused ? 1 : 0.6 }}
                />
                
                {/* Input container with enhanced styling */}
                <div className="flex flex-col sm:flex-row items-stretch relative z-10">
                  <div className="relative flex-grow">
                    <div className="relative">
                      <Input
                        value={appName}
                        onChange={(e) => setAppName(e.target.value)}
                        onFocus={() => {
                          setIsFocused(true);
                          setShowCursor(true);
                        }}
                        onBlur={() => {
                          setIsFocused(false);
                          setShowCursor(false);
                        }}
                        placeholder={placeholderText}
                        className={`h-16 sm:h-18 md:h-20 text-xl sm:text-2xl px-8 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none border-0 
                          ${selectedPill === "red" ? "bg-gradient-to-r from-black/40 to-redpill/5" :
                            selectedPill === "blue" ? "bg-gradient-to-r from-black/40 to-bluepill/5" : 
                            "bg-black/30"} 
                          backdrop-blur-sm text-white placeholder:text-white/50 focus:ring-0 shadow-inner`}
                      />
                      {showCursor && appName === "" && (
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                          <CursorBlink />
                        </div>
                      )}
                      
                      {/* Pill indicator */}
                      <AnimatePresence>
                        {appName && (
                          <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 0.7, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`absolute bottom-1 left-8 text-xs ${
                              selectedPill === "red" ? "text-redpill" : 
                              selectedPill === "blue" ? "text-bluepill" : 
                              "text-white/50"
                            }`}
                          >
                            {selectedPill === "red" ? "Building a startup experience" : 
                             selectedPill === "blue" ? "Creating a job hunting assistant" : 
                             "Choose your path below"}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                  
                  {/* Enhanced button with reactive animations */}
                  <Button 
                    onClick={handleGenerate}
                    disabled={!appName || !selectedPill || isGenerated}
                    className={`h-16 sm:h-18 md:h-20 px-8 text-xl font-medium rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none transition-all duration-300 ${
                      !appName || !selectedPill 
                        ? "bg-white/20 hover:bg-white/30" 
                        : selectedPill === "red" 
                        ? "bg-gradient-to-r from-redpill to-red-500 hover:from-red-500 hover:to-redpill" 
                        : "bg-gradient-to-r from-bluepill to-blue-500 hover:from-blue-500 hover:to-bluepill"
                    }`}
                  >
                    <motion.span
                      animate={{ 
                        scale: isGenerated ? [1, 1.05, 1] : 1,
                      }}
                      transition={{ 
                        repeat: isGenerated ? Infinity : 0, 
                        duration: 1.5 
                      }}
                    >
                      {isGenerated ? "Generating..." : "Generate"}
                    </motion.span>
                  </Button>
                </div>
              </motion.div>
              
              <div className="text-center mb-4 text-white/80 text-sm font-medium">Choose your path:</div>
              
              {/* Enhanced pill selection with more interactive animations */}
              <div className="flex flex-col md:flex-row gap-5 justify-center">
                {pills.map((pill) => (
                  <motion.div
                    key={pill.id}
                    onClick={() => handlePillSelect(pill.id)}
                    className={`cursor-pointer p-0.5 rounded-lg flex-1 ${
                      selectedPill === pill.id ? "scale-105 z-10" : ""
                    }`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    animate={selectedPill === pill.id ? {
                      boxShadow: pill.id === "red" 
                        ? ["0 0 0px rgba(255,69,58,0)", "0 0 30px rgba(255,69,58,0.5)", "0 0 0px rgba(255,69,58,0)"]
                        : ["0 0 0px rgba(59,130,246,0)", "0 0 30px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"]
                    } : {}}
                    transition={selectedPill === pill.id ? { 
                      repeat: Infinity, 
                      duration: 2.5, 
                      ease: "easeInOut" 
                    } : {}}
                  >
                    <div 
                      className={`p-6 rounded-lg border backdrop-blur-sm ${
                        selectedPill === pill.id
                          ? pill.id === "red"
                            ? "border-redpill/50 bg-gradient-to-br from-redpill/20 to-black/50"
                            : "border-bluepill/50 bg-gradient-to-br from-bluepill/20 to-black/50"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      } transition-all duration-300 h-full`}
                    >
                      <motion.h3 
                        className={`text-xl font-bold mb-2 flex items-center ${
                          pill.id === "red" ? "text-redpill glow-red" : "text-bluepill glow-blue"
                        }`}
                        animate={selectedPill === pill.id ? { scale: [1, 1.05, 1] } : {}}
                        transition={selectedPill === pill.id ? { 
                          repeat: Infinity, 
                          duration: 3,
                          repeatType: "reverse" 
                        } : {}}
                      >
                        <motion.span 
                          className={`inline-block w-3 h-3 mr-2 rounded-full ${
                            pill.id === "red" ? "bg-redpill" : "bg-bluepill"
                          }`}
                          animate={{ 
                            opacity: [0.7, 1, 0.7],
                            boxShadow: [
                              `0 0 0px ${pill.id === "red" ? "#ff453a" : "#3b82f6"}`,
                              `0 0 10px ${pill.id === "red" ? "#ff453a" : "#3b82f6"}`,
                              `0 0 0px ${pill.id === "red" ? "#ff453a" : "#3b82f6"}`
                            ]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            ease: "easeInOut" 
                          }}
                        />
                        {pill.name}
                      </motion.h3>
                      <p className="text-white/70 mb-4">{pill.description}</p>
                      <ul className="text-sm text-left">
                        {pill.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="mb-1.5 flex items-center text-white/80"
                          >
                            <motion.svg 
                              className={`w-4 h-4 mr-2 ${pill.id === "red" ? "text-redpill" : "text-bluepill"}`} 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                              animate={selectedPill === pill.id ? { rotate: [0, 360] } : {}}
                              transition={selectedPill === pill.id ? { 
                                duration: 0.6,
                                delay: 0.1 * index,
                                ease: "backOut" 
                              } : {}}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </motion.svg>
                            {feature}
                          </motion.li>
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
                <motion.div 
                  className="inline-block px-6 py-3 backdrop-blur-xl bg-black/50 border border-white/10 rounded-xl"
                  animate={{ boxShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]}}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="flex items-center">
                    <motion.div 
                      className="w-6 h-6 relative mr-3"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                    >
                      <span className="absolute inset-0 rounded-full border-2 border-t-redpill border-r-bluepill border-b-redpill border-l-bluepill animate-spin"></span>
                      <span className="absolute inset-2 rounded-full bg-white/10"></span>
                    </motion.div>
                    <span>
                      Generating your {selectedPill === "red" 
                        ? <span className="text-redpill font-semibold">startup toolkit</span> 
                        : <span className="text-bluepill font-semibold">job hunting assistant</span>
                      }...
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
