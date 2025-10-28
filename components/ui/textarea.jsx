import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[180px] w-full rounded-md border-0 bg-white px-6 py-6 text-lg font-light shadow-[0_0_20px_rgba(0,0,0,0.09)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-[0_0_20px_rgba(0,0,0,0.09)] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
