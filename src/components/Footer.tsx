import { Twitter, Instagram, Linkedin, Github, Heart } from "lucide-react";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

interface FooterProps {
  onNavigate?: (page: "home" | "style-guide") => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => onNavigate?.("home")}
            >
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center transform rotate-12">
                <Typography
                  variant="body-sm"
                  as="span"
                  className="text-white font-bold -rotate-12"
                >
                  M
                </Typography>
              </div>
              <Typography
                variant="h4"
                as="span"
                className="font-bold tracking-tight text-foreground"
              >
                Magic<span className="text-primary-500">Unbound</span>
              </Typography>
            </div>
            <Typography variant="body" className="leading-relaxed">
              We create digital experiences that help brands scale and users
              smile. Innovation meets empathy in everything we build.
            </Typography>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <Button
                  key={i}
                  variant="secondary"
                  size="sm"
                  className="!p-0 w-10 h-10 !rounded-full text-muted-foreground hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1"
                  href="#"
                >
                  <Icon size={18} />
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Typography variant="h4" as="h4" className="mb-6">
              Quick Links
            </Typography>
            <ul className="space-y-4">
              {[
                { name: "Home", action: () => onNavigate?.("home") },
                { name: "Services", href: "#services" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "About", href: "#about" },
                {
                  name: "Style Guide",
                  action: () => onNavigate?.("style-guide"),
                },
                { name: "Pricing", href: "#pricing" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href || "#"}
                    onClick={(e) => {
                      if (item.action) {
                        e.preventDefault();
                        item.action();
                      }
                    }}
                    className="text-muted-foreground hover:text-primary-500 transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h4" as="h4" className="mb-6">
              Services
            </Typography>
            <ul className="space-y-4">
              {[
                "UI/UX Design",
                "Web Development",
                "Digital Marketing",
                "Mobile Apps",
                "Branding",
                "SEO",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-primary-500 transition-colors"
                  >
                    <Typography
                      variant="body-xs"
                      as="span"
                      className="!text-inherit"
                    >
                      {item}
                    </Typography>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h4" as="h4" className="mb-6">
              Contact Us
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Typography
                  variant="body-sm"
                  as="span"
                  className="text-primary-500 mt-1 font-bold"
                >
                  A:
                </Typography>
                <Typography variant="body-sm" as="span">
                  123 Design Blvd, Creative City
                  <br />
                  CC 10101, United States
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <Typography
                  variant="body-sm"
                  as="span"
                  className="text-primary-500 font-bold"
                >
                  E:
                </Typography>
                <Typography variant="body-sm" as="span">
                  hello@magicunbound.com
                </Typography>
              </li>
              <li className="flex items-center gap-3">
                <Typography
                  variant="body-sm"
                  as="span"
                  className="text-primary-500 font-bold"
                >
                  P:
                </Typography>
                <Typography variant="body-sm" as="span">
                  +1 (555) 123-4567
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <Typography variant="body-sm" className="font-medium">
            © {new Date().getFullYear()} Magic Unbound. All rights reserved.
          </Typography>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-500 transition-colors">
              <Typography variant="body-sm" as="span" className="font-bold">
                Privacy Policy
              </Typography>
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              <Typography variant="body-sm" as="span" className="font-bold">
                Terms of Service
              </Typography>
            </a>
            <a href="#" className="hover:text-primary-500 transition-colors">
              <Typography variant="body-sm" as="span" className="font-bold">
                Cookie Settings
              </Typography>
            </a>
          </div>
          <Typography variant="body-sm" className="flex items-center gap-2">
            Made with{" "}
            <Heart size={14} className="text-red-500" fill="currentColor" /> by{" "}
            <span
              className="text-foreground font-bold underline cursor-pointer"
              onClick={() => onNavigate?.("home")}
            >
              Magic Unbound
            </span>
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
