import type { Transaction } from '@/types'
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { transactionTypeColorClasses } from '@/lib/consts'
import { calcPercentageChange, formatCurrency } from '@/utils'

interface Props {
  type: Transaction['type']
  amount: number
  prevAmount?: number
}

export function Trend({ type, amount, prevAmount = 0 }: Props) {
  const percentageChange = useMemo(() => Math.round(calcPercentageChange(amount, prevAmount)), [amount, prevAmount])

  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <Card className="flex flex-col p-4 gap-2">
      <CardHeader>
        <CardTitle className={`${transactionTypeColorClasses[type]} font-semibold`}>{capitalizedType}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">
          {amount ? formatCurrency(amount) : formatCurrency(0)}
        </div>
        <div className="flex gap-1 items-center text-sm">
          {percentageChange === 0
            ? <ArrowRight />
            : percentageChange > 0
              ? <ArrowUpRight className="text-green-500" />
              : <ArrowDownRight className="text-red-500" />}
          {percentageChange}
          %
          {percentageChange !== 0 && 'vs last period'}
        </div>
      </CardContent>
    </Card>
  )
}
