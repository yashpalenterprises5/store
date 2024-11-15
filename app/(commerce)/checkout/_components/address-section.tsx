"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddressSection() {
  const [isSameAddress, setIsSameAddress] = useState(true);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Address</h3>
      <div className="flex items-center gap-1 mb-2">
        <Checkbox
          id="same-address"
          checked={isSameAddress}
          onCheckedChange={(checked) => setIsSameAddress(checked as boolean)}
        />
        <Label htmlFor="same-address">Bill to a same address</Label>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-12 items-center gap-2">
          <Label
            className="font-bold col-span-3 lg:col-span-2"
            htmlFor="shipping-address"
          >
            Deliver to
          </Label>
          <div className="col-span-9 lg:col-span-10">
            <Select>
              <SelectTrigger id="shipping-address">
                <SelectValue placeholder="Select shipping address" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="address1">
                  123 Main St, City, Country
                </SelectItem>
                <SelectItem value="address2">
                  456 Elm St, Town, Country
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        {!isSameAddress && (
          <div className="grid grid-cols-12 items-center gap-2">
            <Label
              className="font-bold w-20 col-span-3 lg:col-span-2"
              htmlFor="billing-address"
            >
              Bill to
            </Label>
            <div className="col-span-9 lg:col-span-10">
              <Select>
                <SelectTrigger id="billing-address">
                  <SelectValue placeholder="Select billing address" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="address1">
                    123 Main St, City, Country
                  </SelectItem>
                  <SelectItem value="address2">
                    456 Elm St, Town, Country
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
