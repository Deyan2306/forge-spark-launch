import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate ember particles
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-br from-steel to-secondary overflow-hidden"
    >
      {/* Ember particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: i % 3 === 0 ? "#FFD700" : i % 3 === 1 ? "#FF4500" : "#FF6347",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gold mb-6">
            Ready to Forge Your Success?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Stop wasting time on tedious formatting. Let us transform your handwritten notes into
            professional LaTeX documents while you focus on what matters—your research and studies.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold to-accent text-accent-foreground hover:from-accent hover:to-gold text-xl px-12 py-8 cursor-glow shadow-2xl hover:shadow-gold/50 transition-all duration-300"
            >
              START YOUR PROJECT – $40
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 inline-block"
          >
            <div className="bg-gold/20 border-2 border-gold rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Sparkles className="w-6 h-6 text-gold" />
                <span className="text-gold font-heading font-bold text-lg">Limited Offer</span>
              </div>
              <p className="text-white text-sm">
                First 10 orders this month: <span className="font-bold">FREE TikZ diagrams</span>{" "}
                ($20 value)
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/70 text-sm mt-8"
          >
            Join 500+ satisfied researchers and students
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
