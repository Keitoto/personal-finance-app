import type { Transaction } from '@/types'
import { HandCoins, Landmark, PiggyBank, Wallet } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { transactionTypeColorClasses } from '@/lib/consts'
import { formatCurrency } from '@/utils'

type Props = Pick<Transaction, 'type' | 'amount' | 'category' | 'description'>

const typesMap = {
  income: {
    icon: HandCoins,
    colors: transactionTypeColorClasses.income,
  },
  expense: {
    icon: Wallet,
    colors: transactionTypeColorClasses.expense,
  },
  saving: {
    icon: PiggyBank,
    colors: transactionTypeColorClasses.saving,
  },
  investment: {
    icon: Landmark,
    colors: transactionTypeColorClasses.investment,
  },
}

export function TransactionItem({ type, amount, category, description }: Props) {
  const IconComponent = typesMap[type].icon
  const iconColor = typesMap[type].colors

  return (
    <li className="flex items-center gap-4">
      <div className="flex items-center grow">
        <IconComponent className={`size-4 ${iconColor} mr-2 hidden sm:block`} />
        <span>{description}</span>
      </div>

      <div className="min-w-[150px] hidden md:flex items-center">
        {category && <div className="rounded-md text-xs bg-foreground text-background px-2 py-0.5">{category}</div>}

      </div>

      <div className="min-w-[70px] text-right">
        <div className={`text-right font-bold ${type === 'income' ? 'text-green-700' : 'text-red-700'}`}>
          {formatCurrency(amount)}
        </div>
      </div>

      <div className="min-w-[70px] flex justify-end">
        <Button variant="ghost" className="p-2">...</Button>
      </div>
    </li>
  )
}
