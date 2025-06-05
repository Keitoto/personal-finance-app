'use client'

import type { AddTransactionSchema } from '@/lib/schema/add-transaction'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categoriesByType, transactionType } from '@/lib/consts'
import { addTransactionSchema } from '@/lib/schema/add-transaction'

export function TransactionForm() {
  const today = new Date().toISOString().slice(0, 10)
  const form = useForm<AddTransactionSchema>({
    mode: 'onTouched',
    resolver: zodResolver(addTransactionSchema),
    defaultValues: {
      type: transactionType[0],
      category: '',
      date: today,
      amount: 0,
      description: '',
    },
  })

  // Watch the selected type to update category options
  const selectedType = form.watch('type')
  const categoryOptions = categoriesByType[selectedType]

  // Reset category when type changes
  React.useEffect(() => {
    form.setValue('category', '')
  }, [selectedType, form])

  const handleSubmit = (data: AddTransactionSchema) => {
    // TODO Handle form submission logic here
    console.warn('Form submitted with data:', data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type</FormLabel>

                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {transactionType.map(type => (
                      <SelectItem key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categoryOptions && categoryOptions.map(cat => (
                      <SelectItem key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <input type="date" {...field} className="w-full p-2 border rounded" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <input
                    type="number"
                    {...field}
                    value={field.value ?? ''}
                    onChange={e => field.onChange(e.target.value === '' ? '' : Number(e.target.value))}
                    min={1}
                    className="w-full p-2 border rounded"
                    placeholder="Amount"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <textarea {...field} className="w-full p-2 border rounded" placeholder="Description" rows={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex mt-4">
          <Button className="cursor-pointer">Save</Button>
        </div>
      </form>
    </Form>
  )
}
