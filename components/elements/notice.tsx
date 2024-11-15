"use client";

import Link from "next/link";
import Marquee from "@/components/ui/marquee";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/stores/auth";



export default function Notice() {
  const { user } = useAuth()

  return (
    <div className="bg-secondary-foreground dark:bg-secondary dark:text-primary text-background mx-auto">
      <div className="flex justify-between max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Marquee pauseOnHover className="pr-2 *:text-sm">
          <a href="/product/item">Free shipping on all orders {"/"}</a>
          <a href="/product/item">Launch sale! Get 50% off on all items {"/"}</a>
        </Marquee>
        <div className="flex gap-2 pl-2 md:pl-6 items-center *:text-xs *:md:text-base *:underline">
          {
            user ? <Link href="/account">Account</Link> : <>
              <Link href="/register">
                Register
              </Link>
              <Separator className="h-4 dark:bg-primary" orientation="vertical" />
              <Link href="/login">
                Login
              </Link>
            </>
          }
        </div>
      </div>
    </div>
  );
}


