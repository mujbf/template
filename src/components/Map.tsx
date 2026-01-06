import Button from "./ui/Button";
import Typography from "./ui/Typography";

const Map = () => {
  return (
    <section className="h-[500px] w-full relative">
      {/* Fallback pattern instead of real Google Maps for template robustness */}
      <div className="absolute inset-0 bg-muted flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#575da0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 glass p-8 rounded-[2.5rem] shadow-2xl text-center max-w-sm">
          <Typography variant="h3" as="h3" className="mb-2">
            Our Headquarters
          </Typography>
          <Typography variant="body" className="mb-6">
            123 Design Blvd, Suite 500
            <br />
            Creative City, CC 10101
          </Typography>
          <Button variant="ghost" className="!text-primary-500 underline !p-0">
            Get Directions
          </Button>
        </div>
      </div>
      {/* For real Google Maps integration, replace with iframe or library */}
    </section>
  );
};

export default Map;
