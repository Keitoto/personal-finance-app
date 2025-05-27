import type { Transaction } from '@/types'
import React from 'react'
import { TransactionItem } from '@/components/TransactionItem'

async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch('http://localhost:3100/transactions', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch transactions: ${res.status}`)
  }

  return res.json()
}

export async function TransactionList() {
  try {
    const transactions = await getTransactions()

    if (transactions.length === 0) {
      return <div className="text-gray-500">No transactions found.</div>
    }

    return (
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <div className="space-y-1">
          {transactions.map(transaction => (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              category={transaction.category}
              description={transaction.description}
            />
          ))}
        </div>
      </section>
    )
  }
  catch (error) {
    console.error('Failed to load transactions:', error)
    return (
      <div className="text-red-500">
        Error loading transactions
      </div>
    )
  }
}
