import React from 'react'
import { formatCurrency } from '@/utils'

interface Props {
  date: string
  amount: number
}

export function TransactionSummaryItem({ date, amount }: Props) {
  const formattedAmount = formatCurrency(amount)

  return (
    <div className="flex font-semibold text-muted-foreground gap-4">
      <div className="grow">
        {date}
      </div>

      <div className="min-w-[70px] text-right font-semibold">{formattedAmount}</div>
      <div className="min-w-[70px]"></div>
    </div>
  )
}
