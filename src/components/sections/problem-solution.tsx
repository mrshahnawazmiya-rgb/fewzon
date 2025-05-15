
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";
import { ParallaxSection } from "@/components/animations/parallax-section";
import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Problem Column */}
          <FadeIn direction="right" once>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-redpill/10 blur-[50px]"></div>
              <div className="relative">
                <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">The Problem</h3>
                <AnimatedText
                  text="Building a website shouldn't be complicated..."
                  className="text-3xl md:text-4xl font-bold mb-6"
                  once
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/70 mb-6">
                    Yet most tools either require coding knowledge or limit your creative freedom with rigid templates. You're often stuck choosing between:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500 mr-4 mt-0.5">
                        ✕
                      </span>
                      <span className="text-white/80">
                        <strong className="text-white">Complex development tools</strong> with steep learning curves
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500 mr-4 mt-0.5">
                        ✕
                      </span>
                      <span className="text-white/80">
                        <strong className="text-white">Simplified builders</strong> that severely limit your design options
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-500 mr-4 mt-0.5">
                        ✕
                      </span>
                      <span className="text-white/80">
                        <strong className="text-white">Disconnected tools</strong> requiring multiple subscriptions and platforms
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Solution Column */}
          <FadeIn direction="left" delay={0.3} once>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-bluepill/10 blur-[50px]"></div>
              <div className="relative">
                <h3 className="text-sm uppercase tracking-wider text-white/50 mb-4">The Solution</h3>
                <AnimatedText
                  text="Fewzon simplifies everything with powerful no-code tools"
                  className="text-3xl md:text-4xl font-bold mb-6"
                  once
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <p className="text-white/70 mb-6">
                    Our comprehensive suite of intuitive tools allows anyone to create professional websites and graphics without writing a single line of code:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500 mr-4 mt-0.5">
                        ✓
                      </span>
                      <span className="text-white/80">
                        <strong className="text-white">Drag-and-drop editor</strong> with pixel-perfect control
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500 mr-4 mt-0.5">
                        ✓
                      </span>
                      <span className="text-white/80">
                        <strong className="text-white">Integrated graphic design tools</strong> for beautiful visuals
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500/20 text-green-500 mr-4 mt-0.5">
                        ✓
                      </span>
                      <span className="text-white/80">
                        <strong className="text-white">All-in-one platform</strong> for websites, graphics, and more
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Feature showcase */}
        <ParallaxSection className="mt-24" speed={-0.2}>
          <div className="relative p-1 rounded-xl bg-gradient-to-r from-redpill to-bluepill">
            <div className="bg-black rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-redpill/20 text-redpill mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Website Builder</h3>
                  <p className="text-white/70">Create responsive, beautiful websites without writing code.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-bluepill/20 text-bluepill mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Graphic Editor</h3>
                  <p className="text-white/70">Professional design tools with intuitive controls and templates.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-500 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Animation Studio</h3>
                  <p className="text-white/70">Bring your designs to life with easy to use animation tools.</p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxSection>
      </Container>
    </section>
  );
}
