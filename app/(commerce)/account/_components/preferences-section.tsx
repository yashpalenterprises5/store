import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Preferences() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>
          Manage your advertising, communication, and SMS alert preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Advertising Preferences
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="personalized-ads">Personalized Ads</Label>
              <Switch id="personalized-ads" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="third-party-ads">Third-party Ads</Label>
              <Switch id="third-party-ads" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Communication Preferences
          </h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="push-notifications">Push Notifications</Label>
              <Switch id="push-notifications" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">SMS Alert Preferences</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="order-updates">Order Updates</Label>
              <Switch id="order-updates" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="promotional-sms">Promotional SMS</Label>
              <Switch id="promotional-sms" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
