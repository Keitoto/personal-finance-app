import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href="/dashboard" className="text-xl hover:underline underline-offset-8 decoration-2">Personal Finance</Link>

      <div className="flex items-center space-x-4">
        <div>
          <ThemeToggle />
        </div>
        <div>User Dropdown</div>
      </div>
    </header>
  )
}
