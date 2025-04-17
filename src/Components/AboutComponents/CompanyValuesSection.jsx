import React from 'react';
import { motion } from 'framer-motion';
import testimonial from '../../assets/Aboutimages/testimonials3.jpg'

const CompanyValuesSection = () => {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delay: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const buttonItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const leftTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const rightTextVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.7,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 1.0,
        ease: 'easeOut',
      },
    },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
        delay: 1.2,
        ease: 'easeOut',
      },
    },
  };

  const dotItemVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="bg-white py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Side */}
        <div>
          <motion.h2
            className="text-xl md:text-2xl font-bold text-gray-800 mb-4"
            variants={headingVariants}
          >
            SOME COMPANY VALUES
          </motion.h2>
          <motion.div
            className="bg-[#34ccff] h-1 w-10 mb-6"
            variants={lineVariants}
          ></motion.div>
          <motion.div className="flex flex-wrap gap-2 mb-6" variants={buttonVariants}>
            <motion.button
              className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34ccff]"
              variants={buttonItemVariants}
            >
              Safety
            </motion.button>
            <motion.button
              className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34ccff]"
              variants={buttonItemVariants}
            >
              Trust
            </motion.button>
            <motion.button
              className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-[#34ccff]"
              variants={buttonItemVariants}
            >
              Leading
            </motion.button>
            <motion.button
              className="bg-[#34ccff] text-white font-medium py-2 px-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#34ccff]"
              variants={buttonItemVariants}
            >
              Award Winner
            </motion.button>
          </motion.div>
          <motion.p
            className="text-gray-700 text-sm md:text-base"
            variants={leftTextVariants}
          >
            Mixtape taxidermy plaid crucifix, Cosby sweater occupy cold-pressed Portland pop-up to-fi PBR&B kale chips readymade. Flexitarian bitters Shoreditch literally paleo, Vice letterpress Bushwick direct trade fingerstache tattooed. Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.
          </motion.p>
        </div>

        {/* Right Side */}
        <div className="text-right">
          <motion.p
            className="text-gray-700 text-sm md:text-base mb-6"
            variants={rightTextVariants}
          >
            Marfa Tumblr locavore, cray meh salvia Portland Carles chillwave fashion axe PBR.
            Squid farm-to-table McSweeney's mixtape try-hard, heirloom photo booth.
            Ethical four loko forage, messenger bag yr cold-pressed Bushwick.
          </motion.p>
          <div className="flex items-center justify-end">
            <div className="text-left">
              <motion.p className="font-semibold text-gray-800 text-sm" variants={rightTextVariants}>
                Valeria Kindergarten
              </motion.p>
              <motion.p className="text-gray-500 text-xs" variants={rightTextVariants}>
                Goldie / Logistic Department
              </motion.p>
            </div>
            <motion.div
              className="ml-4 rounded-full overflow-hidden w-16 h-16"
              variants={imageVariants}
            >
              <img
                src={testimonial} // Replace with your actual image path in the public folder
                alt="Valeria Kindergarten"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <motion.div className="flex justify-end mt-4 gap-2" variants={dotVariants}>
            <motion.div className="w-3 h-3 rounded-full bg-[#34ccff]" variants={dotItemVariants}></motion.div>
            <motion.div className="w-3 h-3 rounded-full bg-gray-300" variants={dotItemVariants}></motion.div>
            <motion.div className="w-3 h-3 rounded-full bg-gray-300" variants={dotItemVariants}></motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyValuesSection;