import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

export function TransactionListFallback() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <TransactionSummaryItemSkeleton />
        <Separator className="my-4" />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
      <div className="space-y-4">
        <TransactionSummaryItemSkeleton />
        <Separator className="my-4" />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>
    </div>
  )
}

function TransactionItemSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center grow">
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="min-w-[150px] hidden md:flex items-center">
        <Skeleton className="h-4 w-[150px]" />
      </div>

      <div className="min-w-[70px]">
        <Skeleton className="h-4 w-[70px]" />
      </div>

      <div className="min-w-[70px] flex justify-end">
        <Skeleton className="h-4 w-[70px]" />
      </div>
    </div>
  )
}
function TransactionSummaryItemSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center grow">
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="min-w-[70px]">
        <Skeleton className="h-4 w-[70px]" />
      </div>

      <div className="min-w-[70px] flex justify-end">

      </div>
    </div>
  )
}
