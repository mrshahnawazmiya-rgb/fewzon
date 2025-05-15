
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";
import { AnimatedText } from "@/components/animations/animated-text";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc",
    content: "Fewzon has revolutionized how we create landing pages. What used to take weeks now takes hours, and the results are stunning. The editor is intuitive and the templates gave us the perfect starting point.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "DesignBuddy",
    content: "As someone with minimal design experience, Fewzon's graphic editor has been a game changer. I can now create professional-looking visuals for our products without hiring a designer for every small change.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Artify Studio",
    content: "The animation capabilities in Fewzon are outstanding. We've created interactive experiences for our clients that would have required specialized developers before. Now our design team handles it all in-house.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute left-1/4 top-1/3 w-64 h-64 rounded-full bg-redpill/10 blur-[80px]"></div>
      <div className="absolute right-1/4 bottom-1/3 w-64 h-64 rounded-full bg-bluepill/10 blur-[80px]"></div>

      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" once>
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-4">Testimonials</h2>
          <AnimatedText
            text="Trusted by creators worldwide"
            className="text-4xl md:text-5xl font-bold mb-6"
            once
          />
          <p className="text-white/70">
            See how Fewzon is helping teams and individuals build amazing websites and graphics.
          </p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/10">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-redpill to-bluepill flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white" className="opacity-90">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-lg text-white/80 italic mb-6">{currentTestimonial.content}</p>
                  <div>
                    <p className="font-semibold text-white">{currentTestimonial.name}</p>
                    <p className="text-white/70 text-sm">{currentTestimonial.role}, {currentTestimonial.company}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-end gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -left-4 -translate-y-1/2 md:-left-8">
            <button 
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 md:-right-8">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
