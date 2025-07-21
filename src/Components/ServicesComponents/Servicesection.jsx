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
      "We provide secure, efficient, and timely transportation of all types of packaged goods across the country with utmost professionalism.",
    icon: <RiBox3Line className="text-cyan-400" size={50} />,
  },
  {
    title: "National Road Transport",
    description:
      "YK Freightways specializes in reliable national road transport, ensuring your cargo reaches every corner of the country seamlessly.",
    icon: <MdLocalShipping className="text-cyan-400" size={50} />,
  },
  {
    title: "Warehousing and Storage",
    description:
      "We offer modern, secure, and spacious warehousing facilities to accommodate short- and long-term storage needs for all business sizes.",
    icon: <MdWarehouse className="text-cyan-400" size={50} />,
  },
  {
    title: "Forwarding Services",
    description:
      "Our expert forwarding solutions ensure your shipments are processed quickly, efficiently, and delivered on time, every time.",
    icon: <FiSend className="text-cyan-400" size={50} />,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-white text-gray-600 py-20 px-4">
      <div className="flex flex-col gap-10 max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Providing First Class Freight Services
          </h2>
          <p className="text-lg text-[#34ccff] font-semibold">
            with <span className="text-gray-800">YK Freightways</span>
          </p>
          <div className="h-1 w-10 mx-auto bg-cyan-400 mb-12 rounded"></div>
        </div>

        {/* Services List */}
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
                <h4 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
