import React from 'react'
import plus from '../app/assets/icons/plus.svg'
import Image from 'next/image'
const StatisticsCard = () => {
  return (
    <div className='flex flex-col justify-center sm:px-10 px-2 py-3 sm:py-5 w-full'>
      <div className='text-black py-5 text-xl'>
Statistics for this week
      </div>
      <div className='flex gap-5 items-center'>
<TimeCard time='12 H' title='Worked Time' />
<TimeCard time='16 H' title='Remaining Time' />
<AddTimeCard /> 
      </div>
    </div>
  )
}

export default StatisticsCard


interface TimeCardProp{
time:string,
title:string,
}
function TimeCard({time,title}:TimeCardProp){
return (
    <div className='bg-[#D9D9D9] flex flex-col items-center my-2 gap-2 py-5 px-2 rounded-2xl '>
    <div className='text-xl font-black text-black truncate w-full text-center'>
      {time}
    </div>
    <div className='text-gray-500 text-sm text-center'>
      {title}
    </div>
  </div>
  
)
}

function AddTimeCard(){
    return (
        <div className='border-2 border-dashed border-black flex flex-col justify-center items-center gap-2 py-5 px-2 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <Image
            src={plus}
            alt='plusIcon'
            className='bg-black rounded-md'
            width={25}
            height={25}
          />
        </div>
        <div className='text-gray-500 text-sm text-center'>
          Add Time
        </div>
      </div>
    )
}