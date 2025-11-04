import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Publications = () => {
  const journals = [
    {
      title: "DenoMAE2.0: Improving Denoising Masked Autoencoders by Classifying Local Patches",
      authors: "A. Faysal, M. Rostami, T. Boushine, R. Roshan, N. Muralidhar and H. Wang",
      venue: "IEEE Transactions on Communications",
      year: "2025",
      doi: "https://doi.org/10.1109/TCOMM.2025.3626031",
      status: "Published",
    },
    {
      title: "MetaRep: Improving Meta-Learning Accuracy by Learning Episodic Representation",
      authors: "A. Faysal, M. Rostami, H. Wang, A. Sahoo and R. Antle",
      venue: "International Journal of Machine Learning and Cybernetics",
      year: "2025",
      status: "Accepted",
    },
    {
      title: "DenoMAE: A Multimodal Autoencoder for Denoising Modulation Signals",
      authors: "A. Faysal, T. Boushine, M. Rostami, R. Roshan, H. Wang, and N. Muralidhar",
      venue: "IEEE Communications Letters",
      year: "2025",
      doi: "https://doi.org/10.1109/LCOMM.2025.3570602",
      status: "Published",
    },
    {
      title: "Noise Eliminated Ensemble Empirical Mode Decomposition Scalogram Analysis for Rotating Machinery Fault Diagnosis",
      authors: "A. Faysal, W.K. Ngui, M.H. Lim, and M.S.",
      venue: "Sensors",
      year: "2021",
      doi: "https://doi.org/10.3390/s21238114",
      status: "Published",
    },
    {
      title: "Noise Eliminated Ensemble Empirical Mode Decomposition for Bearing Fault Diagnosis",
      authors: "A. Faysal, W.K. Ngui, and M.H. Lim, and M.S.",
      venue: "Journal of Vibration Engineering & Technologies",
      year: "2021",
      doi: "https://doi.org/10.1007/s42417-021-00358-y",
      status: "Published",
    },
    {
      title: "Ensemble Augmentation for Deep Neural Networks Using 1D Time Series Vibration Data",
      authors: "A. Faysal, W.K. Ngui, M.H. Lim",
      venue: "Journal of Vibration Engineering & Technologies",
      year: "2022",
      doi: "https://doi.org/10.1007/s42417-022-00683-w",
      status: "Published",
    },
  ];

  const conferences = [
    {
      title: "Plug-and-Play AMC: Context Is King in Training-Free, Open-Set Modulation with LLMs",
      authors: "M. Rostami, A. Faysal, R. G. Roshan, H. Wang, N. Muralidhar and Y. -D. Yao",
      venue: "2025 IEEE 34th Wireless and Optical Communications Conference (WOCC)",
      location: "Taipa, Macao",
      year: "2025",
      pages: "345-350",
      doi: "https://ieeexplore.ieee.org/document/11082201",
    },
    {
      title: "NMformer: A Transformer for Noisy Modulation Classification in Wireless Communication",
      authors: "A Faysal, M. Rostami, R. G. Roshan, H. Wang and N. Muralidhar",
      venue: "2024 33rd Wireless and Optical Communications Conference (WOCC)",
      location: "Hsinchu, Taiwan",
      year: "2024",
      pages: "103-108",
      doi: "https://ieeexplore.ieee.org/abstract/document/10786062",
    },
    {
      title: "BEpiC: Binary Episodes for Meta-Learning Towards Better Generalization",
      authors: "A Faysal, M. Rostami, H. Wang, A. Sahoo and R. Antle",
      venue: "2024 33rd Wireless and Optical Communications Conference (WOCC)",
      location: "Hsinchu, Taiwan",
      year: "2024",
      pages: "97-102",
      doi: "https://ieeexplore.ieee.org/abstract/document/10786052",
    },
    {
      title: "Leak diagnosis of pipeline based on empirical mode decomposition and support vector machine",
      authors: "A Faysal, M S N A Adhreena, E Vorathin, Z M Hafizi and W K Ngui",
      venue: "2021 IOP Conference Series: Materials Science and Engineering",
      year: "2021",
      doi: "https://doi.org/10.1088/1757-899X/1078/1/012023",
    },
  ];

  const underReview = [
    {
      title: "DiSC-AMC: Token- and Parameter-Efficient Discretized Statistics In-Context Automatic Modulation Classification",
      authors: "A. Faysal, M. Rostami, et al.",
      venue: "IEEE Communications Letters",
      status: "Under Review",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Publications</h1>
          <p className="text-lg text-muted-foreground mb-6">
            My research has been published in leading IEEE journals and conferences, focusing on 
            machine learning, wireless communications, and signal processing.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://scholar.google.com/citations?user=tHtILuYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <BookOpen className="h-4 w-4" />
              Google Scholar Profile
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Journal Publications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Journal Publications</h2>
          </div>
          <div className="space-y-6">
            {journals.map((pub, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                      <CardDescription className="text-base">
                        {pub.authors}
                      </CardDescription>
                    </div>
                    <Badge variant={pub.status === "Published" ? "default" : "secondary"}>
                      {pub.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    <span className="font-medium">{pub.venue}</span> ({pub.year})
                  </p>
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      View Publication
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Separator className="my-16" />

        {/* Conference Publications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Conference Publications</h2>
          </div>
          <div className="space-y-6">
            {conferences.map((pub, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                  <CardDescription className="text-base">
                    {pub.authors}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    <span className="font-medium">{pub.venue}</span>
                    {pub.location && `, ${pub.location}`} ({pub.year})
                  </p>
                  {pub.pages && (
                    <p className="text-sm text-muted-foreground mb-3">
                      Pages: {pub.pages}
                    </p>
                  )}
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                    >
                      View Publication
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Under Review */}
        {underReview.length > 0 && (
          <>
            <Separator className="my-16" />
            <div>
              <h2 className="text-3xl font-bold mb-8">Under Review</h2>
              <div className="space-y-6">
                {underReview.map((pub, index) => (
                  <Card key={index} className="border-dashed">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{pub.title}</CardTitle>
                          <CardDescription className="text-base">
                            {pub.authors}
                          </CardDescription>
                        </div>
                        <Badge variant="outline">{pub.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        <span className="font-medium">{pub.venue}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Publications;
