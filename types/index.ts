export interface Transaction {
  id: string
  type: 'income' | 'expense' | 'saving' | 'investment'
  amount: number
  category: string
  description?: string
  createdAt: string // ISO date string
}

export interface ApiTransaction {
  id: string
  type: 'income' | 'expense' | 'saving' | 'investment'
  amount: number
  category: string
  description?: string
  created_at: string
}
