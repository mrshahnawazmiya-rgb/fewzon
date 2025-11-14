import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import cmo from "@/assets/safikul alam.jpeg"
import ceo from "@/assets/subster paudel.jpeg"
import cto from "@/assets/AAA.png"
import app from "@/assets/shahnawaz alam.jpeg"

const team = [
  
  {
    name: "Shahanawaz Alam",
    role: "COO",
    bio: "Engineering leader from Silicon Valley",
    image: app
  },
  {
    name: "Abhaya Gautam",
    role: "CTO",
    bio: "Award-winning brand & product designer",
    image: cto
  },
  {
    name: "Safikul Alam",
    role: "CMO",
    bio: "Full-stack expert with 12+ years experience",
    image: cmo
  },
  {
    name: "Subster Paudel",
    role: "CEO",
    bio: "15+ years in UI/UX, leading design innovation",
    image: ceo  // ✅ use the imported variable
  },
 ];

export function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="team" className="py-24 relative overflow-hidden">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" once>
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Our Team</h2>
          <AnimatedText
            text="Meet the people behind Fewzon"
            className="text-4xl md:text-5xl font-bold mb-6"
            once
          />
          <p className="text-muted-foreground">
            Passionate experts making creation accessible to everyone.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {team.map((member, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <motion.div 
                    className="rounded-2xl bg-card border border-border p-6 text-center h-full"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                    <div className="flex justify-center gap-3">
                      <a 
                        href="#" 
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href="#" 
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:bg-secondary transition-colors shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:bg-secondary transition-colors shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </Container>
    </section>
  );
}
