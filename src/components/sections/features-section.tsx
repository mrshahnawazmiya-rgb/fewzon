
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { AnimatedText } from "@/components/animations/animated-text";
import { Check, Zap, Code, Users, Book, Image, ActivitySquare, Share, LineChart, Search, Shield, Sparkles, Globe, MessageCircle, BrainCircuit, FileCode, Palette, BarChart } from "lucide-react";

// Feature category interface
interface FeatureCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  features: Feature[];
}

// Individual feature interface
interface Feature {
  id: string;
  title: string;
  description: string;
}

// Feature data organized by categories
const featureCategories: FeatureCategory[] = [
  {
    id: "website-builder",
    title: "Website Builder (Code & No-Code)",
    icon: <Code className="w-6 h-6 text-redpill" />,
    features: [
      { id: "drag-drop", title: "Drag-and-Drop Website Builder", description: "Build websites visually without coding knowledge" },
      { id: "custom-code", title: "Custom Code Support", description: "Add your own HTML, CSS, and JavaScript when needed" },
      { id: "templates", title: "Pre-Built Templates", description: "Start with professionally designed website templates" },
      { id: "responsive", title: "Responsive Design", description: "Automatically optimized for mobile, tablet, and desktop" },
      { id: "media-editor", title: "Media Editor", description: "Easily edit images and media files right in the builder" },
      { id: "preview", title: "Real-Time Preview", description: "See changes instantly as you build your website" }
    ]
  },
  {
    id: "job-hunter",
    title: "Job Hunter",
    icon: <Search className="w-6 h-6 text-bluepill" />,
    features: [
      { id: "scraping", title: "Automatic Job Board Scraping", description: "Find opportunities across multiple platforms automatically" },
      { id: "filters", title: "Advanced Job Filters", description: "Filter by role, location, salary, company, and more" },
      { id: "tracker", title: "Application Tracker", description: "Track your job applications in one organized dashboard" },
      { id: "alerts", title: "Job Alerts", description: "Get notifications for new jobs matching your criteria" }
    ]
  },
  {
    id: "collaboration",
    title: "Collaboration Tools",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    features: [
      { id: "team-projects", title: "Team Projects", description: "Create and manage projects with your team" },
      { id: "real-time", title: "Real-Time Editing", description: "Collaborate on documents and designs simultaneously" },
      { id: "version", title: "Version Control", description: "Track changes and revert to previous versions when needed" },
      { id: "comments", title: "Comments & Annotations", description: "Leave feedback directly on files and designs" },
      { id: "tasks", title: "Task Management", description: "Assign and track tasks with deadlines and priorities" }
    ]
  },
  {
    id: "lms",
    title: "Learning Management System",
    icon: <Book className="w-6 h-6 text-green-400" />,
    features: [
      { id: "course-creation", title: "Course Creation", description: "Build courses with videos, quizzes, and assignments" },
      { id: "progress", title: "Learner Progress Tracking", description: "Monitor student progress and engagement" },
      { id: "certificates", title: "Automated Certificates", description: "Award certificates automatically upon course completion" },
      { id: "discussions", title: "Discussion Boards", description: "Foster community learning with Q&A forums" }
    ]
  },
  {
    id: "graphic-editor",
    title: "Graphic Editor",
    icon: <Image className="w-6 h-6 text-pink-400" />,
    features: [
      { id: "design-tools", title: "Drag-and-Drop Design Tools", description: "Create professional graphics without design experience" },
      { id: "design-templates", title: "Design Templates", description: "Templates for social media, ads, posters, and more" },
      { id: "stock", title: "Stock Image Access", description: "Millions of stock images and vectors at your fingertips" },
      { id: "text", title: "Advanced Text Editing", description: "Customize text with fonts, effects, and animations" },
      { id: "layers", title: "Layer Management", description: "Work with layers for complex graphic designs" }
    ]
  },
  {
    id: "automation",
    title: "Workflow Automation",
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    features: [
      { id: "auto-tasks", title: "Automated Tasks", description: "Automate repetitive tasks like emails and social posts" },
      { id: "triggers", title: "Triggers & Actions", description: "Set up conditional automation workflows" },
      { id: "workflow-templates", title: "Workflow Templates", description: "Pre-built automation templates for common tasks" },
      { id: "api-int", title: "API Integrations", description: "Connect with external tools and services" }
    ]
  },
  {
    id: "social",
    title: "Social Media Management",
    icon: <Share className="w-6 h-6 text-blue-400" />,
    features: [
      { id: "scheduling", title: "Post Scheduling", description: "Schedule posts across multiple social platforms" },
      { id: "inbox", title: "Inbox Management", description: "Manage comments and messages in one place" },
      { id: "analytics", title: "Social Analytics", description: "Track performance with detailed analytics" },
      { id: "calendar", title: "Content Calendar", description: "Visual calendar for planning your social media strategy" }
    ]
  },
  {
    id: "ai-ad",
    title: "AI Ad Generator",
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    features: [
      { id: "gen-ads", title: "AI-Generated Ads", description: "Create ads for Facebook, Google, Instagram with AI" },
      { id: "targeting", title: "Audience Targeting", description: "AI-optimized audience targeting for better results" },
      { id: "ab-testing", title: "A/B Testing", description: "Test multiple ad variations automatically" },
      { id: "ad-analytics", title: "Ad Performance Analytics", description: "Track and analyze your ad campaigns" }
    ]
  },
  {
    id: "ai-content",
    title: "AI Content Generation",
    icon: <FileCode className="w-6 h-6 text-teal-400" />,
    features: [
      { id: "longform", title: "Long-Form Content", description: "Generate blog posts and articles with AI" },
      { id: "summarization", title: "Content Summarization", description: "Automatically shorten and summarize lengthy content" },
      { id: "seo", title: "SEO Optimization", description: "AI-powered SEO recommendations for your content" },
      { id: "ai-images", title: "AI Image Generation", description: "Create custom images with AI for your content" }
    ]
  },
  {
    id: "marketplace",
    title: "Model Marketplace",
    icon: <BrainCircuit className="w-6 h-6 text-purple-500" />,
    features: [
      { id: "buy-sell", title: "Buy & Sell AI Models", description: "Marketplace for AI model exchange" },
      { id: "custom-models", title: "Custom Model Upload", description: "Upload your own models to the marketplace" },
      { id: "ratings", title: "Ratings & Reviews", description: "Community ratings for marketplace models" },
      { id: "model-api", title: "API Integrations", description: "Use models directly in your applications" }
    ]
  },
  {
    id: "branding",
    title: "Customization & Branding",
    icon: <Palette className="w-6 h-6 text-pink-500" />,
    features: [
      { id: "brand-options", title: "Branding Options", description: "Customize with your logo, colors, and theme" },
      { id: "domain", title: "Custom Domain", description: "Use your own domain for your Fewzon projects" },
      { id: "email", title: "Custom Email Addresses", description: "Professional email addresses with your domain" }
    ]
  },
  {
    id: "security",
    title: "Security & Compliance",
    icon: <Shield className="w-6 h-6 text-green-500" />,
    features: [
      { id: "encryption", title: "Data Encryption", description: "Enterprise-grade security for your data" },
      { id: "2fa", title: "Two-Factor Authentication", description: "Extra layer of account security" },
      { id: "gdpr", title: "GDPR Compliance", description: "Full compliance with data privacy regulations" },
      { id: "backup", title: "Backup & Recovery", description: "Automated backups and easy recovery options" }
    ]
  },
  {
    id: "courses",
    title: "Course Marketplace",
    icon: <Book className="w-6 h-6 text-orange-400" />,
    features: [
      { id: "sell-courses", title: "Create & Sell Courses", description: "Build and monetize your knowledge" },
      { id: "course-builder", title: "Advanced Course Builder", description: "Easy-to-use tools for course creation" },
      { id: "pricing-models", title: "Flexible Pricing", description: "Offer one-time purchases or subscriptions" },
      { id: "revenue", title: "Revenue Sharing", description: "Earn money through the Fewzon marketplace" },
      { id: "drip", title: "Drip Content", description: "Release course content on a schedule" }
    ]
  },
  {
    id: "templates",
    title: "Template Marketplace",
    icon: <ActivitySquare className="w-6 h-6 text-blue-500" />,
    features: [
      { id: "sell-templates", title: "Sell Templates", description: "Create and sell website templates and designs" },
      { id: "template-marketplace", title: "Template Marketplace", description: "Browse and purchase premium templates" },
      { id: "template-types", title: "Variety of Templates", description: "Templates for businesses, portfolios, landing pages" },
      { id: "customize", title: "Customization Options", description: "Easy template customization for buyers" }
    ]
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    icon: <BarChart className="w-6 h-6 text-indigo-400" />,
    features: [
      { id: "dashboard", title: "Centralized Dashboard", description: "All your metrics in one place" },
      { id: "tracking", title: "Comprehensive Metrics", description: "Track website, social, and ad performance" },
      { id: "custom-reports", title: "Custom Reports", description: "Generate and download custom analytics reports" }
    ]
  },
  {
    id: "support",
    title: "Support & Help Center",
    icon: <MessageCircle className="w-6 h-6 text-teal-500" />,
    features: [
      { id: "live-chat", title: "Live Chat Support", description: "Get help when you need it" },
      { id: "knowledge", title: "Knowledge Base", description: "Comprehensive documentation and guides" },
      { id: "tutorials", title: "Video Tutorials", description: "Step-by-step tutorials for all features" }
    ]
  }
];

