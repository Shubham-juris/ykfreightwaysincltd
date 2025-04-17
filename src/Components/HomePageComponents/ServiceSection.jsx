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
    <div className="bg-[#0F172A] text-white py-20 px-4">
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
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
