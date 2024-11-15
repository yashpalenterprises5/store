import MinimalCard from "@/components/cards/minimal-card";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { callouts } from "@/placeholders/collections";
import { products } from "@/placeholders/products";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to our store",
};

export default function Home() {
  return (
    <div className="body">
      <Carousel className="relative">
        <CarouselContent>
          <CarouselItem>
            <div className="rounded-md overflow-hidden">
              <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px]">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=2.1"
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=2.1"
                  />
                  <source
                    media="(min-width: 1024px)"
                    srcSet="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=2.1"
                  />
                  <Image
                    src="https://www.bookswagon.com/bannerimages/70_inr.jpg?v=2.1"
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </picture>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="rounded-md overflow-hidden">
              <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px]">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=2.1"
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=2.1"
                  />
                  <source
                    media="(min-width: 1024px)"
                    srcSet="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=2.1"
                  />
                  <Image
                    src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=2.1"
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </picture>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="rounded-md overflow-hidden">
              <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px]">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=2.1"
                  />
                  <source
                    media="(min-width: 768px) and (max-width: 1023px)"
                    srcSet="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=2.1"
                  />
                  <source
                    media="(min-width: 1024px)"
                    srcSet="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=2.1"
                  />
                  <Image
                    src="https://www.bookswagon.com/bannerimages/85_inr.jpg?v=2.1"
                    alt="Placeholder"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </picture>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute hidden md:flex gap-2 bottom-4 right-4">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>

      <Carousel className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">Collections</h2>
          <a className="space-x-2">
            <CarouselPrevious />
            <CarouselNext />
          </a>
        </div>
        <CarouselContent className="-ml-2 md:-ml-4">
          {callouts.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="rounded-none border-none">
                <CardContent className="p-0">
                  <a href={item.href} className="block">
                    <div className="relative aspect-video overflow-hidden rounded-md border">
                      <Image
                        src={item.imageSrc}
                        alt={`Photo by ${item.name}`}
                        className="object-cover transition-transform duration-300 hover:scale-105 hover:opacity-90"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  </a>
                </CardContent>
                <CardFooter className="p-0 mt-1">
                  <p className="text-xs text-muted-foreground">
                    {item.name}
                    {" / "}
                    <span className="font-semibold text-foreground">
                      {item.description}
                    </span>
                  </p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div>
        <div className="flex justify-between">
          <h2 className="text-xl md:text-2xl font-bold">Trending products</h2>
          <a
            className="flex text-sm md:text-base items-center hover:underline"
            href="#"
          >
            See everyting <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-4">
          {products.slice(0, 10).map((product, key) => (
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
      <div>
        <h2 className="text-xl md:text-2xl font-bold">Evergreen books</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-4">
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
        </div>
      </div>
    </div>
  );
}
