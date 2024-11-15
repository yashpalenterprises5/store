import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface Order {
  id: string;
  orderNumber: string;
  datePlaced: string;
  totalAmount: number;
  products: Product[];
  deliveryDate: string;
}

const dummyData: Order[] = [
  {
    id: "1",
    orderNumber: "WU88191111",
    datePlaced: "Jul 6, 2021",
    totalAmount: 160.0,
    deliveryDate: "July 12, 2021",
    products: [
      {
        id: "p1",
        name: "Micro Backpack",
        price: 70.0,
        description:
          "Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.",
        imageUrl: "https://placehold.co/100",
      },
      {
        id: "p2",
        name: "Nomad Shopping Tote",
        price: 90.0,
        description:
          "This durable shopping tote is perfect for the world traveler. Its yellow canvas construction is water, fray, tear resistant. The matching handle, backpack straps, and shoulder loops provide multiple carry options for a day out on your next adventure.",
        imageUrl: "https://placehold.co/100",
      },
    ],
  },
  {
    id: "2",
    orderNumber: "AT48441546",
    datePlaced: "Dec 22, 2020",
    totalAmount: 40.0,
    deliveryDate: "January 5, 2021",
    products: [
      {
        id: "p3",
        name: "Double Stack Clothing Bag",
        price: 40.0,
        description:
          "Save space and protect your favorite clothes in this double-layer garment bag. Each compartment easily holds multiple pairs of jeans or tops, while keeping your items neatly folded throughout your trip.",
        imageUrl: "https://placehold.co/100",
      },
    ],
  },
];

export default function OrderList() {
  return (
    <div className="space-y-8">
      {dummyData.map((order) => (
        <div key={order.id} className="border rounded-lg overflow-hidden">
          <div className="flex justify-between items-start sm:items-center p-4 bg-muted">
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row items-baseline sm:gap-2">
                <h2 className="text-2xl text-primary font-bold">
                  Order #{order.id}
                </h2>
                <span className="text-sm text-muted-foreground">
                  Placed on {order.datePlaced}
                </span>
              </div>
              <div className="flex">
                <div className="font-semibold">Total:</div>
                <div className="ml-1">
                  ${order.totalAmount.toFixed(2)}
                </div>
              </div>
            </div>
            <Button variant="outline" className="font-semibold" size={"sm"}>
              Invoice
              <Download className="ml-1 w-3 h-3" />
            </Button>
          </div>

          <div className="divide-y">
            {order.products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row p-4 gap-4"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                />
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between items-start">
                    <h3 className="font-semibold">{product.name}</h3>
                    <span className="font-semibold">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <div className="mt-2 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <div className="flex text-sm items-center text-green-500">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Delivered on {order.deliveryDate}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">View product</Button>
                      <Button>Buy again</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
