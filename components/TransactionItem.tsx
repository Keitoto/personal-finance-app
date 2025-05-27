import { HandCoins, Landmark, PiggyBank, Wallet } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/utils'

interface Props {
  type: 'income' | 'expense' | 'investment' | 'saving'
  amount: number
  category: string
  description?: string
}

const typesMap = {
  income: {
    icon: HandCoins,
    colors: 'text-green-500 dark:text-green-400',
  },
  expense: {
    icon: Wallet,
    colors: 'text-red-500 dark:text-red-400',
  },
  saving: {
    icon: PiggyBank,
    colors: 'text-indigo-500 dark:text-indigo-400',
  },
  investment: {
    icon: Landmark,
    colors: 'text-yellow-500 dark:text-yellow-400',
  },
}

export default function TransactionItem({ type, amount, category, description }: Props) {
  const IconComponent = typesMap[type].icon
  const iconColor = typesMap[type].colors

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center grow">
        <IconComponent className={`size-4 ${iconColor} mr-2 hidden sm:block`} />
        <span className="">{description}</span>
      </div>

      <div className="min-w-[150px] hidden md:flex items-center justify-self-start">
        <small className=" text-sm font-semibold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">{category}</small>
      </div>

      <div className="min-w-[100px]">
        <div className={`text-lg text-right font-bold ${type === 'income' ? 'text-green-700' : 'text-red-700'}`}>
          {formatCurrency(amount)}
        </div>
      </div>

      <div>
        <Button variant="ghost" className="p-2">...</Button>
      </div>
    </div>
  )
}
