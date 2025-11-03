import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const DiscountBanner = () => {
  const [remaining, setRemaining] = useState(47);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if banner was previously closed
    const wasClosed = localStorage.getItem("discountBannerClosed");
    if (wasClosed === "true") {
      setIsVisible(false);
    }

    // Simulate countdown (in real app, fetch from backend)
    const interval = setInterval(() => {
      setRemaining((prev) => Math.max(1, prev - Math.random() > 0.7 ? 1 : 0));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("discountBannerClosed", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gold via-accent to-gold text-accent-foreground py-2 sm:py-3 px-4 z-50 shadow-lg"
        >
          <div className="container mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center relative">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            <span className="text-xs sm:text-sm md:text-base font-bold">
              🔥 LIMITED TIME: Only {remaining} spots left at $30! (was $40) — 25% OFF
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="absolute right-0 h-8 w-8 hover:bg-accent-foreground/10 text-accent-foreground"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
