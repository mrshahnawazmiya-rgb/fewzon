
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4",
        {
          "bg-black/60 backdrop-blur-lg shadow-lg": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight glow">
            Fewzon
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#solution"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Solution
            </a>
            <a
              href="#testimonials"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#team"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Team
            </a>
            <a
              href="#pricing"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:inline-flex text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-redpill to-bluepill text-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
