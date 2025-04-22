// import { FaWarehouse, FaUmbrella, FaCompass, FaTruck } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const cardVariants = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
// };

// const ServiceCard = ({ icon, title, description }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-md shadow-md p-6 flex flex-col items-center text-center"
//       variants={cardVariants}
//     >
//       <div className="text-[#34ccff] text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm">{description}</p>
//     </motion.div>
//   );
// };

// const ServicesSection = () => {
//   const servicesData = [
//     {
//       icon: <FaWarehouse />,
//       title: 'Professional Storage',
//       description:
//         'Trust fund paleo cray swag, health goth mixtape Carles deep v mustache craft beer retro Williamsburg High Life Godard. go\'s narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra farm-to-table pork belly Pitchfork, Odd Future food truck go\'s Helvetica.',
//     },
//     {
//       icon: <FaUmbrella />,
//       title: 'Professional Distribution',
//       description:
//         'Trust fund paleo cray swag, health goth mixtape Carles deep v mustache craft beer retro Williamsburg High Life Godard. go\'s narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra farm-to-table pork belly Pitchfork, Odd Future food truck go\'s Helvetica.',
//     },
//     {
//       icon: <FaCompass />,
//       title: 'Cross Docking',
//       description:
//         'Trust fund paleo cray swag, health goth mixtape Carles deep v mustache craft beer retro Williamsburg High Life Godard. go\'s narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra farm-to-table pork belly Pitchfork, Odd Future food truck go\'s Helvetica.',
//     },
//     {
//       icon: <FaTruck />,
//       title: 'Dedicated Warehouses',
//       description:
//         'Trust fund paleo cray swag, health goth mixtape Carles deep v mustache craft beer retro Williamsburg High Life Godard. go\'s narwhal drinking vinegar gentrify lo-fi. Cray Austin Neutra farm-to-table pork belly Pitchfork, Odd Future food truck go\'s Helvetica.',
//     },
//   ];

//   return (
//     <div className="container mx-auto py-12">
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//         initial="initial"
//         animate="animate"
//         transition={{ staggerChildren: 0.2 }}
//       >
//         {servicesData.map((service, index) => (
//           <ServiceCard
//             key={index}
//             icon={service.icon}
//             title={service.title}
//             description={service.description}
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default ServicesSection;
import React from "react";
import { motion } from "framer-motion";

// React Icons
import { RiBox3Line } from "react-icons/ri";
import { MdLocalShipping, MdWarehouse } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const services = [
  {
    title: "Transport of Packaged Goods",
    description:
      "Truffaut skateboard hashtag, pork belly Odd Future bespoke paleo forage before they sold out meggings Banksy cred.",
    icon: <RiBox3Line className="text-cyan-400" size={50} />,
  },
  {
    title: "National Road Transport",
    description:
      "Truffaut skateboard hashtag, pork belly Odd Future bespoke paleo forage before they sold out meggings Banksy cred.",
    icon: <MdLocalShipping className="text-cyan-400" size={50} />,
  },
  {
    title: "Warehousing and Storage",
    description:
      "Truffaut skateboard hashtag, pork belly Odd Future bespoke paleo forage before they sold out meggings Banksy cred.",
    icon: <MdWarehouse className="text-cyan-400" size={50} />,
  },
  {
    title: "Forwarding Services",
    description:
      "Truffaut skateboard hashtag, pork belly Odd Future bespoke paleo forage before they sold out meggings Banksy cred.",
    icon: <FiSend className="text-cyan-400" size={50} />,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-white text-gray-600 py-20 px-4">
      <div className="flex flex-col gap-10 max-w-6xl mx-auto text-center">
        <div className="flex flex-col gap-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">OUR SERVICES</h2>
        <div className="h-1 w-10 mx-auto bg-cyan-400 mb-12 rounded"></div>
        </div>
      

        <div className="grid md:grid-cols-2 gap-20">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-6">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <div className="text-left">
                <h4 className="text-2xl font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
