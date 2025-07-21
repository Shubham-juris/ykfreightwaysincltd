import React from "react";
import { motion } from "framer-motion";

const Portimage = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1736134869017-cb83433d70c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2h0JTIwdHJ1Y2tzfGVufDB8fDB8fHww')",
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-300 bg-opacity-60 mix-blend-multiply"></div>

      {/* Text container with motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl p-8 sm:p-12 rounded-lg"
      >
        <p className="text-white text-xl sm:text-3xl md:text-3xl font-bold leading-relaxed tracking-wide drop-shadow-lg text-center">
          Providing First Class Freight Services Across India. <br />
          <span className="text-white/90 font-medium">
            YK Freightways is committed to safe, reliable, and timely logistics solutions—from port to door, with excellence at every mile.
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Portimage;
