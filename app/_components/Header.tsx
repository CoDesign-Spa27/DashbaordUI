import React from 'react'
import plus from '../assets/icons/plus.svg'
import search from '../assets/icons/search.svg'
import Image from 'next/image'
import avatar from '../assets/icons/avatar.svg'
function Header() {
  return (
    <div className='sm:px-10 px-10  py-3 sm:py-5'>
        
    <div className='flex items-center justify-between'>
    <div className='text-black text-base sm:text-xl'>
      Hi, User    
     </div>  
     <div className='flex items-center gap-5'>
        <div>
        <CreatButton />
        </div>
<div>
<Image src={search} alt='searchIcon' width={40} height={40}/>

</div>
<div>
<Image src={avatar} alt='avatar' width={40} height={40}/>  
</div>
     </div>
    </div>
    </div>
  )
}

export default Header


function CreatButton(){
    return (
        <div className='bg-[#B22B8C] flex items-center gap-2 py-2 px-4 rounded-2xl'>
            <div>
<Image src={plus} alt='plusIcon' width={25} height={25}/>
            </div>
         <div className='text-[#D0D7E1] sm:block hidden font-semibold'>
            Create
         </div>
        </div>
    )
}