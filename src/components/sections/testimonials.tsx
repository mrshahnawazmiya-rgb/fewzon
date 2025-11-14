
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Container } from "@/components/ui/container";
import { AnimatedText } from "@/components/animations/animated-text";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
    content: "Fewzon has revolutionized how we create landing pages. What used to take weeks now takes hours.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "DesignBuddy",
    content: "As someone with minimal design experience, Fewzon's graphic editor has been a game changer.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "Artify Studio",
    content: "The animation capabilities are outstanding. We've created experiences that would have required specialized developers.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "David Martinez",
    role: "Product Manager",
    company: "InnovateTech",
    content: "The speed at which we can iterate on designs has increased tenfold. Amazing platform!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "UI Designer",
    company: "PixelPerfect",
    content: "Fewzon's design tools are incredibly intuitive. I can bring my ideas to life in minutes.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Robert Taylor",
    role: "CEO",
    company: "StartupHub",
    content: "This platform has been instrumental in launching our company's online presence quickly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Amanda White",
    role: "Content Creator",
    company: "MediaFlow",
    content: "Creating engaging content has never been easier. Fewzon is my go-to tool.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Developer",
    company: "CodeCraft",
    content: "The no-code approach saves us countless development hours. Highly recommend!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Maria Garcia",
    role: "Brand Strategist",
    company: "BrandVision",
    content: "Fewzon helps us maintain brand consistency across all our digital assets effortlessly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Kevin Brown",
    role: "Entrepreneur",
    company: "VentureStart",
    content: "As a solo founder, Fewzon gave me the tools to compete with larger companies.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 11,
    name: "Linda Davis",
    role: "Marketing Lead",
    company: "GrowthLab",
    content: "Campaign creation is now 10x faster. Our team loves the collaboration features.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Thomas Anderson",
    role: "Design Director",
    company: "CreativeMinds",
    content: "The quality of output is impressive. Our clients can't tell it's no-code!",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Sophie Turner",
    role: "E-commerce Manager",
    company: "ShopSmart",
    content: "Building product pages has never been this simple. Sales have increased significantly.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Daniel Kim",
    role: "Tech Lead",
    company: "DevSolutions",
    content: "Fewzon bridges the gap between design and development perfectly. Incredible tool!",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "Rachel Foster",
    role: "Freelance Designer",
    company: "Self-employed",
    content: "I can take on more clients now. Fewzon has doubled my productivity.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "Chris Parker",
    role: "Startup Advisor",
    company: "VentureWise",
    content: "I recommend Fewzon to every startup I work with. It's a must-have tool.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 17,
    name: "Nicole Harris",
    role: "Social Media Manager",
    company: "SocialBuzz",
    content: "Creating social media graphics is now a breeze. Our engagement has skyrocketed!",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 18,
    name: "Brandon Scott",
    role: "Agency Owner",
    company: "DigitalEdge",
    content: "Fewzon has transformed our agency workflow. Clients are thrilled with the turnaround time.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 19,
    name: "Angela Moore",
    role: "UX Researcher",
    company: "UserFirst",
    content: "Rapid prototyping with Fewzon has enhanced our research process tremendously.",
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 20,
    name: "Peter Collins",
    role: "CTO",
    company: "TechForward",
    content: "The platform is robust and scales well. Perfect for enterprise needs.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=256&auto=format&fit=crop"
  },
  {
    id: 21,
    name: "Victoria James",
    role: "Brand Manager",
    company: "LuxeBrands",
    content: "Maintaining our premium brand aesthetic is effortless with Fewzon's tools.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=256&auto=format&fit=crop"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

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

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <motion.div
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{testimonial.name}</h3>
                      <p className="text-sm text-white/60 mb-1">{testimonial.role}</p>
                      <p className="text-xs text-white/40 mb-4">{testimonial.company}</p>
                      <p className="text-white/80 text-sm leading-relaxed flex-grow">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
