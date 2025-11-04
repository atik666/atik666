import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CV = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Curriculum Vitae</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Download my complete CV or view the highlights below
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://scholar.google.com/citations?user=tHtILuYAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Google Scholar
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Education */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">PhD in Electrical and Computer Engineering</h3>
                      <p className="text-muted-foreground">Rowan University, New Jersey</p>
                    </div>
                    <Badge>Sep 2023 – Mar 2026</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">CGPA: 3.65/4.0</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">PhD in Electrical and Computer Engineering</h3>
                      <p className="text-muted-foreground">Oklahoma State University (Transferred to Rowan)</p>
                    </div>
                    <Badge>Jan 2022 – Aug 2023</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">CGPA: 3.65/4.0</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">MS in Engineering</h3>
                      <p className="text-muted-foreground">University Malaysia Pahang, Malaysia</p>
                    </div>
                    <Badge>Dec 2019 – Dec 2021</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">MS by Research</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">BSc in Electrical and Electronic Engineering</h3>
                      <p className="text-muted-foreground">Pabna University of Science & Technology, Bangladesh</p>
                    </div>
                    <Badge>Jan 2012 – May 2017</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">CGPA: 3.28/4.0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research Interests */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Predictive Modeling",
                  "Meta-Learning",
                  "Multi-Modal Learning",
                  "Vision-Language Models",
                  "Wireless Communications",
                  "Semi-Supervised Learning",
                  "Transformers",
                  "Foundation Models",
                  "Signal Processing",
                ].map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Selected Publications */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Selected Publications</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">
                    DenoMAE2.0: Improving Denoising Masked Autoencoders by Classifying Local Patches
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    IEEE Transactions on Communications, 2025
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    DenoMAE: A Multimodal Autoencoder for Denoising Modulation Signals
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    IEEE Communications Letters, 2025
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    MetaRep: Improving Meta-Learning Accuracy by Learning Episodic Representation
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    International Journal of Machine Learning and Cybernetics, 2025 (Accepted)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    NMformer: A Transformer for Noisy Modulation Classification
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    IEEE WOCC 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Glassboro, New Jersey</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:faysal24@rowan.edu" className="font-medium text-primary hover:underline">
                    faysal24@rowan.edu
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:856-526-3003" className="font-medium">
                    856-526-3003
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Links</p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/atik666"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/atik-faysal-64b809132/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://scholar.google.com/citations?user=tHtILuYAAAAJ&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      Scholar
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CV;
