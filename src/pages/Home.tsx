import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Cpu, Network, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const highlights = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Machine Learning Expert",
      description: "6+ years of research in semi-supervised learning and deep learning",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Wireless Communications",
      description: "Foundation models and transformers for signal processing",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Academic Excellence",
      description: "PhD candidate at Rowan University, CGPA 3.65/4.0",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Published Researcher",
      description: "Multiple IEEE journal and conference publications",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Atik Faysal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Machine Learning Researcher & PhD Candidate
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specializing in semi-supervised learning, transformers, and AI for wireless communications. 
              Seeking tenure-track faculty positions starting Fall 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/research">
                <Button size="lg" className="w-full sm:w-auto">
                  View Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I have 6+ years of machine learning research experience across academia and industry. 
              Currently completing my PhD at Rowan University (Spring 2026), my research focuses on 
              developing robust and generalizable models for data-scarce and noisy environments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work spans multimodal foundation models, self-supervised learning, and meta-learning 
              pipelines, with applications in image classification, wireless communications, and 
              industrial fault diagnosis. I'm passionate about bridging machine learning and 
              communication systems to improve the resilience, efficiency, and accessibility of 
              wireless technology.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Research Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Research Interests</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Predictive Modeling",
                "Meta-Learning",
                "Multi-Modal Learning",
                "Vision-Language Models",
                "Wireless Communications",
                "Semi-Supervised Learning",
                "Transformers",
                "Foundation Models",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Looking for Collaboration?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              I'm actively seeking tenure-track faculty positions and research collaborations 
              in machine learning and wireless communications.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
