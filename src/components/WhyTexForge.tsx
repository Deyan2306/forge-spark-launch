import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Code, Clock, Shield, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Professional Quality",
    description: "Human experts ensure accuracy and proper LaTeX formatting",
  },
  {
    icon: Code,
    title: "Complex Equations",
    description: "Perfect rendering of mathematical notation and symbols",
  },
  {
    icon: Clock,
    title: "24-Hour Turnaround",
    description: "Fast delivery without compromising quality",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your documents are handled with complete confidentiality",
  },
];

const comparisonData = [
  {
    feature: "Accuracy",
    texforge: "99.9% (human-verified)",
    alternative: "~85% (AI-only)",
    why: "Human experts catch nuanced errors that automated tools miss, ensuring publication-ready quality",
  },
  {
    feature: "Complex Equations",
    texforge: "Full support",
    alternative: "Limited",
    why: "We handle advanced mathematical notation, matrices, and specialized symbols with precision",
  },
  {
    feature: "Turnaround Time",
    texforge: "24 hours guaranteed",
    alternative: "Instant but requires fixes",
    why: "One submission, one delivery—no back-and-forth corrections needed",
  },
  {
    feature: "Support",
    texforge: "Dedicated assistance",
    alternative: "Automated/None",
    why: "Real people available to answer questions and accommodate special requests",
  },
];

export const WhyTexForge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="why-texforge" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-gradient">TexForge?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The difference between acceptable and exceptional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-heading font-bold text-center mb-8">
            TexForge vs. Alternatives
          </h3>
          
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left p-4 font-heading">Feature</th>
                  <th className="text-left p-4 font-heading text-primary">TexForge</th>
                  <th className="text-left p-4 font-heading text-muted-foreground">
                    DIY/Free Tools
                  </th>
                  <th className="text-left p-4 font-heading">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="p-4 font-semibold">{row.feature}</td>
                    <td className="p-4 text-primary font-semibold">{row.texforge}</td>
                    <td className="p-4 text-muted-foreground">{row.alternative}</td>
                    <td className="p-4 text-sm">{row.why}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 space-y-3"
              >
                <h4 className="font-heading font-bold text-lg">{row.feature}</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">TexForge</div>
                    <div className="text-primary font-semibold">{row.texforge}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Alternatives</div>
                    <div className="text-muted-foreground">{row.alternative}</div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground border-t border-border pt-2">
                  {row.why}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 className="w-8 h-8 text-accent" />
            <span className="text-4xl font-heading font-bold text-gradient">50,000+</span>
          </div>
          <p className="text-lg text-muted-foreground">Pages processed with precision</p>
        </motion.div>
      </div>
    </section>
  );
};
