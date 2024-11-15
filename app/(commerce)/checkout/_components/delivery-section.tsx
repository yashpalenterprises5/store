"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Truck } from "lucide-react";

const deliveryOptions = [
  {
    id: "express",
    name: "Express Delivery",
    description: "Get it within 1-2 business days",
    price: 10,
  },
  {
    id: "normal",
    name: "Normal Delivery",
    description: "Get it within 3-5 business days",
    price: 0,
  },
];

export default function DeliverySection() {
  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState("normal");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Delivery Option</h3>
      <div className="grid grid-cols-2 gap-2">
        {deliveryOptions.map((option) => (
          <Card
            key={option.id}
            className={`relative cursor-pointer border-2 shadow-none transition-all ${
              selectedDeliveryOption === option.id ? "border-primary" : ""
            }`}
            onClick={() => setSelectedDeliveryOption(option.id)}
          >
            <CardContent className="flex items-start p-4">
              <Label htmlFor={option.id} className="flex-grow cursor-pointer">
                <div className="flex justify-between items-center font-semibold mb-1">
                  <span>{option.name}</span>
                  <div className="text-sm font-semibold">
                    {option.price === 0
                      ? "Free"
                      : `$${option.price.toFixed(2)}`}
                  </div>
                </div>
                <div className="text-xs font-normal text-muted-foreground">
                  {option.description}
                </div>
              </Label>
              <Truck className="absolute right-2 bottom-2 h-4 w-4 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
