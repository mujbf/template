import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-3xl opacity-40 transform -translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left pt-10 lg:pt-0"
        >
          <Typography
            variant="body-xs"
            as="span"
            className="inline-block py-1 px-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6"
          >
            Creative Digital Studio
          </Typography>
          <Typography variant="display-xl" as="h1" className="mb-6">
            Unleash Your <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
              Digital Potential
            </span>
          </Typography>
          <Typography
            variant="body-lg"
            className="mb-10 max-w-lg mx-auto lg:mx-0"
          >
            We build high-performance, visually stunning digital experiences
            that help your business grow and stand out in a crowded market.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="primary"
              size="lg"
              rightIcon={
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              }
              className="group"
            >
              Get Started Now
            </Button>
            <Button
              variant="glass"
              size="lg"
              leftIcon={
                <span className="w-8 h-8 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500">
                  <Play size={16} fill="currentColor" />
                </span>
              }
            >
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center text-xs font-bold overflow-hidden"
                >
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-background bg-primary-500 flex items-center justify-center text-xs font-bold text-white">
                +2k
              </div>
            </div>
            <Typography
              variant="body-sm"
              className="font-medium text-center sm:text-left"
            >
              Trusted by 2,000+ businesses worldwide
            </Typography>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:mt-0 mt-20"
        >
          {/* Main Hero Image/Video Placeholder */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20 border border-white/20">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-600/20 to-shark-900/40 relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Digital Marketing"
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-500/90 text-white flex items-center justify-center animate-pulse cursor-pointer shadow-2xl">
                  <Play
                    size={24}
                    className="sm:size-[32px]"
                    fill="currentColor"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 z-20 glass p-3 sm:p-5 rounded-2xl shadow-xl max-w-[140px] sm:max-w-[200px]"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
              <Typography
                variant="h3"
                as="span"
                className="text-lg sm:text-2xl"
              >
                145%
              </Typography>
            </div>
            <Typography
              variant="body-xs"
              className="!tracking-normal !normal-case text-muted-foreground font-medium text-[10px] sm:text-xs"
            >
              Growth in user engagement this quarter
            </Typography>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 z-20 glass p-3 sm:p-5 rounded-2xl shadow-xl max-w-[130px] sm:max-w-[180px]"
          >
            <div className="flex items-center gap-2 mb-1 sm:mb-2">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-500 border-2 border-white"></div>
              </div>
              <Typography
                variant="body-xs"
                as="span"
                className="!tracking-normal !normal-case !text-foreground font-bold text-[10px] sm:text-xs"
              >
                +12 New Clients
              </Typography>
            </div>
            <Typography variant="body-xs" className="text-[10px] sm:text-xs">
              Success Rate 99%
            </Typography>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
