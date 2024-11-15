import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navigation } from "@/placeholders/navigation";

export default function MobileNavigationBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-md">
        <div className="mt-4 border-t">
          <Tabs defaultValue={navigation.categories[0].id} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              {navigation.categories.map((category) => (
                <TabsTrigger
                  key={category.name}
                  value={category.id}
                  className="text-sm font-medium"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {navigation.categories.map((category) => (
              <TabsContent
                key={category.name}
                value={category.id}
                className="mt-6 space-y-10"
              >
                <div className="grid grid-cols-2 gap-x-4">
                  {category.featured.map((item) => (
                    <div key={item.name} className="group relative text-sm">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <img
                          src={item.imageSrc}
                          alt={item.imageAlt}
                          className="object-cover object-center"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        <span
                          className="absolute inset-0 z-10"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                      <p aria-hidden="true" className="mt-1">
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
                {category.sections.map((section) => (
                  <div key={section.name}>
                    <p
                      id={`${category.id}-${section.id}-heading-mobile`}
                      className="font-medium text-gray-900"
                    >
                      {section.name}
                    </p>
                    <ul
                      role="list"
                      aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                      className="mt-6 flex flex-col space-y-6"
                    >
                      {section.items.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-2 block p-2 text-gray-500"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          {navigation.pages.map((page) => (
            <div key={page.name} className="flow-root">
              <a
                href={page.href}
                className="-m-2 block p-2 font-medium text-gray-900"
              >
                {page.name}
              </a>
            </div>
          ))}
        </div>
        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
              Sign in
            </a>
          </div>
          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
              Create account
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
