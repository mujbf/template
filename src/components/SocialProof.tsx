import { Award, ShieldCheck, Zap } from "lucide-react";
import Typography from "./ui/Typography";

const SocialProof = () => {
  return (
    <section className="py-12 border-y border-border bg-muted/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          <div className="flex items-center gap-4">
            <Award className="w-10 h-10 text-primary-500 opacity-50" />
            <Typography
              variant="body-xs"
              as="span"
              className="text-muted-foreground tracking-widest"
            >
              Certified Partner
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-primary-500 opacity-50" />
            <Typography
              variant="body-xs"
              as="span"
              className="text-muted-foreground tracking-widest"
            >
              GDPR Compliant
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <Zap className="w-10 h-10 text-primary-500 opacity-50" />
            <Typography
              variant="body-xs"
              as="span"
              className="text-muted-foreground tracking-widest"
            >
              Fastest Growth 2023
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
