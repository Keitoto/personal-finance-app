export interface Transaction {
  id: string
  type: 'income' | 'expense' | 'saving' | 'investment'
  amount: number
  category: string
  description?: string
  date: string // ISO date string
}
