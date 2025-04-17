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
      className="bg-white py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 text-left">
        <motion.h2
          className="text-xl md:text-2xl font-bold text-gray-800 mb-2"
          variants={headingVariants}
        >
          LOGISTIC OFFERS CUSTOMER-SPECIFIC LOGISTICS SOLUTIONS
        </motion.h2>
        <motion.div
          className="bg-[#34ccff] h-1 w-10 mb-6"
          variants={lineVariants}
        ></motion.div>
        <motion.p
          className="text-gray-700 text-sm md:text-base"
          variants={textVariants}
        >
          Marfa Tumblr locavore, cray meh salvia Portland Carles chillwave fashion axe PBR. Squid farm-to-table McSweeney's mixtape try-hard, heirloom photo booth. Ethical four loko forage, messenger bag yr cold-pressed Bushwick. Butcher aesthetic roof party synth, pop-up organic 9-bit beard sartorial authentic jean shorts kale chips farm-to-table pug. Chambray XOXO bespoke biodiesel, hella seitan aesthetic master cleanse art party freegan raw denim pour-over Blue Bottle try-hard. Farm-to-table selfies mixtape shabby chic umami vinyl. Echo Park hoodie next level cardigan, Thundercats Williamsburg McSweeney's biodiesel Pinterest meggings butcher brunch Pitchfork cray mlkshk.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LogisticsOfferSection;