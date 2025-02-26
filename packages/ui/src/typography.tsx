import type { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

import { cn } from "./index";

const typographyVariants = cva("", {
  variants: {
    variant: {
      heading: "font-serif text-2xl leading-7 tracking-tight",
      regular: "text-md leading-5",
      small: "text-sm font-medium leading-5",
      subheading: "text-md font-bold leading-5",
    },
  },
  defaultVariants: {
    variant: "regular",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, as: Component = "p", ...props }, ref) => {
    return (
      <Component
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
