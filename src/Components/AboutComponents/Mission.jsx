import React from 'react';

const Mission = () => {
  return (
    <div className="relative bg-blue-900 text-white py-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600")',
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Mission Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left animate-slide-in-left">
          <h2 className="text-3xl font-bold mb-4">MISSION</h2>
          <p className="text-base sm:text-lg opacity-80 leading-relaxed">
            Our mission at <strong>YK Freightways</strong> is to deliver reliable, efficient, and innovative logistics solutions that empower businesses to grow. We are committed to excellence in every shipment — ensuring timely deliveries, safe handling, and customer satisfaction through cutting-edge technology and dedicated service.
          </p>
        </div>

        {/* Vision Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left animate-slide-in-right">
          <h2 className="text-3xl font-bold mb-4">VISION</h2>
          <p className="text-base sm:text-lg opacity-80 leading-relaxed">
            Our vision is to become a leading force in the logistics industry across Canada and beyond, recognized for our integrity, agility, and customer-focused approach. We aim to build a future where businesses of all sizes can seamlessly connect to the world through YK Freightways' trusted network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
