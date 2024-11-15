"use client";

import { useState } from "react";
import {
    Bell,
    CreditCard,
    HelpCircle,
    Home,
    Mail,
    Package,
    Settings,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LoginSecuritySection from "./_components/login-security-section";
import AddressesSection from "./_components/addresses-section";
import AffiliateSection from "./_components/affiliate-section";
import ContactUsSection from "./_components/contact-us-section";
import EmailSection from "./_components/email-section";
import WalletSection from "./_components/wallet-section";
import OrderList from "../orders/_components/order-list";
import Preferences from "./_components/preferences-section";

export default function AccountPage() {
    const [selectedSection, setSelectedSection] = useState("orders");

    const sidebarItems = [
        { name: "Orders", icon: Package },
        { name: "Login & Security", icon: Settings },
        { name: "Addresses", icon: Home },
        { name: "Contact Us", icon: HelpCircle },
        { name: "Wallet", icon: CreditCard },
        { name: "Affiliate", icon: Users },
        { name: "Notification Preferences", icon: Bell },
        { name: "Email", icon: Mail },
    ];

    const renderContent = () => {
        switch (selectedSection) {
            case "orders":
                return <OrderList />;
            case "login & security":
                return <LoginSecuritySection />;
            case "addresses":
                return <AddressesSection />;
            case "contact us":
                return <ContactUsSection />;
            case "wallet":
                return <WalletSection />;
            case "affiliate":
                return <AffiliateSection />;
            case "preferences":
                return <Preferences />;
            case "email":
                return <EmailSection />;
            default:
                return <div>Select a section</div>;
        }
    };

    return (
        <div className="body flex">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        className="lg:hidden fixed left-4 top-32 z-40"
                    >
                        Menu
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <nav className="flex flex-col gap-4 py-4">
                        {sidebarItems.map((item) => (
                            <Button
                                key={item.name}
                                variant={
                                    selectedSection === item.name.toLowerCase()
                                        ? "secondary"
                                        : "ghost"
                                }
                                className="justify-start"
                                onClick={() =>
                                    setSelectedSection(item.name.toLowerCase())
                                }
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.name}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
            <div className="hidden lg:flex flex-col gap-4 p-4 border-r w-64">
                <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                <ScrollArea className="h-[calc(100vh-8rem)]">
                    <nav className="flex flex-col gap-2">
                        {sidebarItems.map((item) => (
                            <Button
                                key={item.name}
                                variant={
                                    selectedSection === item.name.toLowerCase()
                                        ? "secondary"
                                        : "ghost"
                                }
                                className="justify-start"
                                onClick={() =>
                                    setSelectedSection(item.name.toLowerCase())
                                }
                            >
                                <item.icon className="mr-2 h-4 w-4" />
                                {item.name}
                            </Button>
                        ))}
                    </nav>
                </ScrollArea>
            </div>
            <main className="flex-1 md:p-6 overflow-auto">
                <h1 className="text-2xl font-bold mb-6">
                    {selectedSection.charAt(0).toUpperCase() +
                        selectedSection.slice(1)}
                </h1>
                {renderContent()}
            </main>
        </div>
    );
}
