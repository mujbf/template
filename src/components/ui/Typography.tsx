import React from "react";

export type TypographyVariant =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-xl"
  | "body-lg"
  | "body"
  | "body-sm"
  | "body-xs";

export interface TypographyProps {
  variant?: TypographyVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Typography = ({
  variant = "body",
  as: Component = "p",
  className = "",
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) => {
  const variantClasses = {
    "display-2xl": "text-display-2xl",
    "display-xl": "text-display-xl",
    "display-lg": "text-display-lg",
    h1: "text-h1",
    h2: "text-h2",
    h3: "text-h3",
    h4: "text-h4",
    "body-xl": "text-body-xl",
    "body-lg": "text-body-lg",
    body: "text-body",
    "body-sm": "text-body-sm",
    "body-xs": "text-body-xs",
  };

  return (
    <Component className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
