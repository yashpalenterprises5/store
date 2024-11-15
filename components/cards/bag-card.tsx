import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface BagCardProps {
  name: string;
  variant: string;
  price: number;
  image: string;
  quantity: number;
}

export default function BagCard({
  name,
  variant,
  price,
  image,
  quantity,
}: BagCardProps) {
  return (
    <Card className="shadow-none">
      <CardContent className="relative p-4">
        <div className="md:flex items-center gap-4 w-full">
          <div className="flex gap-4 flex-grow">
            <div className="border rounded-md overflow-hidden h-fit">
              <Image
                className="md:w-36 md:h-36 object-cover"
                loading="lazy"
                width={80}
                height={80}
                src={image}
                alt={name}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm md:text-base font-medium leading-tight">{name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{variant}</p>
              <div className="flex mt-2 items-center gap-2">
                <Select defaultValue="1">
                  <SelectTrigger className="w-14 md:w-20">
                    <SelectValue placeholder="Qty" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((num, index) => (
                      <SelectItem key={index} value={String(num)}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="font-medium">${price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          title="remove item"
          className="text-xs md:text-sm text-muted-foreground text-red-500 hover:underline hover:text-red-700 mt-2 absolute right-2 bottom-1 md:right-4 md:bottom-2"
        >
          Remove
        </button>
      </CardContent>
    </Card>
  );
}
