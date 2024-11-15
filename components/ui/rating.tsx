"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const ratingVariants = {
  default: {
    star: "text-foreground",
    emptyStar: "text-muted-foreground",
  },
  destructive: {
    star: "text-red-500",
    emptyStar: "text-red-200",
  },
  yellow: {
    star: "text-yellow-400",
    emptyStar: "text-yellow-200",
  },
};

interface RatingsProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  rating: number;
  totalStars?: number;
  size?: number;
  fill?: boolean;
  Icon?: React.ReactElement;
  variant?: keyof typeof ratingVariants;
}

interface RatingInputProps extends Omit<RatingsProps, "rating"> {
  name?: string;
  value?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

export function StarRating({
  name,
  value,
  onChange,
  readonly = false,
  totalStars = 5,
  variant = "default",
  ...props
}: RatingInputProps) {
  const [internalRating, setInternalRating] = useState(value || 0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState<number | null>(null);

  const currentRating = value !== undefined ? value : internalRating;

  const handleRatingChange = useCallback(
    (newRating: number) => {
      if (!readonly) {
        setInternalRating(newRating);
        setHoverRating(newRating);
        onChange?.(newRating);
      }
    },
    [readonly, onChange]
  );

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (!readonly && hoverRating !== index + 1) {
        setHoverRating(index + 1);
      }
    },
    [readonly, hoverRating]
  );

  const handleMouseLeave = useCallback(() => {
    if (!readonly) {
      setHoverRating(null);
    }
  }, [readonly]);

  const stars = useMemo(() => {
    return [...Array(totalStars)].map((_, index) => (
      <div
        key={index}
        className={cn("cursor-pointer", readonly && "cursor-default")}
        onClick={() => handleRatingChange(index + 1)}
        onMouseEnter={() => handleMouseEnter(index)}
      >
        <Star
          size={props.size || 20}
          className={cn(
            "text-muted-foreground",
            hasInteracted !== null && index < hasInteracted
              ? `${ratingVariants[variant].star} fill-current`
              : index < (hoverRating || currentRating)
              ? `${ratingVariants[variant].star} fill-current`
              : ""
          )}
          onClick={() => {
            setHasInteracted(index + 1);
          }}
        />
      </div>
    ));
  }, [
    totalStars,
    hoverRating,
    currentRating,
    variant,
    readonly,
    handleMouseEnter,
    handleRatingChange,
    hasInteracted,
    props.size,
  ]);

  return (
    <div id="star" onMouseLeave={handleMouseLeave}>
      {readonly ? "" : <input type="hidden" name={name} value={currentRating} />}
      <div className="flex gap-2">{stars}</div>
    </div>
  );
}
