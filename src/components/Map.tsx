import Button from "./ui/Button";
import Typography from "./ui/Typography";

const Map = () => {
  return (
    <section className="h-[500px] w-full relative">
      {/* Google Maps iframe for Colombo 10, Sri Lanka */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31685.15344812286!2d79.84415977431642!3d6.927078799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d3cb8fe37%3A0x3d1c5d8a91f0a579!2sColombo%2010!5e0!3m2!1sen!2slk!4v1642000000000!5m2!1sen!2slk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Colombo 10, Sri Lanka Map"
          className="w-full h-full"
        />
      </div>

      {/* Overlay card with location info */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative z-10 glass p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl text-center max-w-[90%] sm:max-w-sm pointer-events-auto">
          <Typography variant="h3" as="h3" className="mb-2 text-lg sm:text-2xl">
            Our Headquarters
          </Typography>
          <Typography variant="body" className="mb-6 text-sm sm:text-base">
            Trace Expert City, Colombo 10
            <br />
            Sri Lanka
          </Typography>
          <Button
            variant="ghost"
            className="!text-primary-500 underline"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Colombo+10/@6.9270788,79.8441598,14z",
                "_blank"
              )
            }
          >
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Map;
