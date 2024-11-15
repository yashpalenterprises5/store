"use client";

import MinimalCard from "@/components/cards/minimal-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from "@/placeholders/products";

export default function ProductCarousel() {
  return (
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
