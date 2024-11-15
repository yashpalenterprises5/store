import Link from "next/link";
import { NavigationBarClient } from "./navigation-bar-client";
import { navigation } from "@/placeholders/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Book } from "lucide-react";

export default function NavigationBar() {
  return (
    <div className="relative">
      <header className="relative border-b">
        <nav
          aria-label="Top"
          className="mx-auto max-w-screen-2xl px-2 sm:px-4 lg:px-8"
        >
          <div className="flex h-16 items-center justify-between">
            <div className="flex gap-2 lg:gap-4">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative flex items-center text-lg md:text-sm lg:text-lg font-semibold">
                  <Book className="w-5 h-5 mr-1" />
                  YesBooks
                </div>
              </Link>

              {/* Desktop menu */}
              <div className="hidden *:text-sm lg:self-stretch md:flex items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navigation.categories.map((category) => (
                      <NavigationMenuItem key={category.name}>
                        <NavigationMenuTrigger className="text-xs lg:text-sm">
                          {category.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-10 p-6 w-[720px] xl:w-[1080px]">
                            <div className="grid grid-cols-2 gap-x-8">
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative sm:text-sm"
                                >
                                  <div className="aspect-[4/5] overflow-hidden rounded-lg group-hover:opacity-75">
                                    <Image
                                      src={item.imageSrc}
                                      alt={item.imageAlt}
                                      className="w-full h-full object-center object-cover"
                                      width={200}
                                      height={250}
                                    />
                                  </div>
                                  <div>
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-primary"
                                    >
                                      <span
                                        className="inset-0 z-10"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              {category.sections.map((section) => (
                                <div key={section.name}>
                                  <p
                                    id={`${section.name}-heading`}
                                    className="font-semibold text-lg"
                                  >
                                    {section.name}
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby={`${section.name}-heading`}
                                    className="mt-6 space-y-4 sm:mt-4 sm:space-y-2"
                                  >
                                    {section.items.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="hover:underline underline-offset-1"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ))}

                    {navigation.pages.map((page) => (
                      <NavigationMenuItem key={page.name}>
                        <Link href={page.href} legacyBehavior passHref>
                          <NavigationMenuLink
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                              "text-xs lg:text-sm"
                            )}
                          >
                            {page.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            {/* Client-side interactive elements */}
            <NavigationBarClient />
          </div>
        </nav>
      </header>
    </div>
  );
}
