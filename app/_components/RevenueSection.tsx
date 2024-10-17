import BalanceCard from '@/components/BalanceCard'
import History from '@/components/History'
import React from 'react'

function RevenueSection() {
  return (
    <div className='flex flex-col bg-[#D9D9D9] px-4 py-4 rounded-3xl w-full max-w-4xl '>
      <div className='text-black px-2 py-2 text-xl font-semibold'>
        Revenue Details
      </div>

      <div className='flex flex-col justify-center md:flex-row gap-10'>
       
        <div className='w-full flex'>
          <BalanceCard />  
        </div>

       
        <div className='w-full  flex'>
          <History   />  
        </div>
      </div>
    </div>
  )
}

export default RevenueSection
