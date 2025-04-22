import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../assets/images/Aboutimages/welcomeabout.jpg';
import buildingimage from '../../assets/images/Aboutimages/building.jpg';

const Welcome = () => {
  const [locationCount, setLocationCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  const targetLocation = 50;
  const targetEmployee = 24300;
  const targetCustomer = 250000;
  const animationDuration = 2000;
  const animationInterval = 50;

  useEffect(() => {
    const locationInterval = setInterval(() => {
      setLocationCount(prev => {
        if (prev < targetLocation) {
          return Math.min(prev + 1, targetLocation);
        } else {
          clearInterval(locationInterval);
          return prev;
        }
      });
    }, animationDuration / targetLocation);

    const employeeInterval = setInterval(() => {
      setEmployeeCount(prev => {
        const increment = Math.ceil(targetEmployee / (animationDuration / animationInterval));
        if (prev < targetEmployee) {
          return Math.min(prev + increment, targetEmployee);
        } else {
          clearInterval(employeeInterval);
          return prev;
        }
      });
    }, animationInterval);

    const customerInterval = setInterval(() => {
      setCustomerCount(prev => {
        const increment = Math.ceil(targetCustomer / (animationDuration / animationInterval));
        if (prev < targetCustomer) {
          return Math.min(prev + increment, targetCustomer);
        } else {
          clearInterval(customerInterval);
          return prev;
        }
      });
    }, animationInterval);

    return () => {
      clearInterval(locationInterval);
      clearInterval(employeeInterval);
      clearInterval(customerInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div>
      {/* Welcome Banner */}
      <motion.div
        className="relative text-white py-20 md:py-32"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-black bg-opacity-60 backdrop-blur-sm px-6 md:px-10 py-10 md:py-16 rounded-xl max-w-7xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" variants={itemVariants}>
            ABOUT US
          </motion.h2>
          <motion.p className="text-lg sm:text-xl md:text-2xl text-[#34ccff] font-semibold mb-10" variants={itemVariants}>
            Logistic is a global supplier of transport and logistics solutions. We have offices in more than 50 countries and an international network of partners and agents.
          </motion.p>

          {/* Counters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[{
              count: locationCount,
              label: 'Countries',
              iconPath: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-4.036 12-9 12s-9-4.858-9-12m18 0a7.5 7.5 0 00-15 0m18 0v-7.5A7.5 7.5 0 004.5 3m15 0v7.5a7.5 7.5 0 01-7.5 7.5m-7.5-7.5h7.5m-7.5 0a3 3 0 11-6 0 3 3 0 016 0z" />
                </>
              )
            }, {
              count: employeeCount,
              label: 'Employees',
              iconPath: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-16.5-6.636a9.376 9.376 0 0116.5-6.636m-1.148 3.496a13.827 13.827 0 00-13.74 2.888c-.248.075-.496.15-.743.225C9.049 20.678 12.707 21.8 16.636 18.03M12 12h.008v.008H12V12z" />
              )
            }, {
              count: customerCount,
              label: 'Happy Clients',
              iconPath: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-5.53M12 21h3.75m-3.75 0a9.004 9.004 0 01-8.716-5.53M12 21h-3.75m3.75 0a9.004 9.004 0 008.716-5.53M12 9h.008v.008H12V9zm0 0c-1.69 0-3.05 1.36-3.05 3.05s1.36 3.05 3.05 3.05 3.05-1.36 3.05-3.05-1.36-3.05-3.05-3.05z" />
              )
            }].map((item, index) => (
              <motion.div key={index} className="flex flex-col items-center" variants={itemVariants}>
                <div className="mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="#34ccff" className="w-12 h-12">
                    {item.iconPath}
                  </svg>
                </div>
                <span className="text-3xl md:text-4xl font-bold">{item.count}</span>
                <p className="text-gray-300 text-base sm:text-lg">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Info Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={buildingimage}
              alt="Logistics Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              Comprehensive logistics and transportation solutions form the core of our business.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Mixtape taxidermy plaid crucifix, Cosby sweater occupy cold-pressed Portland pop-up tofu PBR&B kale chips readymade.
              Flexitarian bitters Shoreditch literally paleo, Vice letterpress Bushwick direct trade fingerstache tattooed.
              Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;