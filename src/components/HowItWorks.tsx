import { motion } from "framer-motion";
import Typography from "./ui/Typography";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target audience, and competition to build a solid foundation.",
  },
  {
    number: "02",
    title: "Design & prototyping",
    description:
      "Our designers craft stunning, intuitive interfaces that resonate with your brand and delight users.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "We bring designs to life with clean, scalable code and rigorous testing for flawless performance.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support to ensure long-term success and growth.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Typography
            variant="body-xs"
            as="span"
            className="text-primary-500 mb-4 block"
          >
            Process
          </Typography>
          <Typography variant="h1" as="h2">
            How We <span className="text-primary-500">Work</span>
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-border -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center text-2xl font-black mb-8 mx-auto lg:mx-0 shadow-xl shadow-primary-500/30 relative z-10 border-4 border-background">
                {step.number}
              </div>
              <Typography
                variant="h3"
                as="h3"
                className="mb-4 text-center lg:text-left"
              >
                {step.title}
              </Typography>
              <Typography variant="body" className="text-center lg:text-left">
                {step.description}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
