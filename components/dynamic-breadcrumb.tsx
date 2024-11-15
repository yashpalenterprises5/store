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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type BreadcrumbItemType = {
  label: string;
  href?: string;
  isCurrentPage?: boolean;
};

interface BreadcrumbProps {
  items: BreadcrumbItemType[];
  className?: string;
}

export function DynamicBreadcrumb({ items, className }: BreadcrumbProps) {
  const hasExtraItems = items.length > 3;
  const firstItem = items[0];
  const middleItems = hasExtraItems ? items.slice(1, items.length - 2) : [];
  const visibleItems = hasExtraItems
    ? items.slice(items.length - 2)
    : items.slice(1);

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={firstItem.href}>
            {firstItem.label}
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
        {middleItems.length > 0 && (
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {middleItems.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        )}

        {visibleItems.map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.isCurrentPage ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
