import { motion } from "framer-motion";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const posts = [
  {
    title: "10 Trends in Modern Web Design",
    excerpt:
      "Discover the latest trends that are shaping the future of digital experiences in 2024.",
    date: "Dec 28, 2023",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Design",
  },
  {
    title: "Optimizing React Performance",
    excerpt:
      "Learn how to build lightning-fast web applications with our advanced React optimization tips.",
    date: "Dec 20, 2023",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Development",
  },
  {
    title: "The Power of Minimalist Branding",
    excerpt:
      "Why less is often more when it comes to building a powerful and memorable brand identity.",
    date: "Dec 15, 2023",
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Branding",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Typography
              variant="body-xs"
              as="span"
              className="text-primary-500 mb-4 block"
            >
              Latest News
            </Typography>
            <Typography variant="h1" as="h2">
              Insights & <span className="text-primary-500">Articles</span>
            </Typography>
          </div>
          <Button variant="ghost" className="!text-primary-500 hover:underline">
            View All Posts
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-[2.5rem] overflow-hidden mb-6 aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary-500/10 text-primary-500 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <Typography variant="body-sm" as="span" className="font-medium">
                  {post.date}
                </Typography>
              </div>
              <Typography
                variant="h3"
                as="h3"
                className="mb-4 group-hover:text-primary-500 transition-colors"
              >
                {post.title}
              </Typography>
              <Typography variant="body" className="mb-6 line-clamp-2">
                {post.excerpt}
              </Typography>
              <Button
                variant="ghost"
                size="sm"
                className="!px-0 font-bold border-b-2 border-primary-500 !rounded-none pb-1 hover:border-foreground transition-colors"
                href="#"
              >
                Read Article
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
