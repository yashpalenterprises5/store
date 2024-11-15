import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { IndianRupee } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const DynamicCartItems = dynamic(() => import("./_components/cart-items"), {
  ssr: false,
});
const DynamicAddressSection = dynamic(
  () => import("./_components/address-section"),
  { ssr: false }
);
const DynamicPaymentSection = dynamic(
  () => import("./_components/payment-section"),
  { ssr: false }
);
const DynamicDeliverySection = dynamic(
  () => import("./_components/delivery-section"),
  { ssr: false }
);
const DynamicDiscountSection = dynamic(
  () => import("./_components/discount-section"),
  { ssr: false }
);
const DynamicProductCarousel = dynamic(
  () => import("./_components/product-carousel"),
  { ssr: false }
);

function CartItemsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton className="h-24 w-24 rounded" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

function AddressSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/4" />
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
}

function PaymentSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/4" />
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    </div>
  );
}

function DeliverySkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/4" />
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    </div>
  );
}

function DiscountSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-1/4" />
      <div className="flex space-x-2">
        <Skeleton className="h-10 flex-grow" />
        <Skeleton className="h-10 w-20" />
      </div>
    </div>
  );
}

function ProductCarouselSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-1/4" />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="body">
      <div>
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <div className="md:grid grid-cols-2 lg:grid-cols-5 gap-4 space-y-4 md:space-y-0">
          <div className="space-y-4 lg:col-span-3">
            <Suspense fallback={<CartItemsSkeleton />}>
              <DynamicCartItems />
            </Suspense>
          </div>
          <Card className="shadow-none sticky top-8 h-fit lg:col-span-2 p-4">
            <CardTitle className="mb-4 text-2xl font-bold">
              Order Detail
            </CardTitle>
            <CardContent className="space-y-4 p-0">
              <Suspense fallback={<AddressSkeleton />}>
                <DynamicAddressSection />
              </Suspense>
              <Suspense fallback={<PaymentSkeleton />}>
                <DynamicPaymentSection />
              </Suspense>
              <Suspense fallback={<DeliverySkeleton />}>
                <DynamicDeliverySection />
              </Suspense>
              <Separator />
              <Suspense fallback={<DiscountSkeleton />}>
                <DynamicDiscountSection />
              </Suspense>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span>$99.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Shipping</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Discount</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Tax</span>
                  <span>$8.32</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>$112.32</span>
                </div>
              </div>
              <Button size="lg" className="w-full">
                <IndianRupee className="h-3.5 w-3.5 mr-1" />
                Place Order
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Suspense fallback={<ProductCarouselSkeleton />}>
        <DynamicProductCarousel />
      </Suspense>
    </div>
  );
}
