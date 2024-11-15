"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Menu,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Cart from "@/components/elements/cart";
import { navigation } from "@/placeholders/navigation";
import ModeToggle from "../theme-toggle";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

export function NavigationBarClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/s?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col space-y-4">
            {navigation.categories.map((category) => (
              <div key={category.name}>
                <h3 className="font-semibold">{category.name}</h3>
                <ul className="mt-2 space-y-2">
                  {category.featured.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {navigation.pages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className="text-sm font-medium hover:underline"
              >
                {page.name}
              </Link>
            ))}
            <div className="pt-4">
              <ModeToggle />
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Search, theme toggle, and cart */}
      <div className="hidden md:flex items-center">
        <form onSubmit={handleSearch} className="relative hidden sm:block">
          <Input
            type="search"
            placeholder="Search"
            className="w-48 lg:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="flex gap-2 ml-4 lg:block">
          <ModeToggle />
          <Cart />
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center justify-center">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Drawer>
            <DrawerTrigger asChild>
              <button className="flex flex-col items-center justify-center">
                <Search className="h-6 w-6" />
                <span className="text-xs mt-1">Search</span>
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <form onSubmit={handleSearch}>
                <DrawerHeader>
                  <DrawerTitle>Looking for something?</DrawerTitle>
                  <DrawerDescription>We have everything you need.</DrawerDescription>
                </DrawerHeader>
                <div className="px-4">
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    className="text-lg h-12 w-full"
                    autoFocus
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button
                      type="submit"
                      size="lg"
                    >
                      Search
                    </Button>
                  </DrawerClose>
                  <DrawerClose>
                    Cancel
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </DrawerContent>
          </Drawer>
          <Link
            href="/bag"
            className="flex flex-col items-center justify-center"
          >
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xs mt-1">Cart</span>
          </Link>
          <Link
            href="/account"
            className="flex flex-col items-center justify-center"
          >
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Account</span>
          </Link>
        </div>
      </nav >
    </>
  );
}
