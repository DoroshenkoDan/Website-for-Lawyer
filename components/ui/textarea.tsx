import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-28 w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/40 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
