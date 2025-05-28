import React, { Suspense } from 'react'
import { TransactionList } from '@/app/dashboard/components/TransactionList'
import { TransactionListFallback } from '@/app/dashboard/components/TransactionListFallback'
import { TrendLoader } from '@/app/dashboard/components/TrendLoader'
import { TrendLoaderFallback } from '@/app/dashboard/components/TrendLoaderFallback'

export default function DashboardPage() {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense fallback={<TrendLoaderFallback />}>
          <TrendLoader type="income" />
        </Suspense>

        <Suspense fallback={<TrendLoaderFallback />}>
          <TrendLoader type="expense" />
        </Suspense>

        <Suspense fallback={<TrendLoaderFallback />}>
          <TrendLoader type="saving" />
        </Suspense>

        <Suspense fallback={<TrendLoaderFallback />}>
          <TrendLoader type="investment" />
        </Suspense>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  )
}
