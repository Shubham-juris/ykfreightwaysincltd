import { useState, useEffect } from 'react';

const ProgressBar = ({ label, value }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(value);
    }, 300);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="mb-4">
      <div className="text-sm text-gray-700 mb-1">
        {label} <span className="font-medium text-gray-800">{value}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-4 relative overflow-hidden">
        <div
          className="bg-[#34ccff] h-full rounded-full absolute left-0 top-0 transition-all duration-500"
          style={{ width: `${width}%` }}
        >
          <div
            className="absolute top-1/2 left-full -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow"
            style={{ marginLeft: '-0.5rem' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const WarehousingSolutions = () => {
  return (
    <div className="bg-white py-8 px-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Warehousing Solutions</h2>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        At YK Freightways, our warehousing solutions are designed to ensure safety, efficiency, and real-time availability. From advanced material handling to transparent operations, we offer seamless storage and distribution.
      </p>
      <div>
        <ProgressBar label="Product Availability" value={98} />
        <ProgressBar label="Advanced Handling Equipment" value={80} />
        <ProgressBar label="Operational Transparency" value={70} />
        <ProgressBar label="Outgoing Shipments Efficiency" value={65} />
      </div>
    </div>
  );
};

const OtherServices = () => {
  return (
    <div className="bg-white py-8 px-6 rounded-md shadow-md mt-8 md:mt-0">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Other Services</h2>
      <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mb-6"></div>
      <p className="text-gray-600 text-sm text-center leading-relaxed">
        Beyond warehousing, YK Freightways offers a range of value-added logistics solutions including freight forwarding, distribution, and nationwide transport — all designed to move your business forward with speed and accuracy.
      </p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <WarehousingSolutions />
        <OtherServices />
      </div>
    </div>
  );
};

export default ServicesSection;
