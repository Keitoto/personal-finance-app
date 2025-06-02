import { z } from 'zod'
import { categoriesByType, transactionType } from '@/lib/consts'

export const addTransactionSchema = z
  .object({
    type: z.enum(transactionType, {
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
    amount: z.number({ required_error: 'Amount is required', invalid_type_error: 'Amount is required' })
      .positive('Amount must be at least 1'),
    description: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Validate that category is valid for the selected type
    const validCategories = categoriesByType[data.type]
    if (validCategories && !validCategories.includes(data.category as any)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['category'],
        message: `Category must be selected`,
      })
    }
  })

export type AddTransactionSchema = z.infer<typeof addTransactionSchema>
