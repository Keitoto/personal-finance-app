import React, { Suspense } from 'react'
import { TransactionList } from '@/app/dashboard/components/TransactionList'
import { TransactionListFallback } from '@/app/dashboard/components/TransactionListFallback'

export default function DashboardPage() {
  return (
    <div>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </div>
  )
}
