import Image from "next/image";
import { Button } from "../ui/button";

interface CartCardProps {
  name: string;
  img: {
    src: string;
    alt?: string;
  };
  href: string;
  price: string;
  quantity: number;
  variant: string;
}

export default function CartCard({
  name,
  img,
  href,
  price,
  quantity,
  variant,
}: CartCardProps) {
  return (
    <div className="flex gap-2 relative">
      <div className="h-24 w-30 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          loading="lazy"
          alt={img.alt ? img.alt : name}
          src={img.src}
          width={94}
          height={94}
        />
      </div>
      <div className="flex flex-1 flex-col">
        <div>
          <h3 className="text-sm font-medium">
            <a className="hover:underline" href={href}>
              {name}
            </a>
            <p className="text-xs text-muted-foreground">{variant}</p>
          </h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-sm font-medium">{price}</p>
            <span className="text-muted-foreground">
              <Button
                size={"sm"}
                variant={"ghost"}
                className="absolute text-sm hover:text-red-500 bottom-0 right-0"
                type="button"
              >
                Remove
              </Button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
