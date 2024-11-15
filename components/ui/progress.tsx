"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

interface ProgressProps
    extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    fill?: string;
    value: number;
}

function Progress({
    className,
    value,
    fill = "bg-primary",
    ...props
}: ProgressProps) {
    return (
        <ProgressPrimitive.Root
            className={cn(
                "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
                className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
                className={cn("h-full flex-1 transition-all", fill)}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    );
}

export { Progress };
