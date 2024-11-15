"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DiscountSection() {
  return (
    <div className="space-y-1">
      <Label className="font-medium">Discount code</Label>
      <div className="flex gap-2">
        <Input />
        <Button>Apply</Button>
      </div>
    </div>
  );
}
