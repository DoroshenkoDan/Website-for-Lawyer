import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 w-full rounded-md border border-graphite/20 bg-white px-3 text-sm text-graphite placeholder:text-graphite/40 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";
