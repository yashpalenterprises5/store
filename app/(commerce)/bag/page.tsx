import BagCard from "@/components/cards/bag-card";
import MinimalCard from "@/components/cards/minimal-card";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { cartItems } from "@/placeholders/cart-items";
import { products } from "@/placeholders/products";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "Shopping Bag",
};

export default function ShoppingBag() {
  return (
    <div className="body">
      <div>
        <h1 className="text-3xl font-bold mb-4">Shopping Bag</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <BagCard
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                variant={String(item.size)}
                quantity={2}
              />
            ))}
          </div>
          <Card className="shadow-none sticky top-8 h-fit">
            <CardHeader>
              <CardTitle className="text-xl">Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span>$99.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Shipping estimate</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tax estimate</span>
                <span>$8.32</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span className="font-medium">Order total</span>
                <span>$112.32</span>
              </div>
              <Link
                href="/checkout"
                className={cn(
                  "w-full",
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  })
                )}
              >
                Checkout <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-6"
      >
        <div className="flex justify-between py-4">
          <h2 className="text-xl md:text-2xl font-bold">You might also like</h2>
          <div className="space-x-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
        <CarouselContent>
          {products.map((product, key) => (
            <CarouselItem key={key} className="basis-1/2 lg:basis-1/4">
              {products.slice(10).map((product, key) => (
                <MinimalCard
                  key={key}
                  title={product.name}
                  secondaryText={product.author}
                  secondaryTextHref={""}
                  image={product.image}
                  imageAlt={product.name}
                  href={`/product/${product.slug}`}
                  price={`₹${product.price}`}
                />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
