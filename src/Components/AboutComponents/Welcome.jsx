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
  }, [targetLocation, targetEmployee, targetCustomer, animationDuration, animationInterval]);

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
      <motion.div
        className="bg-gray-800 text-white py-29 relative overflow-hidden"
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
        <div className="container mx-auto px-4 text-center bg-opacity-50 backdrop-blur-sm">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={itemVariants}>
            ABOUT US
          </motion.h2>
          <motion.p className="text-xl lg:md:text-2xl text-[#34ccff] font-bold mb-12" variants={itemVariants}>
            Logistic is a global supplier of transport and logistics solutions. We have offices in more than 50 countries
            and an international network of partners and agents, making us a truly global player that offers services
            worldwide.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <div className="text-4xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#34ccff" // Changed icon color
                  className="w-12 h-12"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-4.036 12-9 12s-9-4.858-9-12m18 0a7.5 7.5 0 00-15 0m18 0v-7.5A7.5 7.5 0 004.5 3m15 0v7.5a7.5 7.5 0 01-7.5 7.5m-7.5-7.5h7.5m-7.5 0a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <span className="text-4xl font-bold">{locationCount}</span>
              <p className="text-gray-300">Countries</p>
            </motion.div>
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <div className="text-4xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#34ccff" 
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372m-16.5-6.636a9.376 9.376 0 0116.5-6.636m-1.148 3.496a13.827 13.827 0 00-13.74 2.888c-.248.075-.496.15-.743.225C9.049 20.678 12.707 21.8 16.636 18.03M12 12h.008v.008H12V12z"
                  />
                </svg>
              </div>
              <span className="text-4xl font-bold">{employeeCount}</span>
              <p className="text-gray-300">Employees</p>
            </motion.div>
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <div className="text-4xl mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#34ccff" // Changed icon color
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-5.53M12 21h3.75m-3.75 0a9.004 9.004 0 01-8.716-5.53M12 21h-3.75m3.75 0a9.004 9.004 0 008.716-5.53M12 9h.008v.008H12V9zm0 0c-1.69 0-3.05 1.36-3.05 3.05s1.36 3.05 3.05 3.05 3.05-1.36 3.05-3.05-1.36-3.05-3.05-3.05zm-2.995 5.134a5.85 5.85 0 01-.003-5.136m4.995 5.136a5.85 5.85 0 01.003-5.136m-2.998 5.136a7.5 7.5 0 00-.86-3.74m1.816 3.74c1.39 0 2.517-1.128 2.517-2.518s-1.127-2.518-2.517-2.518m0 0c-1.39 0-2.518 1.128-2.518 2.518s1.128 2.518 2.518 2.518m-5.003 5.004c-.25 0-.498-.02-.743-.06a15.905 15.905 0 01-4.13-2.27m0 0l-1.034-1.035m-3.284-3.285l1.035 1.036m4.13 2.27c.25-.04.497-.06.743-.06m-4.998-4.99a5.85 5.85 0 01.002-2.469m3.803-2.47a5.85 5.85 0 01-.003 2.47"
                  />
                </svg>
              </div>
              <span className="text-4xl font-bold">{customerCount}</span>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={buildingimage} // Using the imported image
              alt="Logistics Buildings"
              className="w-full h-auto"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="text-left">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Comprehensive logistics and transportation <br />
              solutions form the core of our business - from <br />
              procurement logistics right through to delivery.
            </h2>
            <p className="text-gray-700 text-sm">
              Mixtape taxidermy plaid crucifix, Cosby sweater occupy cold-pressed
              Portland pop-up to-fi PBR&B kale chips readymade. Flexitarian bitters
              Shoreditch literally paleo, Vice letterpress Bushwick direct trade
              fingerstache tattooed. Stumptown flannel mlkshk wayfarers forage, plaid
              VHS drinking vinegar quinoa YOLO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;