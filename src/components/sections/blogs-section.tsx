
import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Launch Your Startup MVP in 30 Days",
    description: "Learn how to quickly build, test, and launch your minimum viable product with Fewzon's tools.",
    author: "Sarah Johnson",
    date: "May 10, 2025",
    category: "Startup",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "10 Skills That Will Make You Irresistible to Employers",
    description: "Discover the most in-demand skills in today's job market and how to develop them effectively.",
    author: "Michael Chen",
    date: "May 8, 2025",
    category: "Career Development",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Future of No-Code Web Development",
    description: "Explore how no-code tools are changing the landscape of web development and what it means for you.",
    author: "Alex Rivera",
    date: "May 5, 2025",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Mastering Design Systems for Scalable Products",
    description: "Build consistent, maintainable design systems that scale with your product growth.",
    author: "Emma Wilson",
    date: "May 3, 2025",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "The Ultimate Guide to User Experience Research",
    description: "Discover proven methods to understand your users and create products they love.",
    author: "David Lee",
    date: "April 28, 2025",
    category: "UX Research",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Building a Successful Remote Team Culture",
    description: "Learn strategies to foster collaboration and productivity in distributed teams.",
    author: "Rachel Green",
    date: "April 25, 2025",
    category: "Management",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
  }
];

export function BlogsSection() {
  return (
    <section id="blogs" className="py-24 relative overflow-hidden bg-black/30">
      <Container>
        <FadeIn className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Insights & Resources</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our latest articles to help you grow your skills, launch your startup, and stay ahead of the curve.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {blogPosts.map((post) => (
            <FadeIn key={post.id} delay={post.id * 0.1} direction="up">
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white/5 border-white/10 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full 
                        ${post.category === "Startup" ? "bg-redpill/80" : 
                          post.category === "Career Development" ? "bg-bluepill/80" : "bg-purple-500/80"}
                        text-white`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                    <CardDescription className="text-white/60 flex items-center text-sm">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-white/80">
                    <p>{post.description}</p>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button variant="ghost" className="text-white/70 hover:text-white group">
                      Read article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10">
            <FileText className="mr-2 h-4 w-4" />
            View all articles
          </Button>
        </div>
      </Container>
    </section>
  );
}
