import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

// Simplified Button component
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary";
  size?: "xl";
  rightIcon?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = "primary", 
  size = "xl", 
  rightIcon, 
  className = "", 
  isLoading = false, 
  onClick, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  const variants: Record<string, string> = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/20",
  };
  const sizes: Record<string, string> = {
    xl: "px-10 py-4 text-lg rounded-3xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && children}
      {!isLoading && rightIcon}
    </button>
  );
};

interface TypographyProps {
  variant?: string;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = "body", 
  as: Component = "p", 
  className = "", 
  children, 
  ...props 
}) => {
  return <Component className={className} {...props}>{children}</Component>;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields."
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3a9390b0-6228-46b5-9585-f1c166224960", // Web#Forms API -testing
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours."
        });
        setFormData({
          name: "",
          email: "",
          service: "Web Development",
          message: ""
        });
      } else {
        setStatus({
          type: "error",
          message: "Oops! Something went wrong. Please try again or email us directly."
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Typography
              variant="body-xs"
              as="span"
              className="text-purple-600 mb-4 block text-sm font-bold"
            >
              Get in Touch
            </Typography>
            <Typography variant="h1" as="h2" className="mb-8 text-4xl md:text-5xl font-bold">
              Let's Build Something{" "}
              <span className="text-purple-600">Great</span>
            </Typography>
            <Typography variant="body-lg" className="mb-12 max-w-md text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind or just want to chat? We'd love to hear
              from you. Drop us a message and we'll get back to you within 24
              hours.
            </Typography>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <Typography
                    variant="body-xs"
                    className="text-gray-500 dark:text-gray-400 mb-1 text-xs font-bold"
                  >
                    Email Us
                  </Typography>
                  <Typography variant="h4" className="text-gray-900 dark:text-gray-100 text-lg font-bold">
                    nisaldevindar@gmail.com
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <Typography
                    variant="body-xs"
                    className="text-gray-500 dark:text-gray-400 mb-1 text-xs font-bold"
                  >
                    Call Us
                  </Typography>
                  <Typography variant="h4" className="text-gray-900 dark:text-gray-100 text-lg font-bold">
                    +1 (555) 123-4567
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <Typography
                    variant="body-xs"
                    className="text-gray-500 dark:text-gray-400 mb-1 text-xs font-bold"
                  >
                    Visit Us
                  </Typography>
                  <Typography variant="h4" className="text-gray-900 dark:text-gray-100 text-lg font-bold">
                    123 Design Blvd, Creative City, 10101
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 p-8 lg:p-12 rounded-[3rem] border border-gray-200 dark:border-gray-700 shadow-2xl">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Typography
                    variant="body-xs"
                    as="label"
                    className="ml-1 text-gray-900 dark:text-gray-100 text-xs font-bold"
                  >
                    Full Name
                  </Typography>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Typography
                    variant="body-xs"
                    as="label"
                    className="ml-1 text-gray-900 dark:text-gray-100 text-xs font-bold"
                  >
                    Email Address
                  </Typography>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Typography
                  variant="body-xs"
                  as="label"
                  className="ml-1 text-gray-900 dark:text-gray-100 text-xs font-bold"
                >
                  Service Needed
                </Typography>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 outline-none transition-all appearance-none"
                >
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
                  className="ml-1 text-gray-900 dark:text-gray-100 text-xs font-bold"
                >
                  Message
                </Typography>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`p-4 rounded-2xl flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                      : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </div>
              )}

              <Button
                variant="primary"
                size="xl"
                rightIcon={<Send size={20} />}
                className="w-full"
                isLoading={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;