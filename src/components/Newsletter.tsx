import Button from "./ui/Button";
import Typography from "./ui/Typography";

const Newsletter = () => {
  return (
    <section className="py-24 bg-foreground text-background dark:bg-muted/50 dark:text-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div>
            <Typography variant="h2" as="h2" className="text-inherit mb-4">
              Stay Ahead of the Curve
            </Typography>
            <Typography variant="body-lg" className="text-inherit opacity-70">
              Subscribe to our newsletter for the latest digital insights and
              trends.
            </Typography>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md lg:max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-2xl bg-background/10 border border-white/20 text-white dark:text-foreground focus:border-primary-500 outline-none transition-all placeholder:text-white/40 dark:placeholder:text-foreground/40"
            />
            <Button variant="primary" size="lg" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
