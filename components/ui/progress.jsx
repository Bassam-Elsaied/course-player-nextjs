import * as React from "react";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value = 0, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative h-[5px] w-full overflow-hidden rounded-full bg-gray-200",
        className
      )}
      {...props}
    >
      <div
        className="h-full bg-[#6ABD8A] transition-all rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
});
Progress.displayName = "Progress";

export { Progress };
