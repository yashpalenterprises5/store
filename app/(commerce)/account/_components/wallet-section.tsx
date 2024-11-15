import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WalletSection() {
  const [balance, setBalance] = useState(100);
  const [amount, setAmount] = useState("");

  const handleAddFunds = (e: React.FormEvent) => {
    e.preventDefault();
    setBalance(balance + Number(amount));
    setAmount("");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Wallet</CardTitle>
          <CardDescription>
            Manage your e-commerce wallet balance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-4">
            Current Balance: ${balance.toFixed(2)}
          </div>
          <form onSubmit={handleAddFunds} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Add Funds</Label>
              <Input
                id="amount"
                type="number"
                min="0"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Add Funds</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
