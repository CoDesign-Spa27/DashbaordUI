"use client"
import React, { useState } from 'react'
import {SideNav} from '../_components/SideNav'
import { Menu } from 'lucide-react';
function layout({children}:{children:React.ReactNode}):JSX.Element {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

 
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='flex'>
       <div className="lg:hidden fixed bg-[#2D283E] rounded-br-full p-2 top-2 left-2  z-20">
        <button onClick={toggleSidebar} aria-label="Open Sidebar">
          <Menu size={24} className='text-white'/>
        </button>
      </div>
     <div className="w-54 h-screen ">
     <div
          className={`fixed inset-y-0 left-0 z-30 w-60  transform transition-transform ease-in-out duration-300 lg:relative h-screen lg:w-54 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SideNav />
        </div>
 
        {sidebarOpen && (
          <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar} 
          />
        )}
        </div>
        {children}
    </div>
  )
}

export default layout
