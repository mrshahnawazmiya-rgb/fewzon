
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Alexandra Chen",
    role: "CEO & Founder",
    bio: "Former design lead at TechGiant, Alexandra founded Fewzon with a vision to make professional design accessible to everyone. She has over 15 years of experience in UI/UX and product development.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    links: {
      linkedin: "#",
      twitter: "#",
      website: "#"
    }
  },
  {
    name: "Marcus Johnson",
    role: "CTO",
    bio: "Marcus brings 12+ years of engineering leadership from Silicon Valley startups. He specializes in creating intuitive, high-performance web applications with a focus on user experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    links: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Diana Lopez",
    role: "Head of Design",
    bio: "Award-winning designer with a background in brand identity and digital product design. Diana leads the design team and ensures Fewzon's tools meet the highest standards of usability and aesthetics.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop",
    links: {
      linkedin: "#",
      website: "#"
    }
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-full h-96 bg-gradient-to-b from-black to-transparent z-0"></div>
      
      <Container className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" once>
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-4">Our Team</h2>
          <AnimatedText
            text="Meet the people behind Fewzon"
            className="text-4xl md:text-5xl font-bold mb-6"
            once
          />
          <p className="text-white/70">
            We're a team of designers, engineers, and product thinkers passionate about making creation accessible to everyone.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <FadeIn key={index} delay={index * 0.2} once>
              <motion.div 
                className="rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-6">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className={`text-sm mb-4 ${
                      index === 0 ? "text-redpill" : 
                      index === 1 ? "text-bluepill" : 
                      "text-purple-400"
                    }`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-white/70 mb-6">{member.bio}</p>
                    <div className="flex justify-center gap-4">
                      {member.links.linkedin && (
                        <a 
                          href={member.links.linkedin} 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </a>
                      )}
                      {member.links.twitter && (
                        <a 
                          href={member.links.twitter} 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </a>
                      )}
                      {member.links.website && (
                        <a 
                          href={member.links.website} 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
