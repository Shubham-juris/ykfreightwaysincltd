import React from 'react';
import { motion } from 'framer-motion';

const LogisticsOfferSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: '40px',
      transition: {
        duration: 0.4,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="bg-white py-10 sm:py-12 md:py-16 lg:py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4"
          variants={headingVariants}
        >
          YK FREIGHTWAYS OFFERS CUSTOMER-SPECIFIC LOGISTICS SOLUTIONS
        </motion.h2>
        <motion.div
          className="bg-[#34ccff] h-1 w-10 mb-4 sm:mb-5 md:mb-6"
          variants={lineVariants}
        ></motion.div>
        <motion.p
          className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed md:leading-loose"
          variants={textVariants}
        >
          At YK Freightways, we understand that every customer has unique logistics requirements. Our tailored solutions ensure seamless coordination of freight, warehousing, and transportation across Canada and international borders. Whether you need full truckload, LTL, or specialized freight services, our expert team works closely with you to streamline operations, reduce costs, and ensure timely deliveries. From packaging and storage to real-time tracking and final-mile delivery — we deliver excellence, every time.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LogisticsOfferSection;
