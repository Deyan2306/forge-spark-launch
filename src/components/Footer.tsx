import { motion } from "framer-motion";
import { ArrowUp, Hammer } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Hammer className="w-8 h-8 text-primary grayscale hover:grayscale-0 transition-all" />
            <span className="text-2xl font-heading font-bold">TexForge</span>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-8">
            <a
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <a
              href="mailto:hello@texforge.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </a>
          </nav>

          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} TexForge. All rights reserved.</p>
            <p className="mt-2">
              Forging perfect LaTeX documents, one handwritten note at a time.
            </p>
          </div>
        </div>
      </div>

      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gold text-gold-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110 cursor-pointer z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </footer>
  );
};
