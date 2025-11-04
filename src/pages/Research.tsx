import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Radio, Image, TrendingUp } from "lucide-react";

const Research = () => {
  const projects = [
    {
      icon: <Radio className="h-8 w-8 text-primary" />,
      title: "Foundation Models for Time-Series Analysis in Wireless Communications",
      institution: "Rowan University",
      period: "Sep 2023 – Present",
      description: "Developed transformer-based foundation models for prediction, leveraging self-supervised learning and multi-modal signal inputs to enable generalization across diverse conditions with minimal fine-tuning.",
      methodologies: [
        "Masked multimodal autoencoders",
        "LLM-based in-context learning",
        "Denoising transformers",
      ],
      tools: [
        "PyTorch",
        "Multi-GPU training",
        "LangChain",
        "Transformer architectures",
      ],
      impact: [
        "DenoMAE improves accuracy up to 22% in low SNRs",
        "DenoMAE2.0 improves over DenoMAE by 1.1% in modulation classification",
        "NMformer builds foundation models on large datasets",
        "DiSC-AMC enables training-free modulation classification using LLMs",
      ],
    },
    {
      icon: <Image className="h-8 w-8 text-primary" />,
      title: "Semi-Supervised Learning for Image Classification",
      institution: "Rowan University",
      period: "Sep 2023 – Present",
      description: "Developed self-supervised representation learning and consistency regularization based pseudo labeling to improve efficiency for edge devices by reducing the need for large labeled datasets and batch sizes.",
      methodologies: [
        "SimCLR-inspired contrastive learning",
        "BYOL self-supervised learning",
        "FixMatch pseudo labeling",
        "Knowledge distillation",
        "Transfer learning",
      ],
      tools: [
        "ResNet architectures",
        "GCP distributed training",
        "Scikit-Learn",
        "Custom DataLoaders",
      ],
      impact: [
        "MetaRep improves accuracy by 9% on miniImagenet",
        "BEpiC improves few-shot learning performance",
      ],
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Ensemble EMD for Industrial Fault Diagnosis",
      institution: "University Malaysia Pahang",
      period: "Dec 2019 – Dec 2021",
      description: "Built ensemble Empirical Mode Decomposition (EMD) based scalogram pipelines for rotating machinery fault detection, enabling accurate diagnosis with minimal feature engineering.",
      methodologies: [
        "Ensemble EMD",
        "Scalogram analysis",
        "Time-frequency analysis",
        "Support vector machines",
      ],
      tools: [
        "Signal processing libraries",
        "Vibration data analysis",
        "Pattern recognition",
      ],
      impact: [
        "Published in Sensors journal (2021)",
        "Published in J. Vib. Eng. Technol. (2021, 2022)",
      ],
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Meta-Learning for Few-Shot Classification",
      institution: "Oklahoma State University / Rowan University",
      period: "Jan 2022 – Present",
      description: "Proposed BEpiC, an episodic training framework for limited-data scenarios applied to both RF and vision datasets, inspiring subsequent work in pseudo-labeling and task regularization.",
      methodologies: [
        "Episodic training",
        "Meta-learning algorithms",
        "Few-shot learning",
        "Task regularization",
      ],
      tools: [
        "PyTorch",
        "Meta-learning frameworks",
        "Custom episode samplers",
      ],
      impact: [
        "Improved generalization in few-shot scenarios",
        "Published at WOCC 2024",
      ],
    },
  ];

  const futureDirections = [
    {
      title: "Foundation Models for Wireless Communications",
      items: [
        "Pretrain signal models across time, frequency, and IQ domains",
        "Explore contrastive and masked signal modeling strategies",
        "Build generalized representations transferable to diverse tasks",
      ],
    },
    {
      title: "Data-Efficient Learning for Engineering Signals",
      items: [
        "Develop few-shot, semi-supervised, and transfer learning strategies",
        "Leverage cross-domain transfer to mitigate data scarcity",
        "Design GPU-efficient pretraining methods",
      ],
    },
    {
      title: "Collaborative and Interdisciplinary Research",
      items: [
        "Work with faculty and industry partners in telecommunications and defense",
        "Support funding proposals (NSF, DoE, DoD, industry)",
        "Engage with students through mentoring and collaborative research",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
          <p className="text-lg text-muted-foreground">
            My research lies at the intersection of artificial intelligence, signal and image 
            processing, and machine learning, with an emphasis on developing robust and 
            generalizable models for data-scarce and noisy environments.
          </p>
        </div>

        {/* Current Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Current Research Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{project.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.institution} | {project.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">Methodologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.methodologies.map((method) => (
                        <Badge key={method} variant="secondary">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="outline">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Impact</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Research Directions */}
        <div className="bg-secondary/30 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">Future Research Directions</h2>
          <p className="text-muted-foreground mb-8">
            As a faculty member, I aim to extend my expertise while contributing to collaborative 
            projects in wireless communications and applied machine learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureDirections.map((direction, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {direction.title}
                </h3>
                <ul className="space-y-3">
                  {direction.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
