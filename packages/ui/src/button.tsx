import type { VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

import { cn } from ".";
import { Typography } from "./typography";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-radius transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-foreground bg-gradient-to-b from-kf-red to-kf-red-to text-gradient-foreground hover:opacity-95",
        outline: "border border-border bg-transparent hover:opacity-70",
        ghost: "hover:opacity-90",
      },
      size: {
        sm: "h-8 px-3",
        lg: "h-12 px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  prefixIcon?: LucideIcon;
  suffixIcon?: LucideIcon;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      prefixIcon: PrefixIcon,
      suffixIcon: SuffixIcon,
      loading,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled ?? loading}
        {...props}
      >
        {loading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <>
            {PrefixIcon && <PrefixIcon className="mr-2 h-4 w-4" />}
            <Typography variant={size === "lg" ? "regular" : "small"}>
              {children}
            </Typography>
            {SuffixIcon && <SuffixIcon className="ml-2 h-4 w-4" />}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
