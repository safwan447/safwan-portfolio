import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white shadow-resting hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-hover active:translate-y-0",
        secondary:
          "border border-border bg-surface text-primary shadow-resting hover:-translate-y-0.5 hover:bg-elevated hover:shadow-hover active:translate-y-0",
        ghost: "text-muted hover:bg-elevated hover:text-primary",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3 text-xs",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