export function FeaturesSection() {
  const [activeCategory, setActiveCategory] = useState<string>(featureCategories[0].id);

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-redpill/20 blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-bluepill/20 blur-[100px] animate-pulse-glow"></div>
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16" once>
          <h2 className="text-sm uppercase tracking-wider text-white/50 mb-4">Features</h2>
          <AnimatedText
            text="Everything you need to build and grow"
            className="text-4xl md:text-5xl font-bold mb-6"
            once
          />
          <p className="text-white/70 mb-10">
            Fewzon combines all the tools you need into one powerful platform. From website building to AI-powered content generation, we've got you covered.
          </p>
        </FadeIn>

        {/* Category selector */}
        <div className="mb-12 overflow-hidden">
          <div className="scrollbar-none flex gap-2 pb-4 overflow-x-auto">
            {featureCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-white/10 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white/80"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {category.icon}
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feature details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories
            .find(category => category.id === activeCategory)?.features
            .map((feature, index) => (
              <FadeIn key={feature.id} delay={index * 0.1} once>
                <motion.div 
                  className="h-full p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-white/70 mb-4 flex-grow">{feature.description}</p>
                    <div className="flex items-center text-sm text-white/50">
                      <Check className="w-4 h-4 mr-2 text-green-400" />
                      <span>Included in {activeCategory === "website-builder" || activeCategory === "graphic-editor" ? "Red Pill" : "Blue Pill"}</span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
        </div>

        <FadeIn delay={0.5} className="flex justify-center mt-12" once>
          <motion.a 
            href="#pricing" 
            className="px-8 py-3 rounded-full bg-gradient-to-r from-redpill to-bluepill text-white font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            See all features in pricing
          </motion.a>
        </FadeIn>
      </Container>
    </section>
  );
}
