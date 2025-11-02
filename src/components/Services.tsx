import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

const coreService = {
  title: "Core Service",
  price: "$40",
  description: "Everything you need for perfect LaTeX conversion",
  features: [
    "Handwritten notes → LaTeX source files",
    "Standard equations and symbols",
    "Tables and lists",
    "Basic diagrams (hand-drawn)",
    "PDF output (compiled)",
    "24-hour turnaround",
    "One round of revisions included",
  ],
  highlight: true,
};

const addOns = [
  {
    title: "Rush Delivery",
    price: "+$20",
    description: "12-hour turnaround",
  },
  {
    title: "TikZ Graphics",
    price: "+$20",
    description: "Professional diagram recreation",
  },
  {
    title: "Bibliography Setup",
    price: "+$15",
    description: "BibTeX formatting and integration",
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional LaTeX conversion tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 border-2 border-gold relative overflow-hidden h-full animate-pulse-glow">
              <div className="absolute top-4 right-4">
                <span className="bg-gold text-gold-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-3xl font-heading font-bold mb-2">{coreService.title}</h3>
              <div className="mb-4">
                <span className="text-5xl font-heading font-bold text-gradient">
                  {coreService.price}
                </span>
                <span className="text-muted-foreground ml-2">flat rate</span>
              </div>
              <p className="text-muted-foreground mb-6">{coreService.description}</p>
              <div className="space-y-3">
                {coreService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="space-y-4">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 border border-primary hover:border-primary/80 transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-start gap-3 mb-3">
                    <Plus className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-heading font-bold mb-1">{addon.title}</h4>
                      <p className="text-2xl font-bold text-accent">{addon.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-card p-8 rounded-xl border border-border"
        >
          <h3 className="text-2xl font-heading font-bold mb-6 text-center">
            Before & After Example
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/20 text-destructive flex items-center justify-center text-sm font-bold">
                  ✗
                </span>
                Before: Handwritten
              </h4>
              <div className="bg-muted p-6 rounded-lg min-h-[200px] flex items-center justify-center">
                <p className="text-muted-foreground italic text-center">
                  Messy handwritten notes with crossed-out sections, unclear symbols, and inconsistent formatting
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                After: LaTeX
              </h4>
              <div className="bg-primary/5 p-6 rounded-lg min-h-[200px] border border-primary/20">
                <code className="text-sm font-mono">
                  \documentclass{"{article}"}<br />
                  \begin{"{document}"}<br />
                  \section{"{Quantum Mechanics}"}<br />
                  $\hat{"{H}"}\psi = E\psi$<br />
                  \end{"{document}"}
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
