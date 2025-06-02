import type { TransactionType } from '@/lib/consts'
import { Trend } from '@/components/Trend'

interface Props {
  type: TransactionType
}

export async function TrendLoader({ type }: Props) {
  try {
    const res = await fetch(`http://localhost:3100/trends/${type}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error(`Failed to fetch trend data for ${type}: ${res.status}`)
    }
    const data = await res.json()
    const { amount, prevAmount } = data

    return (
      <Trend type={type} amount={amount} prevAmount={prevAmount} />
    )
  }
  catch (error) {
    console.error(`Error loading ${type} trend:`, error)
    return (
      <Trend type={type} amount={0} prevAmount={0} />
    )
  }
}
