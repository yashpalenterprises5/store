import MinimalCard from "@/components/cards/minimal-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { products } from "@/placeholders/products";
import {
  ChevronDown,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleX,
} from "lucide-react";
import { Metadata } from "next";

export var metadata: Metadata = {
  description: "search results",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q ?? "";
  metadata.title = query;

  return (
    <section className="body">
      <div>
        <header className="mb-4">
          <h2 className="text-xl font-bold sm:text-2xl">Results</h2>
          <h3 className="text-sm text-muted-foreground">
            Check each product page for other buying options. Price and other
            details may vary based on product size and colour.
          </h3>
        </header>
        <div className="block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>
            <ChevronRightIcon className="w-5 h-5 text-slate-500" />
          </button>
        </div>
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
                    Under ₹500
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    ₹500 - ₹1,000
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    ₹1,000 - ₹2,000
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Over ₹2,000
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Genre
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuCheckboxItem>
                    Mystery & Thriller
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Romance</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Science Fiction & Fantasy
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Biographies & Memoirs
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Format
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuCheckboxItem>Hardcover</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Paperback</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Ebook</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Audiobook</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Publication Date
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuCheckboxItem>
                    Last 30 days
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Last 90 days
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>This Year</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>All Time</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Author
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuCheckboxItem>
                    J.K. Rowling
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Stephen King
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    George R.R. Martin
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Margaret Atwood
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="ml-auto flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <CircleX className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sort By
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked>
                      Title, DESC
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Title, ASC
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Price, DESC
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Price, ASC
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Publication Date, DESC
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Publication Date, ASC
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </aside>
          <main className="space-y-4">
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
    </section>
  );
}
