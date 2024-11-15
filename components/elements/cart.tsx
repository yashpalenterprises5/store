"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ShoppingBag } from "lucide-react";
import CartCard from "../cards/cart-card";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "INTEL I5-12400(6 CORES(0 E-cores/6 P-cores)/12 THREADS)/ 18MB Cache/ 4.60GHz Max) Processor",
    href: "#",
    color: "Blue",
    price: "$3734782",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function Cart() {
  const [cartItemCount, setCartItemCount] = React.useState(3);
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
            {cartItemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-0 -right-0.5 h-3 w-3 flex items-center justify-center p-2 rounded-full hover:bg-red-500"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[420px] mr-2" asChild>
          <div className="flex flex-col gap-2 justify-between ">
            <ul>
              {products.map((product, index) => (
                <li key={index}>
                  <CartCard
                    name={product.name}
                    price={product.price}
                    img={{
                      src: product.imageSrc,
                      alt: product.imageAlt,
                    }}
                    quantity={product.quantity}
                    href={product.href}
                    variant={product.color}
                  />
                  <Separator className="my-2" />
                </li>
              ))}
            </ul>
            <div>
              <Link
                href="/checkout"
                className={cn(buttonVariants({ variant: "default" }), "w-full")}
              >
                Checkout
              </Link>
              <Link
                href="/bag"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "w-full mt-2"
                )}
              >
                View shopping bag
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
