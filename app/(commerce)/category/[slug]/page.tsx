import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Breadcrumb,
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

type Category = {
  name: string;
  description: string;
  image: {
    mobile: string;
    desktop: string;
  };
};

const categories: { [key: string]: Category } = {
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

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug];

  metadata.title = category.name;
  metadata.description = category.description;
  metadata.openGraph = {
    title: category.name,
    description: category.description,
    images: [
      {
        url: category.image.desktop,
        width: 1920,
        height: 1080,
        alt: category.name,
      },
    ],
  };

  if (!category) {
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
              <BreadcrumbLink href="/category">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{category.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="rounded-md overflow-hidden mb-8">
          <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px]">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="https://placehold.co/300x200"
              />
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                srcSet="https://placehold.co/600x400"
              />
              <source
                media="(min-width: 1024px)"
                srcSet="https://placehold.co/800x500"
              />
              <Image
                src="https://placehold.co/800x500"
                alt={`${category.name} banner`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </picture>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="space-y-8">
            <aside>
              <div className="py-2 flex flex-col lg:flex-row justify-between items-start gap-2">
                <div className="flex flex-wrap gap-2">
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
                      <DropdownMenuCheckboxItem>
                        Plastic
                      </DropdownMenuCheckboxItem>
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
                      <DropdownMenuCheckboxItem>
                        AMOLED
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="flex items-center gap-2">
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
                <h1 className="text-3xl font-semibold">{category.name}</h1>
                <p className="text-muted-foreground">{category.description}</p>
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
