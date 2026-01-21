import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto"
        >
          {/* Glass Card Container */}
          <div className="glass p-8 sm:p-12 lg:p-16 rounded-3xl lg:rounded-[3rem] border border-primary-200/20 dark:border-primary-800/20 shadow-2xl overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-400/15 rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Typography
                  variant="body-xs"
                  as="span"
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6"
                >
                  <Sparkles size={14} />
                  Let's Build Something Amazing
                </Typography>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <Typography
                  variant="display-lg"
                  as="h2"
                  className="mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
                >
                  Ready to Scale Your
                  <br className="hidden sm:block" /> Digital Presence?
                </Typography>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <Typography
                  variant="body-lg"
                  className="text-muted-foreground mb-10 max-w-2xl mx-auto"
                >
                  Join 2,000+ businesses that are already growing with our
                  digital solutions. Let's create something extraordinary
                  together.
                </Typography>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  }
                  className="group"
                >
                  Start a Project
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Typography variant="body-sm" className="font-medium">
                    No credit card required
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Typography variant="body-sm" className="font-medium">
                    Free consultation
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Typography variant="body-sm" className="font-medium">
                    Cancel anytime
                  </Typography>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
