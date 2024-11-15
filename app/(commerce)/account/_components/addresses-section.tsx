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
import { Textarea } from "@/components/ui/textarea";

export default function AddressesSection() {
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", address: "123 Main St, Anytown, AN 12345" },
    { id: 2, type: "Work", address: "456 Office Blvd, Workville, WK 67890" },
  ]);

  const [newAddress, setNewAddress] = useState({ type: "", address: "" });

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    setAddresses([...addresses, { id: addresses.length + 1, ...newAddress }]);
    setNewAddress({ type: "", address: "" });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Addresses</CardTitle>
          <CardDescription>
            Manage your shipping and billing addresses.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {addresses.map((address) => (
            <div key={address.id} className="mb-4 p-4 border rounded">
              <h3 className="font-semibold">{address.type}</h3>
              <p>{address.address}</p>
              <Button variant="outline" size="sm" className="mt-2">
                Edit
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Address</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddAddress} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="address-type">Address Type</Label>
              <Input
                id="address-type"
                value={newAddress.type}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, type: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit">Add Address</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
