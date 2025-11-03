import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const DiscountBanner = () => {
  const [remaining, setRemaining] = useState(47);

  useEffect(() => {
    // Simulate countdown (in real app, fetch from backend)
    const interval = setInterval(() => {
      setRemaining((prev) => Math.max(1, prev - Math.random() > 0.7 ? 1 : 0));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gold via-accent to-gold text-accent-foreground py-2 sm:py-3 px-4 z-50 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
        <span className="text-xs sm:text-sm md:text-base font-bold">
          🔥 LIMITED TIME: Only {remaining} spots left at $30! (was $40) — 25% OFF
        </span>
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
      </div>
    </motion.div>
  );
};
