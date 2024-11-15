"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const paymentGateways = [
  {
    id: "paypal",
    name: "PayPal",
    description: "For International payments",
  },
  {
    id: "razorpay",
    name: "Razorpay",
    description: "UPI, Debit/Credit, EMI, NETBANKING",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "If you are located in USA",
  },
];

export default function PaymentSection() {
  const [selectedPaymentGateway, setSelectedPaymentGateway] =
    useState("paypal");

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Payment Method</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {paymentGateways.map((gateway) => (
          <Card
            key={gateway.id}
            className={`relative cursor-pointer border-2 shadow-none transition-all ${
              selectedPaymentGateway === gateway.id ? "border-primary" : ""
            }`}
            onClick={() => setSelectedPaymentGateway(gateway.id)}
          >
            <CardContent className="flex items-start p-4">
              <Label htmlFor={gateway.id} className="flex-grow cursor-pointer">
                <div className="font-semibold mb-1">{gateway.name}</div>
                <div className="text-xs font-normal text-muted-foreground leading-tight">
                  {gateway.description}
                </div>
              </Label>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
