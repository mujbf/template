import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Megaphone,
  LineChart,
  Globe2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const services = [
  {
    title: "Web Development",
    description:
      "Custom, high-performance websites built with the latest technologies.",
    icon: <Code2 className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centric designs that are beautiful, intuitive, and conversion-focused.",
    icon: <Palette className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "Digital Marketing",
    description:
      "Multi-channel campaigns designed to grow your brand and reach.",
    icon: <Megaphone className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "Data Analytics",
    description:
      "Advanced insights to help you make informed business decisions.",
    icon: <LineChart className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure for your applications.",
    icon: <Globe2 className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "Cyber Security",
    description:
      "Comprehensive security audits and protection for your digital assets.",
    icon: <ShieldCheck className="w-10 h-10" />,
    link: "#",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Typography
              variant="body-xs"
              as="span"
              className="text-primary-500 mb-4 block"
            >
              Our Services
            </Typography>
            <Typography variant="h1" as="h2" className="leading-tight">
              Comprehensive Solutions for Your{" "}
              <span className="text-primary-500">Digital Needs</span>
            </Typography>
          </div>
          <Button variant="outline" size="lg" className="whitespace-nowrap">
            View All Services
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-background border border-border hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-700">
                {service.icon}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-8 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <Typography variant="h3" as="h3" className="mb-4">
                {service.title}
              </Typography>
              <Typography variant="body" className="mb-8">
                {service.description}
              </Typography>

              <Button
                variant="ghost"
                href={service.link}
                className="!p-0 !text-primary-500 hover:!bg-transparent hover:gap-3 transition-all"
                rightIcon={<ArrowRight size={20} />}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
