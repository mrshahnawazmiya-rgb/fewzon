import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";
import { BadgeCheck, Linkedin, Twitter, Globe } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  isCEO?: boolean;
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
    bio: "Former design lead at TechGiant, Alexandra founded Fewzon with a vision to make professional design accessible to everyone. She has over 15 years of experience in UI/UX and product development. Under her leadership, Fewzon has grown from a simple idea to a comprehensive platform used by thousands of businesses worldwide.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop",
    isCEO: true,
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
  // Separate CEO from other team members
  const ceo = team.find(member => member.isCEO);
  const otherTeamMembers = team.filter(member => !member.isCEO);

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
        
        {/* CEO Section - Highlighted at the top */}
        {ceo && (
          <FadeIn className="mb-16" once>
            <motion.div 
              className="rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-8">
                <div className="flex justify-center md:justify-start">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/20">
                      <img 
                        src={ceo.image} 
                        alt={ceo.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-redpill/90 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <BadgeCheck className="w-4 h-4 mr-1" /> 
                      Leadership
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-1">{ceo.name}</h3>
                  <p className="text-redpill text-lg mb-4">{ceo.role}</p>
                  <p className="text-white/70 mb-6">{ceo.bio}</p>
                  
                  <div className="flex gap-4">
                    {ceo.links.linkedin && (
                      <motion.a 
                        href={ceo.links.linkedin} 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <Linkedin className="w-5 h-5" />
                      </motion.a>
                    )}
                    {ceo.links.twitter && (
                      <motion.a 
                        href={ceo.links.twitter} 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    )}
                    {ceo.links.website && (
                      <motion.a 
                        href={ceo.links.website} 
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                      >
                        <Globe className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        )}

        {/* Other Team Members */}
        <div className="grid md:grid-cols-3 gap-8">
          {otherTeamMembers.map((member, index) => (
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
                      index === 0 ? "text-bluepill" : "text-purple-400"
                    }`}>
                      {member.role}
                    </p>
                    <p className="text-sm text-white/70 mb-6">{member.bio}</p>
                    <div className="flex justify-center gap-4">
                      {member.links.linkedin && (
                        <motion.a 
                          href={member.links.linkedin} 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          <Linkedin className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.links.twitter && (
                        <motion.a 
                          href={member.links.twitter} 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          <Twitter className="w-4 h-4" />
                        </motion.a>
                      )}
                      {member.links.website && (
                        <motion.a 
                          href={member.links.website} 
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                          <Globe className="w-4 h-4" />
                        </motion.a>
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
