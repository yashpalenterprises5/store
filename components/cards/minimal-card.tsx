import { cn } from "@/lib/utils";
import Image from "next/image";

interface MinimalCardProps {
  title: string;
  secondaryText: string;
  secondaryTextHref: string;
  image: string;
  imageAlt: string;
  href: string;
  price: string;
  className?: string;
}

export default function MinimalCard({
  title,
  secondaryText,
  secondaryTextHref,
  image,
  imageAlt,
  href,
  price,
  className,
}: MinimalCardProps) {
  return (
    <div className={cn("group relative", className)}>
      <div className="aspect-square w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          className="h-full w-full object-cover object-center lg:h-full lg:w-full border rounded-md"
          loading="lazy"
          width={300}
          height={300}
          alt={imageAlt}
          src={image}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <a href={secondaryTextHref} className="mt-1 text-sm text-gray-500">
            {secondaryText}
          </a>
        </div>
        <p className="text-sm font-medium">{price}</p>
      </div>
    </div>
  );
}
