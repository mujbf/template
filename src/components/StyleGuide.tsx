import Typography from "./ui/Typography";
import type { TypographyProps } from "./ui/Typography";
import Button from "./ui/Button";

const StyleGuide = () => {
  const colors = [
    {
      name: "Primary",
      shades: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ],
      prefix: "primary",
    },
    {
      name: "Shark (Dark/Neutral)",
      shades: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ],
      prefix: "shark",
    },
    {
      name: "Alabaster (Light/Neutral)",
      shades: [
        "50",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
        "950",
      ],
      prefix: "alabaster",
    },
  ];

  const typography = [
    { variant: "display-2xl", text: "Display 2XL" },
    { variant: "display-xl", text: "Display XL" },
    { variant: "display-lg", text: "Display LG" },
    { variant: "h1", text: "Heading 1" },
    { variant: "h2", text: "Heading 2" },
    { variant: "h3", text: "Heading 3" },
    { variant: "h4", text: "Heading 4" },
    {
      variant: "body-xl",
      text: "Body XL: Large descriptive text for introductions.",
    },
    {
      variant: "body-lg",
      text: "Body LG: Standard descriptive text for readability.",
    },
    {
      variant: "body",
      text: "Body Base: Regular text for paragraphs and general content.",
    },
    {
      variant: "body-sm",
      text: "Body SM: Smaller text for secondary information.",
    },
    {
      variant: "body-xs",
      text: "Body XS: Micro text for labels and captions.",
    },
  ];

  return (
    <div className="pt-24 pb-20 container mx-auto px-6">
      <div className="mb-16 border-b border-border pb-8">
        <Typography variant="display-lg" as="h1" className="mb-4">
          Brand Style Guide
        </Typography>
        <Typography variant="body-xl">
          A comprehensive overview of the design system, including colors,
          typography, and UI components.
        </Typography>
      </div>

      {/* Colors Section */}
      <section className="mb-20">
        <Typography variant="h2" className="mb-8 flex items-center gap-4">
          <span className="w-8 h-1 bg-primary-500 rounded-full" />
          Color Palette
        </Typography>
        <div className="space-y-12">
          {colors.map((color) => (
            <div key={color.name}>
              <Typography variant="h4" className="mb-4">
                {color.name}
              </Typography>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-4">
                {color.shades.map((shade) => (
                  <div key={shade} className="group">
                    <div
                      className={`aspect-square rounded-xl mb-2 shadow-sm border border-border transition-transform group-hover:scale-105`}
                      style={{
                        backgroundColor: `var(--color-${color.prefix}-${shade})`,
                      }}
                    />
                    <Typography
                      variant="body-xs"
                      className="!tracking-normal text-center"
                    >
                      {shade}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className="mb-20">
        <Typography variant="h2" className="mb-8 flex items-center gap-4">
          <span className="w-8 h-1 bg-primary-500 rounded-full" />
          Typography
        </Typography>
        <div className="space-y-10 bg-card p-8 rounded-3xl border border-border">
          {typography.map((type) => (
            <div
              key={type.variant}
              className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start border-b border-border/50 pb-8 last:border-0 last:pb-0"
            >
              <Typography
                variant="body-xs"
                className="text-primary-500 font-mono"
              >
                {type.variant}
              </Typography>
              <div className="lg:col-span-3">
                <Typography
                  variant={type.variant as TypographyProps["variant"]}
                >
                  {type.text}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons Section */}
      <section className="mb-20">
        <Typography variant="h2" className="mb-8 flex items-center gap-4">
          <span className="w-8 h-1 bg-primary-500 rounded-full" />
          Buttons
        </Typography>
        <div className="space-y-12">
          <div>
            <Typography variant="h4" className="mb-6">
              Variants
            </Typography>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="glass">Glass Button</Button>
            </div>
          </div>

          <div>
            <Typography variant="h4" className="mb-6">
              Sizes
            </Typography>
            <div className="flex flex-wrap gap-4 items-end">
              <Button variant="primary" size="sm">
                Small
              </Button>
              <Button variant="primary" size="md">
                Medium (Default)
              </Button>
              <Button variant="primary" size="lg">
                Large
              </Button>
            </div>
          </div>

          <div>
            <Typography variant="h4" className="mb-6">
              States & Icons
            </Typography>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" isLoading>
                Loading State
              </Button>
              <Button variant="primary" disabled>
                Disabled State
              </Button>
              <Button
                variant="outline"
                leftIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                }
              >
                With Left Icon
              </Button>
              <Button
                variant="primary"
                rightIcon={
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                }
              >
                With Right Icon
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;
