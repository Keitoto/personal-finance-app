import React from 'react'
import { Header } from '@/components/Header'
import { TransactionItem } from '@/components/TransactionItem'
import { TransactionSummaryItem } from '@/components/TransactionSummaryItem'
import { Trend } from '@/components/Trend'

export default function page() {
  return (
    <div className="container space-y-8 py-20">
      <div>
        <h2 className="text-xl">Header</h2>
        <hr className="my-4" />
        <Header />
      </div>

      <div>
        <h2 className="text-xl">Trend</h2>
        <hr className="my-4" />
        <div className="flex gap-4">
          <Trend type="income" amount={1000} prevAmount={800} />
          <Trend type="expense" amount={800} prevAmount={1000} />
          <Trend type="investment" amount={100} />
          <Trend type="saving" amount={100} />
        </div>
      </div>

      <div>
        <h2 className="text-xl">Transaction Item</h2>
        <hr className="my-4" />
        <div className="space-y-4">
          <TransactionSummaryItem
            date="2023-10-01"
            amount={1000}
          />
          <TransactionItem
            type="income"
            amount={1000}
            category="salary"
            description="Monthly salary for September"
          />
          <TransactionItem
            type="expense"
            amount={200}
            category="groceries"
            description="Weekly grocery shopping"
          />
          <TransactionItem
            type="investment"
            amount={500}
            category="stocks"
            description="Investment in tech stocks"
          />
        </div>
      </div>

      <div>
        <h2 className="text-xl">Transaction Summary Item</h2>
        <hr className="my-4" />
        <div className="space-y-4">

          <TransactionSummaryItem
            date="2023-10-02"
            amount={200}
          />
          <TransactionSummaryItem
            date="2023-10-03"
            amount={500}
          />
        </div>
      </div>
    </div>
  )
}
