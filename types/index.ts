import type { Category, TransactionType } from '@/lib/consts'

export interface Transaction {
  id: string
  type: TransactionType
  amount: number
  category: Category
  description?: string
  createdAt: string // ISO date string
}

export interface ApiTransaction {
  id: string
  type: TransactionType
  amount: number
  category: Category
  description?: string
  created_at: string
}
