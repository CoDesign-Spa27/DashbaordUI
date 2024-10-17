"use client"
import Header from '@/app/_components/Header';
import RevenueSection from '@/app/_components/RevenueSection';
import InformationCard from '@/components/InformationCard';
import StatisticsCard from '@/components/StatisticsCard';
import React from 'react';
import { motion } from 'framer-motion';  

 
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

function Page() {
  return (
    <div className="bg-gray-200 w-full min-h-screen flex flex-col gap-5">
      
      <div className="px-4">
        <Header />
      </div>
 
      <motion.div
        className="flex flex-col lg:flex-row px-4 lg:px-10 items-center lg:items-start gap-5"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      > 
        <motion.div className="w-full lg:w-1/2" variants={fadeInUp}>
          <InformationCard />
        </motion.div>

 
        <motion.div className="w-full lg:w-1/2" variants={fadeInUp}>
          <StatisticsCard />
        </motion.div>
      </motion.div>
 
      <motion.div
        className="px-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <RevenueSection />
      </motion.div>
    </div>
  );
}

export default Page;
