import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Link href="/dashboard" className="text-xl hover:underline underline-offset-8 decoration-2">Personal Finance</Link>

      <div className="flex items-center space-x-4">
        <div>Mode Toggle</div>
        <div>User Dropdown</div>
      </div>
    </header>
  )
}
