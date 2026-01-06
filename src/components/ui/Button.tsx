import React from "react";

interface BaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

type ButtonAsButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsAnchorProps = BaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  leftIcon,
  rightIcon,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30",
    secondary: "bg-muted text-foreground hover:bg-accent",
    outline:
      "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost: "text-foreground hover:bg-muted font-medium",
    glass:
      "glass text-foreground hover:bg-white/10 dark:hover:bg-black/20 border border-white/10",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs rounded-lg",
    md: "px-6 py-2.5 text-sm rounded-xl",
    lg: "px-8 py-3.5 text-base rounded-2xl",
    xl: "px-10 py-4.5 text-lg rounded-3xl",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchorProps;
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={isLoading}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
