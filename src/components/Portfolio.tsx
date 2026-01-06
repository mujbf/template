import { motion } from "framer-motion";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const projects = [
  {
    title: "E-commerce Redesign",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Branding for Startups",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mobile App for Health",
    category: "App Development",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Identity",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Digital Campaign",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Data Dashboard",
    category: "Web App",
    image:
      "https://images.unsplash.com/photo-1551288049-bbbda5366391?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Typography
              variant="body-xs"
              as="span"
              className="text-primary-500 mb-4 block"
            >
              Our Work
            </Typography>
            <Typography variant="h1" as="h2" className="leading-tight">
              Featured <span className="text-primary-500">Projects</span>
            </Typography>
          </div>
          <div className="flex gap-4">
            <Button variant="primary" size="sm" className="rounded-full">
              All
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Design
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              Web
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 shadow-lg shadow-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <Typography
                    variant="body-xs"
                    className="!text-primary-400 mb-2"
                  >
                    {project.category}
                  </Typography>
                  <Typography variant="h3" as="h3" className="text-white">
                    {project.title}
                  </Typography>
                </div>
              </div>
              <div className="md:hidden lg:block group-hover:translate-x-2 transition-transform">
                <Typography variant="body-xs" className="text-primary-500 mb-1">
                  {project.category}
                </Typography>
                <Typography
                  variant="h4"
                  as="h3"
                  className="group-hover:text-primary-500 transition-colors"
                >
                  {project.title}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
