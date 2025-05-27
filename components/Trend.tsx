import { calcPercentageChange, formatCurrency } from "@/utils";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { useMemo } from "react";

interface Props {
  type: 'income' | 'expense' | 'investment' | 'saving';
  amount: number;
  prevAmount?: number;
}

const colorClasses = {
  'income': 'text-green-700 dark:text-green-300',
  'expense': 'text-red-700 dark:text-red-300',
  'investment': 'text-indigo-700  dark:text-indigo-300',
  'saving': 'text-yellow-700 dark:text-yellow-300',
}



export default function Trend({ type, amount, prevAmount = 0 }: Props) {
  const percentageChange = useMemo(() => Math.round(calcPercentageChange(amount, prevAmount)), [amount, prevAmount]);

  return (
    <div>
      <div className={`${colorClasses[type]} font-semibold`}>{type}</div>
      <div className='text-2xl font-semibold'>
        {amount ? formatCurrency(amount) : formatCurrency(0)}
      </div>
      <div className={`flex gap-1 items-center text-sm`}>
        {percentageChange === 0 
          ? <ArrowRight /> 
          : percentageChange > 0 
            ? <ArrowUpRight className="text-green-500" />
            : <ArrowDownRight className="text-red-500" />
        }
        {percentageChange}% {percentageChange !== 0 && 'vs last period'}
      </div>
    </div>
  )
}
