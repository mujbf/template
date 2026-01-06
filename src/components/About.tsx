import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const About = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-background shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071823991-b9671f903f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our Team"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 -left-10 w-20 h-20 bg-primary-500 rounded-2xl rotate-12 -z-10" />

            <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl shadow-xl z-20 max-w-[240px]">
              <Typography variant="h2" className="text-primary-500 mb-1">
                10+ Years
              </Typography>
              <Typography variant="body-sm" className="font-medium">
                Of industry experience delivering excellence
              </Typography>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body-xs"
              as="span"
              className="text-primary-500 mb-4 block"
            >
              Our Story
            </Typography>
            <Typography variant="h1" as="h2" className="mb-8 leading-tight">
              We're a Team of{" "}
              <span className="text-primary-500">Passionate</span> Creatives and
              Developers
            </Typography>
            <Typography variant="body-lg" className="mb-8">
              Founded in 2014, Magic Unbound started with a simple mission: to
              bridge the gap between complex technology and meaningful user
              experiences. Today, we help brands across the globe navigate the
              digital landscape with confidence.
            </Typography>

            <div className="space-y-4 mb-10">
              {[
                "Innovation at the core of every project",
                "User-centric design methodology",
                "Scalable and maintainable codebases",
                "Transparent communication & collaboration",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary-500" />
                  <Typography
                    variant="body"
                    as="span"
                    className="font-medium text-foreground/80"
                  >
                    {item}
                  </Typography>
                </div>
              ))}
            </div>

            <Button
              variant="primary"
              size="lg"
              className="bg-foreground text-background dark:bg-white dark:text-black hover:opacity-90"
            >
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
