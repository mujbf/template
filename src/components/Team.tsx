import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import Typography from "./ui/Typography";

const members = [
  {
    name: "Alex Thompson",
    role: "Lead Designer",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Visual storyteller with 8+ years experience in digital branding.",
  },
  {
    name: "Sofia Rodriguez",
    role: "Senior Developer",
    image: "https://i.pravatar.cc/300?img=20",
    bio: "Full-stack wizard specialized in React and Node.js ecosystems.",
  },
  {
    name: "James Wilson",
    role: "Marketing Strategist",
    image: "https://i.pravatar.cc/300?img=33",
    bio: "Data-driven marketer focused on sustainable growth patterns.",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Typography
            variant="body-xs"
            as="span"
            className="text-primary-500 mb-4 block"
          >
            Our Experts
          </Typography>
          <Typography variant="h1" as="h2">
            Meet the <span className="text-primary-500">A-Team</span>
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-8 mx-auto w-48 h-48 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-primary-500/20 rounded-[3rem] rotate-6 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 bg-primary-500 rounded-[3rem] -rotate-3 group-hover:-rotate-6 transition-transform overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 p-3 bg-background rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary-500 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary-500 cursor-pointer" />
                  <Github className="w-5 h-5 text-muted-foreground hover:text-primary-500 cursor-pointer" />
                </div>
              </div>
              <Typography variant="h3" className="mb-1">
                {member.name}
              </Typography>
              <Typography
                variant="body-xs"
                className="text-primary-500 mb-4 tracking-widest"
              >
                {member.role}
              </Typography>
              <Typography variant="body" className="max-w-xs mx-auto mb-6">
                {member.bio}
              </Typography>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
