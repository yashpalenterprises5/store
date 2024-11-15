"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { callouts } from "@/placeholders/collections";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/placeholders/products";
import MinimalCard from "@/components/cards/minimal-card";

const components = {
  processor: [
    { id: "ryzen5", name: "AMD Ryzen 5 7600X", price: 299 },
    { id: "ryzen7", name: "AMD Ryzen 7 7700X", price: 399 },
    { id: "ryzen9", name: "AMD Ryzen 9 7900X", price: 549 },
    { id: "i5", name: "Intel Core i5-13600K", price: 319 },
    { id: "i7", name: "Intel Core i7-13700K", price: 419 },
    { id: "i9", name: "Intel Core i9-13900K", price: 589 },
  ],
  motherboard: [
    { id: "b650", name: "MSI B650M Gaming WiFi", price: 199 },
    { id: "x670", name: "ASUS ROG X670E-E", price: 499 },
    { id: "b760", name: "Gigabyte B760 Gaming X", price: 189 },
    { id: "z790", name: "MSI MPG Z790 Edge", price: 399 },
  ],
  ram: [
    { id: "ram16", name: "32GB (16GBx2) Ripjaws", price: 89 },
    { id: "ram32", name: "64GB (32GBx2) Trident Z", price: 179 },
  ],
  gpu: [
    { id: "rtx4060", name: "RTX 4060 Ti 8GB", price: 399 },
    { id: "rtx4070", name: "RTX 4070 12GB", price: 599 },
    { id: "rtx4080", name: "RTX 4080 16GB", price: 1199 },
    { id: "rx7600", name: "RX 7600 8GB", price: 269 },
    { id: "rx7700", name: "RX 7700 XT 12GB", price: 449 },
    { id: "rx7800", name: "RX 7800 XT 16GB", price: 499 },
  ],
  storage: [
    { id: "ssd500", name: "500GB NVMe SSD", price: 49 },
    { id: "ssd1000", name: "1TB NVMe SSD", price: 89 },
    { id: "ssd2000", name: "2TB NVMe SSD", price: 159 },
  ],
  case: [
    { id: "case1", name: "Lian Li O11 Air Mini", price: 99 },
    { id: "case2", name: "NZXT H7 Flow", price: 129 },
    { id: "case3", name: "Corsair 4000D", price: 89 },
  ],
  cooler: [
    { id: "cooler1", name: "DeepCool AK620", price: 65 },
    { id: "cooler2", name: "Arctic Liquid II 240", price: 99 },
    { id: "cooler3", name: "NZXT Kraken X53", price: 129 },
  ],
};

const addons = {
  operating_system: [
    { id: "win11", name: "Windows 11 Home", price: 139 },
    { id: "win11pro", name: "Windows 11 Pro", price: 199 },
  ],
  monitor: [
    { id: "mon24", name: '24" 1080p Monitor', price: 149 },
    { id: "mon27", name: '27" 1440p Monitor', price: 299 },
    { id: "mon32", name: '32" 4K Monitor', price: 499 },
  ],
  keyboard: [
    { id: "kb1", name: "Basic Keyboard", price: 29 },
    { id: "kb2", name: "Mechanical Keyboard", price: 99 },
  ],
  mouse: [
    { id: "mouse1", name: "Basic Mouse", price: 19 },
    { id: "mouse2", name: "Gaming Mouse", price: 59 },
  ],
};

export default function Component() {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const calculateTotal = () => {
    return Object.entries(selected).reduce((total, [category, id]) => {
      const item = [...Object.values(components), ...Object.values(addons)]
        .flat()
        .find((i) => i.id === id);
      return total + (item?.price || 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background p-6 space-y-16">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">PC Configurator</h1>
          <p className="text-muted-foreground">
            Build your custom PC by selecting components below.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-3">
          <Tabs defaultValue="components" className="col-span-2">
            <TabsList className="grid w-full grid-cols-2 h-12">
              <TabsTrigger className="h-full" value="components">
                Components
              </TabsTrigger>
              <TabsTrigger className="h-full" value="addons">
                Add-ons
              </TabsTrigger>
            </TabsList>
            <TabsContent value="components" className="space-y-2">
              {Object.entries(components).map(([category, items]) => (
                <Dialog key={category}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-12 w-full justify-between"
                    >
                      <span className="capitalize">{category}</span>
                      <span className="text-muted-foreground">
                        {selected[category]
                          ? items.find((i) => i.id === selected[category])?.name
                          : "Select"}
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="capitalize">
                        Select {category}
                      </DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[400px] pr-4">
                      <div className="grid gap-2">
                        {items.map((item) => (
                          <Card
                            key={item.id}
                            className={`cursor-pointer transition-colors hover:bg-muted ${
                              selected[category] === item.id
                                ? "border-primary"
                                : ""
                            }`}
                            onClick={() =>
                              setSelected((prev) => ({
                                ...prev,
                                [category]: item.id,
                              }))
                            }
                          >
                            <CardHeader>
                              <CardTitle className="flex items-center justify-between text-base">
                                {item.name}
                                <span className="text-sm font-normal text-muted-foreground">
                                  ${item.price}
                                </span>
                              </CardTitle>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              ))}
            </TabsContent>
            <TabsContent value="addons" className="space-y-2">
              {Object.entries(addons).map(([category, items]) => (
                <Dialog key={category}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="h-12 w-full justify-between"
                    >
                      <span className="capitalize">{category}</span>
                      <span className="text-muted-foreground">
                        {selected[category]
                          ? items.find((i) => i.id === selected[category])?.name
                          : "Select"}
                      </span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="capitalize">
                        Select {category}
                      </DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[400px] pr-4">
                      <div className="grid gap-2">
                        {items.map((item) => (
                          <Card
                            key={item.id}
                            className={`cursor-pointer transition-colors hover:bg-muted ${
                              selected[category] === item.id
                                ? "border-primary"
                                : ""
                            }`}
                            onClick={() =>
                              setSelected((prev) => ({
                                ...prev,
                                [category]: item.id,
                              }))
                            }
                          >
                            <CardHeader>
                              <CardTitle className="flex items-center justify-between text-base">
                                {item.name}
                                <span className="text-sm font-normal text-muted-foreground">
                                  ${item.price}
                                </span>
                              </CardTitle>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              ))}
            </TabsContent>
          </Tabs>
          <div className="relative space-y-2 h-fit">
            <div className="rounded-md border overflow-hidden">
              <Image
                src="https://placehold.co/400x400"
                alt="referance image"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute rounded-md border px-2 py-1 bg-background right-2 bottom-2">
              <div className="text-xl font-bold">
                {calculateTotal() === 0 ? "Pick Parts" : `$${calculateTotal()}`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Pre Built PC</h2>
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
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">PC Configurator</h1>
          <p className="text-muted-foreground">
            Build your custom PC by selecting components below.
          </p>
        </div>

        <div>
          <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl font-bold">Budget Gaming</h2>
            <a
              className="flex text-sm md:text-base items-center hover:underline"
              href="#"
            >
              See everyting <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
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
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl font-bold">
              Mid-Range Powerhouse
            </h2>{" "}
            <a
              className="flex text-sm md:text-base items-center hover:underline"
              href="#"
            >
              See everyting <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
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
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl md:text-2xl font-bold">High-End Dream</h2>{" "}
            <a
              className="flex text-sm md:text-base items-center hover:underline"
              href="#"
            >
              See everyting <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-4">
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
      </div>
    </div>
  );
}
