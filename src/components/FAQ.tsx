import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Typography from "./ui/Typography";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope. Small websites typically take 4-6 weeks, while complex applications can take 3-6 months. We prioritize quality and clear communication throughout.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price project based models and monthly retainer options. We'll work with you to find the structure that best fits your budget and needs.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer various support and maintenance packages to ensure your digital platform remains secure, updated, and high-performing after launch.",
  },
  {
    question: "Can you help with branding and content?",
    answer:
      "Absolutely! Our team includes creative designers and copywriters who can help establish your brand identity and craft compelling messaging for your audience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Typography
              variant="body-xs"
              as="span"
              className="text-primary-500 mb-4 block"
            >
              Help Center
            </Typography>
            <Typography variant="h1" as="h2" className="text-4xl font-bold">
              Frequently Asked{" "}
              <span className="text-primary-500">Questions</span>
            </Typography>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl border transition-all ${
                  openIndex === index
                    ? "bg-background border-primary-500/30 shadow-lg shadow-black/5"
                    : "bg-background/50 border-border hover:border-primary-500/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <Typography variant="h4" as="span">
                    {faq.question}
                  </Typography>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? "bg-primary-500 text-white"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <Typography
                        variant="body"
                        className="p-6 pt-0 text-muted-foreground leading-relaxed"
                      >
                        {faq.answer}
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
