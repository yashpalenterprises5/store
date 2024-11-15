import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductPageSkeleton() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product Image Carousel Skeleton */}
        <div>
          <Skeleton className="w-full h-[500px] rounded-md" />
        </div>

        {/* Product Details Skeleton */}
        <div className="lg:col-span-2">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-8 w-full mb-4" />
          <div className="flex gap-1 mb-4">
            <Skeleton className="h-4 w-8" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-6 w-1/4 mb-2" />
          <Skeleton className="h-8 w-1/3 mb-2" />
          <Skeleton className="h-4 w-1/4 mb-4" />
          <Skeleton className="h-20 w-full mb-4" />
          <Skeleton className="h-8 w-1/4 mb-2" />
          <div className="flex gap-2 mb-4">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-20" />
          </div>
          <div className="flex gap-2 mb-4">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-24" />
          </div>
        </div>
      </div>

      {/* Product Description Skeleton */}
      <Card className="drop-shadow-sm">
        <CardContent className="pt-6">
          <Skeleton className="h-8 w-1/3 mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/4 mb-2" />
          <div className="space-y-2 mb-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <Skeleton className="h-40 w-full" />
        </CardContent>
      </Card>

      {/* Frequently Bought Together Skeleton */}
      <div>
        <Skeleton className="h-8 w-1/3 mb-4" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <Skeleton className="h-48 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-1" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Similar Products Skeleton */}
      <div>
        <Skeleton className="h-8 w-1/3 mb-4" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-8">
          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <Skeleton className="h-48 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-1" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Skeleton */}
      <Card id="reviews" className="drop-shadow-sm">
        <CardContent className="pt-6">
          <Skeleton className="h-8 w-1/3 mb-8" />
          <div className="flex items-start mb-6">
            <div className="mr-8">
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
            <div className="flex-grow space-y-2">
              {[...Array(5)].map((_, index) => (
                <Skeleton key={index} className="h-4 w-full" />
              ))}
            </div>
          </div>
          <Skeleton className="h-6 w-1/4 mb-2" />
          <Skeleton className="h-20 w-full mb-4" />
          <div className="flex flex-wrap gap-2 mb-6">
            {[...Array(6)].map((_, index) => (
              <Skeleton key={index} className="h-8 w-24 rounded-full" />
            ))}
          </div>
          <Skeleton className="h-6 w-1/3 mb-4" />
          <div className="space-y-4 mb-6">
            <Skeleton className="h-6 w-1/3 mb-2" />
            {[...Array(3)].map((_, index) => (
              <div key={index} className="border-b pb-4">
                <div className="flex items-center mb-2">
                  <Skeleton className="h-8 w-8 rounded-full mr-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-20 w-full mb-2" />
                <Skeleton className="h-8 w-20" />
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full">
            <Skeleton className="h-6 w-1/3 mb-2" />
            <Skeleton className="h-4 w-48 mb-2" />
            <Skeleton className="h-32 w-full mb-2" />
            <div className="float-right">
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
