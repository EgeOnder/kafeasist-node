"use client";

import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cva } from "class-variance-authority";

import { cn, Typography } from ".";

const separatorVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-[1px] w-full",
      vertical: "h-full w-[1px]",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface SeparatorProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
      "orientation"
    >,
    VariantProps<typeof separatorVariants> {
  text?: string;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation = "horizontal", text, ...props }, ref) => (
  <>
    {orientation === "horizontal" && text ? (
      <div className={cn("flex w-full items-center", className)}>
        <SeparatorPrimitive.Root
          ref={ref}
          decorative
          orientation="horizontal"
          className={cn(
            separatorVariants({ orientation: "horizontal" }),
            "flex-1",
          )}
          {...props}
        />
        <Typography
          as="span"
          variant="small"
          className="whitespace-nowrap px-3 text-muted-foreground"
        >
          {text}
        </Typography>
        <SeparatorPrimitive.Root
          decorative
          orientation="horizontal"
          className={cn(
            separatorVariants({ orientation: "horizontal" }),
            "flex-1",
          )}
          {...props}
        />
      </div>
    ) : (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative
        orientation={orientation ?? "horizontal"}
        className={cn(separatorVariants({ orientation }), className)}
        {...props}
      />
    )}
  </>
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
