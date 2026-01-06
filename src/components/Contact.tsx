import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Typography
              variant="body-xs"
              as="span"
              className="text-primary-500 mb-4 block"
            >
              Get in Touch
            </Typography>
            <Typography variant="h1" as="h2" className="mb-8">
              Let's Build Something{" "}
              <span className="text-primary-500">Great</span>
            </Typography>
            <Typography variant="body-lg" className="mb-12 max-w-md">
              Have a project in mind or just want to chat? We'd love to hear
              from you. Drop us a message and we'll get back to you within 24
              hours.
            </Typography>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <Typography
                    variant="body-xs"
                    className="!text-muted-foreground mb-1"
                  >
                    Email Us
                  </Typography>
                  <Typography variant="h4" className="!text-foreground">
                    hello@magicunbound.com
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <Typography
                    variant="body-xs"
                    className="!text-muted-foreground mb-1"
                  >
                    Call Us
                  </Typography>
                  <Typography variant="h4" className="!text-foreground">
                    +1 (555) 123-4567
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <Typography
                    variant="body-xs"
                    className="!text-muted-foreground mb-1"
                  >
                    Visit Us
                  </Typography>
                  <Typography variant="h4" className="!text-foreground">
                    123 Design Blvd, Creative City, 10101
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted/30 p-8 lg:p-12 rounded-[3rem] border border-border shadow-2xl shadow-black/5">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Typography
                    variant="body-xs"
                    as="label"
                    className="ml-1 !text-foreground"
                  >
                    Full Name
                  </Typography>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-primary-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Typography
                    variant="body-xs"
                    as="label"
                    className="ml-1 !text-foreground"
                  >
                    Email Address
                  </Typography>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-primary-500 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Typography
                  variant="body-xs"
                  as="label"
                  className="ml-1 !text-foreground"
                >
                  Service Needed
                </Typography>
                <select className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-primary-500 outline-none transition-all appearance-none">
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Marketing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <Typography
                  variant="body-xs"
                  as="label"
                  className="ml-1 !text-foreground"
                >
                  Message
                </Typography>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border focus:border-primary-500 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <Button
                variant="primary"
                size="xl"
                rightIcon={<Send size={20} />}
                className="w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
