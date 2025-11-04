import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, Users } from "lucide-react";

const Teaching = () => {
  const experiences = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      role: "Graduate Research Assistant",
      institution: "Rowan University",
      location: "Glassboro, NJ",
      period: "Sep 2023 – Present",
      description: "Leading research on foundation models for time-series analysis in wireless communications, developing transformer-based architectures and self-supervised learning approaches.",
      achievements: [
        "Published 3+ papers in IEEE journals and conferences",
        "Built transformer models from scratch using PyTorch",
        "Implemented multi-GPU training pipelines",
        "Developed LLM-based in-context learning systems",
      ],
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      role: "Graduate Research Assistant",
      institution: "Oklahoma State University",
      location: "Stillwater, OK",
      period: "Jan 2022 – Aug 2023",
      description: "Conducted research on semi-supervised learning for image classification and meta-learning approaches for few-shot scenarios.",
      achievements: [
        "Developed MetaRep algorithm improving accuracy by 9%",
        "Implemented self-supervised representation learning",
        "Published BEpiC framework at WOCC 2024",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      role: "AI Consultant",
      institution: "Self-Employed",
      location: "Remote",
      period: "Jan 2023 – Sep 2023",
      description: "Provided AI consulting services to clients in computer vision, natural language processing, and time-series forecasting.",
      achievements: [
        "Implemented custom DataLoader for 3D array datasets",
        "Optimized model architectures for client requirements",
        "Delivered production-ready ML solutions",
      ],
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      role: "Graduate Research Assistant",
      institution: "Universiti Malaysia Pahang",
      location: "Pahang, Malaysia",
      period: "Dec 2019 – Dec 2021",
      description: "Researched ensemble EMD-based approaches for industrial fault diagnosis and vibration analysis.",
      achievements: [
        "Published 4 papers in international journals",
        "Developed scalogram analysis pipelines",
        "Applied ML to rotating machinery fault detection",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      role: "AI Engineer",
      institution: "BD Group, Inc.",
      location: "Dhaka, Bangladesh",
      period: "Jan 2019 – Nov 2019",
      description: "Developed computer vision solutions for industrial applications including crack detection and defect classification.",
      achievements: [
        "Built crack detection system using CNNs",
        "Implemented real-time inference pipelines",
        "Deployed models for production use",
      ],
    },
  ];

  const skills = {
    "Machine Learning": [
      "Deep Learning",
      "Semi-Supervised Learning",
      "Meta-Learning",
      "Transfer Learning",
      "Few-Shot Learning",
      "Self-Supervised Learning",
    ],
    "Technical Skills": [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Multi-GPU Training",
      "Model Optimization",
      "Custom DataLoaders",
    ],
    "Research Areas": [
      "Transformers",
      "Foundation Models",
      "Computer Vision",
      "Signal Processing",
      "Wireless Communications",
      "Time-Series Analysis",
    ],
    "Tools & Platforms": [
      "Python",
      "GCP",
      "LangChain",
      "Git",
      "Linux",
      "MATLAB",
    ],
  };

  const awards = [
    "PhD Student, CGPA 3.65/4.0 (Rowan University)",
    "MS by Research in Engineering (Universiti Malaysia Pahang)",
    "Multiple IEEE journal publications",
    "Conference presentations at WOCC 2024 and 2025",
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Teaching & Experience</h1>
          <p className="text-lg text-muted-foreground">
            6+ years of research and industry experience in machine learning, 
            with a focus on developing practical solutions and mentoring students.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{exp.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                        <CardTitle className="text-2xl">{exp.role}</CardTitle>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        {exp.institution} | {exp.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16 bg-secondary/30 rounded-lg p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Awards & Recognition</h2>
          </div>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{award}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
