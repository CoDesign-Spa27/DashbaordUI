import Image from 'next/image'
import React from 'react'
import wallet from '../app/assets/icons/wallet.svg'
import left from '../app/assets/icons/left.svg'
import right from '../app/assets/icons/right.svg'

const History = () => {
  return (
    <div className='bg-white py-4 px-5 md:px-10 flex flex-col justify-between gap-4 md:gap-5 rounded-3xl text-black items-center w-full max-w-lg mx-auto'>
      <div className='text-lg font-semibold'>
        History
      </div>

      <div className='w-full'>
        <Transaction value={"5,999.00"} date='25 Sept'/>
        <Transaction value={"919.00"} date='12 Oct'/>
      </div>

    <div className='flex justify-center gap-2 w-full'>
      <Image src={left} alt='left' width={30} height={30} className='cursor-pointer' />
      <Image src={right} alt='right' width={30} height={30} className='cursor-pointer' />
    </div>
    </div>
  )
}

export default History

function Transaction({ value, date }: { value: string, date: string }) {
  return (
    <div className='flex items-center justify-between w-full text-black gap-5 border-b py-2'>
      <div className='flex items-center gap-3'>
        <div>
          <Image src={wallet} alt='walletIcon' width={24} height={24} />
        </div>
        <div className='text-base font-medium'>
          ${value}
        </div>
      </div>

      <div className='text-sm text-gray-500'>
        {date}
      </div>
    </div>
  )
}
