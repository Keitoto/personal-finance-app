import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function TrendLoaderFallback() {
  return (
    <Card className="flex flex-col p-4 gap-2">
      <CardHeader>
        <Skeleton className="h-4 w-24" />
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-full" />
      </CardContent>
    </Card>
  )
}
