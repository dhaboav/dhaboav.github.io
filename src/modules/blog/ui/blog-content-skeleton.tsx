import { Skeleton } from '@/ui/skeleton';

export const BlogContentSkeleton = () => {
  return (
    <div className="section-container pt-28">
      <div className="mx-auto max-w-3xl px-4">
        {/* Header Placeholder */}
        <div className="border-border mb-10 border-b pb-6 flex flex-col gap-6">
          <Skeleton className="h-3 w-24" />
          <div className="space-y-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-3/4" />
          </div>
          <Skeleton className="h-3 w-32" />
        </div>

        {/* Content Placeholder */}
        <div className="flex flex-col space-y-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>

          <div className="space-y-4">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          <Skeleton className="w-full h-64 rounded-xl" />

          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>

        {/* Footer Placeholder */}
        <div className="border-border border-t mt-10 py-6">
          <Skeleton className="h-3 w-28" />
        </div>
      </div>
    </div>
  );
};
