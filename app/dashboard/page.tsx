import React, { Suspense } from 'react'
import { TransactionList } from '@/app/dashboard/components/TransactionList'
import { TransactionListFallback } from '@/app/dashboard/components/TransactionListFallback'
import { TrendLoader } from '@/app/dashboard/components/TrendLoader'
import { TrendLoaderFallback } from '@/app/dashboard/components/TrendLoaderFallback'

export default function DashboardPage() {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-2xl font-semibold">Summary</h1>
        <p className="text-gray-600">Welcome to your financial dashboard. Here you can track your income, expenses, savings, and investments.</p>
      </section>

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

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Transactions</h2>

      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  )
}
