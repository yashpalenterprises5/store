"use client";

import { Suspense, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
import MinimalCard from "@/components/cards/minimal-card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { products } from "@/placeholders/products";
import dynamic from "next/dynamic";
import ServerHTMLRenderer from "@/components/html-rendrer";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const ShareMenu = dynamic(() => import("@/components/elements/share"), {
  ssr: false,
});

const CustomerReview = dynamic(
  () => import("@/components/elements/product-review"),
  {
    ssr: false,
  }
);

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params: { slug: id } }: Props) {
  const [selectedVariant, setSelectedVariant] = useState("Digital");
  const [quantity, setQuantity] = useState(1);

  const product = products.find((product) => product.slug === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="body">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
        {/* Product Image Carousel */}
        <div className="md:col-span-2 lg:col-span-1">
          <Carousel className="relative">
            <CarouselContent>
              {[1].map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={product.image}
                    alt={`Product image ${index}`}
                    width={600}
                    height={600}
                    className="w-full h-auto rounded-md border"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute space-x-2 right-2 bottom-2">
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </div>
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-2">
          <DynamicBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "T-Shirts", href: "/t-shirts" },
              {
                label: "Everyday Ruck Snack",
                isCurrentPage: true,
              },
            ]}
          />
          <div>
            <div className="flex justify-between items-start">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                {product.name}
              </h1>
              <div className="flex gap-1 items-center h-full">
                <Button size={"icon"} variant="outline">
                  <Heart aria-label="wishlist" className="w-4 h-4" />
                </Button>
                <Suspense fallback={<Skeleton className="w-8 h-8" />}>
                  <ShareMenu />
                </Suspense>
              </div>
            </div>

            <div className="flex gap-1 items-center">
              <span className="text-sm">4.0</span>
              <div className="flex h-full">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <a
                href="#reviews"
                className="text-sm text-gray-500 hover:underline"
              >
                1624 reviews
              </a>
            </div>
          </div>
          <div>
            <Badge
              className="rounded-full w-fit bg-red-600 hover:bg-red-500"
              color="green"
            >
              <a href="#" className="text-white">
                Great India Sale
              </a>
            </Badge>
            <div className="mt-2">
              <div>
                <span className="text-3xl font-extralight text-red-600 mr-2">
                  -20%
                </span>
                <span className="text-3xl font-bold">
                  {`₹${product.price}`}
                </span>
              </div>
              <div>
                <span className="text-sm text-gray-500">M.R.P.:</span>
                <span className="text-sm text-gray-500 ml-1 line-through">
                  {`₹${product.price + product.price * 0.2}`}
                </span>
              </div>
            </div>
          </div>
          <p>{product?.short_description}</p>
          <div>
            <h3 className="text-sm font-semibold mb-2">Options</h3>
            <div className="flex gap-2">
              <Button
                variant={
                  selectedVariant === "Soft cover" ? "default" : "outline"
                }
                onClick={() => setSelectedVariant("Soft cover")}
              >
                Soft cover
              </Button>
              <Button
                variant={
                  selectedVariant === "Hard cover" ? "default" : "outline"
                }
                onClick={() => setSelectedVariant("Hard cover")}
              >
                Hard cover
              </Button>
              <Button
                variant={selectedVariant === "Digital" ? "default" : "outline"}
                onClick={() => setSelectedVariant("Digital")}
              >
                Digital
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Select
              value={quantity.toString()}
              onValueChange={(value) => setQuantity(parseInt(value))}
            >
              <SelectTrigger className="w-20 h-10">
                <SelectValue placeholder="Quantity" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Quantity</SelectLabel>
                  {Array.from({ length: 40 }, (_, index) => (
                    <SelectItem key={index + 1} value={(index + 1).toString()}>
                      {index + 1}x
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button size={"lg"} variant={"outline"}>
              Add to bag <ShoppingBag className="ml-2 w-4 h-4" />
            </Button>
            <Button size={"lg"}>Buy Now</Button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <Card className="drop-shadow-sm">
        <CardContent className="pt-6">
          <ServerHTMLRenderer content={product?.long_description} />
        </CardContent>
      </Card>

      {/* Frequently Bought Together */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Frequently Bought Together</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-4">
          {products.map((product, key) => (
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
        </div>
      </div>

      {/* Similar Products */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-4">
          {products.map((product, key) => (
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
        </div>
      </div>
      <CustomerReview />
    </div>
  );
}
