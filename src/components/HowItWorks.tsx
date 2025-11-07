import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    icon: Upload,
    title: "Submit Your Notes",
    description:
      "Upload photos or scans of your handwritten documents. Any format works—phone photos, scans, even old notebooks.",
  },
  {
    number: 2,
    icon: Zap,
    title: "We Convert",
    description:
      "Our experts OCR, transcribe, and polish. ML notes? We code your plots in SciKit-Learn. Sample in 2 hours.",
  },
  {
    number: 3,
    icon: Download,
    title: "Receive Perfect Documents",
    description:
      "Get both the LaTeX source files and a compiled PDF within 24 hours. Ready to use for papers, theses, or publications.",
  },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="how-it-works" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Simple process, perfect results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-primary"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 relative z-10 shadow-lg"
                  >
                    <span className="text-white font-heading font-bold text-xl">{step.number}</span>
                  </motion.div>
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primary mx-auto" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h4 className="text-2xl font-heading font-bold mb-4">Ready to get started?</h4>
          <p className="text-muted-foreground mb-6">Get in touch to discuss your project</p>
          <Button 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSebwjUELnnVdSWC0luwZ5crHJJgybJ41MyJAALyi7UTIrx2jA/viewform?usp=header', '_blank')}
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
