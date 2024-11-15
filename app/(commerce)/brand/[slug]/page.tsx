import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { products } from "@/placeholders/products";
import MinimalCard from "@/components/cards/minimal-card";
import { ChevronDown, CircleX } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

type Brand = {
  name: string;
  description: string;
  image: {
    mobile: string;
    desktop: string;
  };
};

const brands: { [key: string]: Brand } = {
  electronics: {
    name: "Electronics",
    description:
      "Explore our wide range of electronic devices and accessories.",
    image: {
      mobile: "https://placehold.co/1200x500",
      desktop: "https://placehold.co/1920x1080",
    },
  },
  clothing: {
    name: "Clothing",
    description: "Discover the latest fashion trends and stylish apparel.",
    image: {
      mobile: "https://placehold.co/1200x500",
      desktop: "https://placehold.co/1920x1080",
    },
  },
};

export const metadata: Metadata = {};

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = brands[params.slug];

  metadata.title = brand?.name || "Brand";
  metadata.description = brand?.description || "";
  metadata.openGraph = {
    title: brand?.name || "Brand",
    description: brand?.description || "",
    images: [
      {
        url: brand?.image.desktop || "",
        width: 1920,
        height: 1080,
        alt: brand?.name || "Brand Image",
      },
    ],
  };

  if (!brand) {
    notFound();
  }

  return (
    <div className="body">
      <div className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/brands">Brand</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{brand.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="rounded-md border overflow-hidden mb-8">
          <picture className="w-full">
            <source
              media="(min-width:1024px)"
              srcSet={brand?.image.mobile || ""}
            />
            <Image
              loading="lazy"
              src={brand?.image.desktop || ""}
              alt={brand?.name || "Brand Image"}
              className="h-full w-full object-cover object-center"
              width={1920}
              height={1080}
            />
          </picture>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="space-y-8">
            <aside>
              <div className="py-2 flex items-center gap-2 overflow-x-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Price
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked>
                      Under ₹1,000
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      ₹1,000 - ₹5,000
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      ₹5,000 - ₹10,000
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Over ₹10,000
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Material
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem>Metal</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Plastic</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Glass</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Wood</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Color
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem>Black</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>White</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Blue</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Red</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Features
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem>
                      Wireless
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Bluetooth
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>USB-C</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Fast Charging
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Date of Entry
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem>
                      Last 7 days
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Last 30 days
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Last 90 days
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      All time
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Storage Capacity
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem>32GB</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>64GB</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>128GB</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>256GB</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Display
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem>LCD</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>LED</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>OLED</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>AMOLED</DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="ml-auto flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <CircleX className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    Sort by
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </aside>
            <main className="space-y-4">
              <div>
                <h1 className="text-3xl font-semibold">{brand?.name}</h1>
                <p className="text-muted-foreground">{brand?.description}</p>
              </div>
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
            </main>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}
