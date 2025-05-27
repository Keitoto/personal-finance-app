import Header from '@/components/Header';
import Trend from '@/components/Trend';
import React from 'react'

export default function page() {
  return (
    <div className='container space-y-8 py-20'>
      <div>
        <h2>Header</h2>
      <hr />
      <Header />
      </div>

    <div>
        <h2>Trend</h2>
        <hr />
        <div className="flex gap-4">
        <Trend type='income' amount={1000} prevAmount={800} />
        <Trend type='expense' amount={800} prevAmount={1000} />
        <Trend type='investment' amount={100} />
        <Trend type='saving' amount={100} />
        </div> 
      </div>
    </div>
  )
}
