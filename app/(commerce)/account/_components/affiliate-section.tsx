import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Affiliate() {
  const affiliateStats = {
    referrals: 15,
    earnings: 250.0,
    clickThroughs: 150,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Affiliate Program</CardTitle>
        <CardDescription>
          Manage your affiliate account and track your earnings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{affiliateStats.referrals}</div>
            <div className="text-sm text-gray-500">Referrals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              ${affiliateStats.earnings.toFixed(2)}
            </div>
            <div className="text-sm text-gray-500">Earnings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">
              {affiliateStats.clickThroughs}
            </div>
            <div className="text-sm text-gray-500">Click-throughs</div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="affiliate-link">Your Affiliate Link</Label>
          <div className="flex">
            <Input
              id="affiliate-link"
              value="https://example.com/ref/yourname"
              readOnly
            />
            <Button className="ml-2">Copy</Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>View Detailed Reports</Button>
      </CardFooter>
    </Card>
  );
}
