import Typography from "./ui/Typography";

const clients = ["Netflix", "Google", "Amazon", "Meta", "Tesla", "Adobe"];

const Clients = () => {
  return (
    <section className="py-20 bg-muted/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <Typography
          variant="body-xs"
          className="text-center text-muted-foreground tracking-[0.3em] mb-12"
        >
          Trusted by Industry Leaders
        </Typography>
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 items-center opacity-40 hover:opacity-100 transition-opacity">
          {clients.map((client) => (
            <Typography
              key={client}
              variant="h3"
              as="span"
              className="md:text-4xl font-black tracking-tighter grayscale"
            >
              {client}
            </Typography>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
