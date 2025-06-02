export const transactionType = [
  'income',
  'expense',
  'saving',
  'investment',
] as const
export type TransactionType = (typeof transactionType)[number]

export const categoriesByType = {
  income: [
    'salary',
    'freelance',
    'bonus',
    'interest',
    'dividends',
    'other',
  ] as const,
  expense: [
    'groceries',
    'utilities',
    'rent',
    'entertainment',
    'travel',
    'healthcare',
    'education',
    'transportation',
    'insurance',
    'taxes',
    'other',
  ] as const,
  saving: [
    'emergency fund',
    'retirement',
    'vacation',
    'major purchase',
    'other',
  ] as const,
  investment: [
    'stocks',
    'bonds',
    'real estate',
    'crypto',
    'mutual funds',
    'other',
  ] as const,
}

export type Category =
  | (typeof categoriesByType.income)[number]
  | (typeof categoriesByType.expense)[number]
  | (typeof categoriesByType.saving)[number]
  | (typeof categoriesByType.investment)[number]

export const transactionTypeColorClasses = {
  income: 'text-green-700 dark:text-green-300',
  expense: 'text-red-700 dark:text-red-300',
  investment: 'text-indigo-700  dark:text-indigo-300',
  saving: 'text-yellow-700 dark:text-yellow-300',
} as const
