import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Globe, Smartphone, Heart } from "lucide-react";
import Typography from "./ui/Typography";

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description:
      "Our solutions are optimized for maximum speed and performance across all devices.",
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure by Design",
    description:
      "Enterprise-grade security protocols to keep your data and users safe at all times.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Analytics Driven",
    description:
      "Gain deep insights into your business with our integrated data visualization tools.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description:
      "Scale your business internationally with multi-language and currency support.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile First",
    description:
      "Responsive designs that look incredible on smartphones, tablets, and desktops.",
    color: "bg-primary-500/10 text-primary-500",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "24/7 Support",
    description:
      "Our dedicated team of experts is always here to help you succeed, day or night.",
    color: "bg-red-500/10 text-red-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="h1" as="h2" className="mb-6">
              Features that Empower{" "}
              <span className="text-primary-500">Growth</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Typography variant="body-lg">
              We provide all the tools you need to build, manage, and scale your
              digital presence effectively.
            </Typography>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-background border border-border shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <Typography variant="h4" as="h3" className="mb-4 text-foreground">
                {feature.title}
              </Typography>
              <Typography variant="body">{feature.description}</Typography>
              <div className="mt-6 flex items-center text-primary-500 font-semibold gap-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Typography
                  variant="body-sm"
                  as="span"
                  className="!text-primary-500 font-bold"
                >
                  Learn more
                </Typography>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
