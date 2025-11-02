import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What formats do you accept?",
    answer:
      "We accept photos (JPG, PNG, HEIC), scans (PDF), and even old-school photocopies. As long as the handwriting is legible, we can work with it. Phone photos are perfectly fine—just make sure they're clear and well-lit.",
  },
  {
    question: "How fast is the turnaround?",
    answer:
      "Standard delivery is 24 hours from the time you submit your order. Need it faster? Our rush service delivers in 12 hours for an additional $20. We'll send you a confirmation email with your expected delivery time.",
  },
  {
    question: "What if you make a mistake?",
    answer:
      "We include one round of revisions with every order at no extra cost. If something doesn't match your original notes or needs adjustment, just let us know and we'll fix it promptly. Our accuracy rate is 99.9%, but we're human and committed to getting it perfect.",
  },
  {
    question: "Can you handle complex equations and symbols?",
    answer:
      "Absolutely. We specialize in mathematical notation, including matrices, integrals, Greek letters, specialized symbols, and custom notation. If you've written it by hand, we can LaTeX it.",
  },
  {
    question: "Do you keep my documents private?",
    answer:
      "Yes. We treat your documents with complete confidentiality. Your files are processed securely, never shared with third parties, and permanently deleted from our servers after delivery. We can sign an NDA if required.",
  },
  {
    question: "What's included in the $40 base price?",
    answer:
      "Our $40 flat rate includes: conversion of up to 10 pages of handwritten notes, standard equations and tables, basic hand-drawn diagrams, both LaTeX source files and a compiled PDF, 24-hour delivery, and one round of revisions. Additional pages and services have clearly listed prices.",
  },
  {
    question: "Can you recreate diagrams?",
    answer:
      "Basic diagrams are included in the base price. For complex diagrams requiring TikZ (professional-quality vector graphics), there's an additional $20 charge. We'll assess your diagrams and provide a quote before starting work.",
  },
  {
    question: "What if I have more than 60 pages?",
    answer:
      "For large projects (thesis chapters, entire notebooks, etc.), contact us for custom pricing. We offer volume discounts and can accommodate projects of any size with flexible delivery timelines.",
  },
];

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <section id="faq" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to know</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-bold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:hello@texforge.com"
            className="text-primary hover:text-primary/80 font-semibold underline"
          >
            Contact us directly
          </a>
        </motion.div>
      </div>
    </section>
  );
};
