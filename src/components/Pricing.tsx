import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for freelancers and small projects.",
    features: [
      "5 Projects",
      "Basic Analytics",
      "Community Support",
      "1GB Storage",
      "Single User",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "Best for growing businesses and teams.",
    features: [
      "Unlimited Projects",
      "Advanced Analytics",
      "Priority Support",
      "10GB Storage",
      "Up to 5 Users",
      "Custom Domains",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with massive scale.",
    features: [
      "Unlimited Everything",
      "API Access",
      "Dedicated Success Manager",
      "SSO & Security",
      "Custom Contracts",
      "24/7 Phone Support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Typography
            variant="body-xs"
            as="span"
            className="text-primary-500 mb-4 block"
          >
            Pricing Plans
          </Typography>
          <Typography variant="h1" as="h2">
            Simple, Transparent{" "}
            <span className="text-primary-500">Pricing</span>
          </Typography>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[3rem] ${
                plan.popular
                  ? "bg-foreground text-background dark:bg-primary-400/50 dark:text-white scale-105 shadow-2xl shadow-primary-500/20 z-10"
                  : "bg-muted/50 border border-border"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                  Most Popular
                </div>
              )}

              <Typography variant="h3" as="h3" className="text-inherit mb-2">
                {plan.name}
              </Typography>
              <div className="mb-6">
                <Typography
                  variant="display-lg"
                  as="span"
                  className="text-inherit"
                >
                  {plan.price}
                </Typography>
                {plan.price !== "Custom" && (
                  <Typography
                    variant="body-lg"
                    as="span"
                    className="text-inherit opacity-70"
                  >
                    /mo
                  </Typography>
                )}
              </div>
              <Typography
                variant="body"
                className="text-inherit mb-8 opacity-70 leading-relaxed font-medium"
              >
                {plan.description}
              </Typography>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full ${
                        plan.popular ? "bg-background/20" : "bg-primary-500/10"
                      } flex items-center justify-center`}
                    >
                      <Check
                        size={14}
                        className={
                          plan.popular ? "text-white" : "text-primary-500"
                        }
                      />
                    </div>
                    <Typography
                      variant="body-sm"
                      as="span"
                      className="text-inherit font-medium"
                    >
                      {feature}
                    </Typography>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.popular ? "primary" : "secondary"}
                size="lg"
                className={`w-full ${
                  !plan.popular
                    ? "bg-background text-foreground hover:bg-foreground hover:text-background"
                    : ""
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
