"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext(null);

const Accordion = React.forwardRef(
  ({ children, type = "multiple", defaultValue = [], className }, ref) => {
    const [value, setValue] = React.useState(defaultValue);

    const onValueChange = (itemValue) => {
      if (type === "single") {
        setValue(value.includes(itemValue) ? [] : [itemValue]);
      } else {
        setValue(
          value.includes(itemValue)
            ? value.filter((v) => v !== itemValue)
            : [...value, itemValue]
        );
      }
    };

    return (
      <AccordionContext.Provider value={{ value, onValueChange }}>
        <div ref={ref} className={cn("space-y-5", className)}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(
  ({ children, value, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border rounded-md", className)}
        data-value={value}
      >
        {children}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ children, className, value }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context)
      throw new Error("AccordionTrigger must be used within Accordion");

    const isOpen = context.value.includes(value);

    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-start justify-between px-5 py-5 text-left transition-all hover:bg-gray-50",
          className
        )}
        onClick={() => context.onValueChange(value)}
      >
        <div className="flex-1">{children}</div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200 mt-1",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
    );
  }
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, className, value }, ref) => {
    const context = React.useContext(AccordionContext);
    if (!context)
      throw new Error("AccordionContent must be used within Accordion");

    const isOpen = context.value.includes(value);

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn("overflow-hidden transition-all", className)}
      >
        <div className="px-5 pb-4 pt-0">{children}</div>
      </div>
    );
  }
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
