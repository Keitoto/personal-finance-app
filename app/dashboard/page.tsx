import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { TransactionList } from '@/app/dashboard/components/TransactionList'
import { TransactionListFallback } from '@/app/dashboard/components/TransactionListFallback'
import { TrendLoader } from '@/app/dashboard/components/TrendLoader'
import { TrendLoaderFallback } from '@/app/dashboard/components/TrendLoaderFallback'
import { Button } from '@/components/ui/button'
import { transactionType } from '@/lib/consts'

export default function DashboardPage() {
  return (
    <>
      <section className="mb-8">
        <h1 className="text-2xl font-semibold">Summary</h1>
        <p className="text-gray-600">Welcome to your financial dashboard. Here you can track your income, expenses, savings, and investments.</p>
      </section>

      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {
          transactionType.map(type => (
            <Suspense key={type} fallback={<TrendLoaderFallback />}>
              <TrendLoader type={type} />
            </Suspense>
          ))
        }
      </section>

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <Button asChild variant="outline">
          <Link href="/dashboard/transaction/add" className="flex items-center gap-2">
            <PlusCircle className="size-4" />
            Add
          </Link>
        </Button>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  )
}
