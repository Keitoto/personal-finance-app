import { z } from 'zod'

export const addTransactionSchema = z.object({
  type: z.enum(['income', 'expense', 'saving', 'investment'], {
    required_error: 'Type is required',
  }),
  category: z.string().min(1, 'Category is required'),
  date: z
    .string()
    .min(1, 'Date is required')
    .refine(
      val => /^\d{4}-\d{2}-\d{2}$/.test(val),
      {
        message: 'Date must be in YYYY-MM-DD format',
      },
    ),
  amount: z.number({ required_error: 'Amount is required' }).positive('Amount must be positive'),
  description: z.string().optional(),
})

export type AddTransactionSchema = z.infer<typeof addTransactionSchema>
