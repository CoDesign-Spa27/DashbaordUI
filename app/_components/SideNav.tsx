"use client";
import Image from 'next/image';
import React from 'react';
import Logo from '../assets/logo.svg';
import home from '../assets/icons/home.svg';
import database from '../assets/icons/database.svg';
import user from '../assets/icons/user.svg';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';  

export const SideNav = () => {
  const pathname = usePathname();

  const navigationPages = [
    {
      logo: <Image src={home} alt="home" width={20} height={20} />,
      name: "Home",
      href: "/home",
    },
    {
      logo: <Image src={database} alt="analytics" width={20} height={20} />,
      name: "Analytics",
      href: "/analytics",
    },
    {
      logo: <Image src={user} alt="user" width={20} height={20} />,
      name: "User",
      href: "/user",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-[#982577] from-30% via-[#86256E] via-40% to-[#2D283E] to-14% w-full h-full">
      <div className="py-10 px-4">
        <div className="flex justify-center">
          <Image src={Logo} width={100} height={100} alt="logo" />
        </div>
        <nav className="mt-10">
          <ul className="flex flex-col gap-4">
            {navigationPages.map((page) => (
              <Link href={page.href} key={page.name}>
                <motion.li
            
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`flex gap-2 items-center px-4 py-2 rounded-2xl cursor-pointer ${
                    pathname === page.href
                      ? "bg-[#B22B8C] text-[#D0D7E1]"
                      : "text-[#D0D7E1] hover:bg-[#863d71ba] hover:text-white"
                  }`}
                >
                  <div>{page.logo}</div>
                  <p className="block py-1 rounded-md">{page.name}</p>
                </motion.li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
