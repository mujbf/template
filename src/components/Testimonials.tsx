import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Typography from "./ui/Typography";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content:
      "Working with Magic Unbound was a game-changer for our brand. Their attention to detail and innovative approach exceeded our expectations.",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content:
      "The level of professionalism and technical expertise they brought to our project was outstanding. Highly recommend their services.",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Founder of Bloom",
    content:
      "They really understood our vision and translated it into a beautiful digital experience that our customers love.",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Typography
            variant="body-xs"
            as="span"
            className="text-primary-500 mb-4 block"
          >
            Testimonials
          </Typography>
          <Typography variant="h1" as="h2">
            What Our <span className="text-primary-500">Clients Say</span>
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2rem] bg-background border border-border shadow-soft relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-500/10" />

              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <Typography
                variant="body-lg"
                className="italic text-muted-foreground mb-8 relative z-10"
              >
                "{t.content}"
              </Typography>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-primary-500/20"
                />
                <div>
                  <Typography variant="h4" as="h4" className="!text-foreground">
                    {t.name}
                  </Typography>
                  <Typography
                    variant="body-xs"
                    className="!text-muted-foreground"
                  >
                    {t.role}
                  </Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
