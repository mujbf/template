import { motion } from "framer-motion";
import Typography from "./ui/Typography";

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Industry Awards" },
  { value: "24/7", label: "Expert Support" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-primary-600 dark:bg-primary-950/20 text-white dark:text-primary-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <Typography
                variant="display-lg"
                as="h3"
                className="text-inherit mb-2 tracking-tighter"
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body-xs"
                className="text-primary-100/70 dark:text-primary-500 tracking-widest"
              >
                {stat.label}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
