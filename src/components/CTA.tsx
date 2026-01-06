import { motion } from "framer-motion";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative z-10 p-12 lg:p-24 rounded-[4rem] bg-gradient-to-br from-primary-600 to-primary-900 text-white text-center shadow-3xl overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-400/20 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Typography
              variant="display-lg"
              as="h2"
              className="text-white mb-8 leading-tight"
            >
              Ready to Scale Your <br />
              Digital Presence?
            </Typography>
            <Typography
              variant="body-xl"
              className="text-white opacity-90 mb-12 max-w-2xl mx-auto font-medium"
            >
              Join 2,000+ businesses that are already growing with our digital
              solutions. Let's create something extraordinary together.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="xl"
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Start a Project
              </Button>
              <Button
                size="xl"
                variant="glass"
                className="text-white border-white/30"
              >
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
