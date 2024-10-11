import { type VariantProps, cva } from "cva";
import React from "react";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export const buttonVariants = cva({
  base: [
    "inline-flex items-center justify-center",
    "gap-2",
    "sm:text-xs font-medium",
    "rounded-full",
    "transition-all",
    "outline-none focus-visible:ring-2 ring-offset-2 ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  variants: {
    variant: {
      solid: [
        "bg-primary text-primary-foreground",
        "hover:bg-primary/90",
        "focus-visible:ring-primary",
      ],
      outline: [
        "bg-transparent",
        "text-primary",
        "border border-primary",
        "focus-visible:ring-primary",
        "hover:bg-primary/10",
      ],
      ghost: [
        "bg-transparent hover:bg-primary/20",
        "focus-visible:ring-primary",
      ],
      link: "bg-transparent underline-offset-4 hover:underline text-primary hover:bg-transparent",
    },
    size: {
      sm: "h-9 px-2",
      md: "h-10 py-2 px-4",
      lg: "h-11 px-8",
      icon: "size-8",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * If true, the button will be rendered as a child of a slot.
   */
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      asChild,
      type = "button",
      variant,
      size,
      className,
      ...rest
    } = props;

    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(Comp === "button" && { type })}
        {...rest}
      />
    );
  }
);

Button.displayName = "Button";
