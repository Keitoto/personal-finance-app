import type { ApiTransaction, Transaction } from '@/types'
import React from 'react'
import { TransactionItem } from '@/components/TransactionItem'
import { TransactionSummaryItem } from '@/components/TransactionSummaryItem'
import { Separator } from '@/components/ui/separator'

async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch('http://localhost:3100/transactions', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch transactions: ${res.status}`)
  }

  const data = await res.json()

  return data.map((item: ApiTransaction) => ({
    ...item,
    createdAt: item.created_at,
  }
  ))
}

function groupAndSumTransactionsByDate(transactions: Transaction[]) {
  const grouped: { [date: string]: { transactions: Transaction[], amount: number } } = {}
  for (const transaction of transactions) {
    const date = transaction.createdAt.split('T')[0]
    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 }
    }
    grouped[date].transactions.push(transaction)
    const amount = transaction.type === 'income' ? transaction.amount : -transaction.amount
    grouped[date].amount += amount
  }
  return grouped
}

export async function TransactionList() {
  try {
    const transactions = await getTransactions()

    if (transactions.length === 0) {
      return <div className="text-gray-500">No transactions found.</div>
    }

    const grouped = groupAndSumTransactionsByDate(transactions)

    return (
      <section className="">
        <ul className="space-y-8">
          {Object.entries(grouped).map(([date, { transactions, amount }]) => (
            <li key={date} className="">
              <TransactionSummaryItem date={date} amount={amount} />
              <Separator className="my-4" />
              <ul className="">
                {transactions.map(transaction => (
                  <TransactionItem
                    key={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    category={transaction.category}
                    description={transaction.description}
                  />
                ))}
              </ul>
            </li>
          ))}
        </ul>
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
