import React from 'react'
import Image from 'next/image'
import share from '../app/assets/icons/share.svg'
import downlaod from '../app/assets/icons/download.svg'
function InformationCard() {
  return (
    <div className='bg-[#2D283E] px-10 py-5 rounded-[50px]'>
    <div className='flex flex-col justify-center gap-5'>
     <div className='text-xl'>
        Over all infromation
        </div> 

        <div className='flex items-center gap-4' >
            <div className='flex items-center gap-5'>
<div className='sm:text-5xl text-3xl font-black text-[#B22B8C]'>44</div>
<div className='text-sm sm:text-base'>
Task done for all time.
</div>
            </div>
            <div className='flex items-center gap-5'>
            <div className='sm:text-5xl text-3xl font-black text-[#B22B8C]'>7</div>
<div className=' text-sm sm:text-base'>
Task done for all time.
</div>
            </div>
        </div>
        <div className='flex gap-5 items-center'>
<Image src={share} alt='shareIcon' width={40} height={40} />
<DownloadButton />
        </div>
    </div>
    </div>
  )
}

export default InformationCard


function DownloadButton(){
    return (
        <div className='flex bg-[#ffffff] text-[#B22B8C] items-center gap-4 rounded-2xl sm:py-2 py-1 sm:px-3 px-2'>
            <div className='text-sm sm:text-base'>
Download Report
            </div>
            <div>
<Image src={downlaod} alt='downloadIcon' />
            </div>
        </div>
    )
}