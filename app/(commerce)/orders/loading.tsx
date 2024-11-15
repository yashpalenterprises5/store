import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-8 w-64 mb-2" />
      <Skeleton className="h-4 w-full max-w-2xl mb-6" />
      <div className="space-y-8">
        {[1, 2].map((i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
            <div className="divide-y">
              {[1, 2].map((j) => (
                <div key={j} className="flex p-4 gap-4">
                  <Skeleton className="h-24 w-24" />
                  <div className="flex-grow">
                    <Skeleton className="h-4 w-full max-w-md mb-2" />
                    <Skeleton className="h-4 w-full mb-4" />
                    <div className="flex gap-4">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
