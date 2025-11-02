import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: 40,
    description: "Perfect for individual assignments",
    features: [
      "Up to 10 pages",
      "24-hour turnaround",
      "Basic equations & tables",
      "PDF + LaTeX source",
      "One revision round",
    ],
    popular: true,
  },
  {
    name: "Professional",
    price: 75,
    description: "Ideal for complete problem sets",
    features: [
      "Up to 25 pages",
      "24-hour turnaround",
      "Complex equations & diagrams",
      "PDF + LaTeX source",
      "Two revision rounds",
      "Priority support",
    ],
    popular: false,
  },
  {
    name: "Academic",
    price: 150,
    description: "For thesis chapters & papers",
    features: [
      "Up to 60 pages",
      "48-hour turnaround",
      "Advanced formatting",
      "Bibliography setup",
      "Unlimited revisions",
      "Dedicated support",
      "Rush delivery available",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [animatedPrices, setAnimatedPrices] = useState<number[]>([0, 0, 0]);

  useEffect(() => {
    if (isInView) {
      pricingTiers.forEach((tier, index) => {
        let currentPrice = 0;
        const increment = tier.price / 20;
        const interval = setInterval(() => {
          currentPrice += increment;
          if (currentPrice >= tier.price) {
            currentPrice = tier.price;
            clearInterval(interval);
          }
          setAnimatedPrices((prev) => {
            const newPrices = [...prev];
            newPrices[index] = Math.floor(currentPrice);
            return newPrices;
          });
        }, 50);
      });
    }
  }, [isInView]);

  return (
    <section id="pricing" className="py-20 bg-muted/30 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg">Choose the plan that fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${tier.popular ? "md:-mt-4" : ""}`}
            >
              <div
                className={`glassmorphism rounded-2xl p-8 h-full flex flex-col ${
                  tier.popular ? "animate-pulse-glow border-2 border-gold" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gold text-gold-foreground px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-heading font-bold text-gradient">
                      ${animatedPrices[index]}
                    </span>
                    <span className="text-muted-foreground">flat rate</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + featureIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  } cursor-glow`}
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl border border-accent/50 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="font-heading font-bold text-xl mb-1">Bulk Discount Available</h4>
              <p className="text-sm text-muted-foreground">
                Need more than 60 pages? Contact us for custom pricing
              </p>
            </div>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
