import React from 'react'
import greenArrow from '../app/assets/icons/greenArrow.svg'
import Image from 'next/image'

const BalanceCard = () => {
  return (
    <div className='bg-white py-4 px-6 md:px-10 flex flex-col justify-between gap-4 md:gap-6 rounded-3xl items-center w-full'>
      <div className='text-black text-base md:text-lg'>
        Your projects earned you
      </div>
      
      <div className='text-black text-2xl md:text-3xl font-extrabold'>
        $10,243.35
      </div>
      
      <div className='text-black flex items-center gap-2 md:gap-3'>
        <div className='text-sm md:text-base'>
          Closing Balance:
        </div>
        <div className='text-base md:text-lg font-semibold'>
          $14,243.35
        </div>
        <div>
          <Image src={greenArrow} alt='green arrow' width={20} height={20} className='md:w-[24px] md:h-[24px]' />
        </div>
      </div>
    </div>
  )
}

export default BalanceCard
