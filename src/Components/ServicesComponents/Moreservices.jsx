import { useState, useEffect } from 'react';

const ProgressBar = ({ label, value }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(value);
    }, 300); // Add a small delay for the animation to be visible
  }, [value]);

  return (
    <div className="mb-4">
      <div className="text-sm text-gray-700 mb-1">{label} {value}%</div>
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
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Warehousing Solutions</h2>
      <p className="text-gray-600 text-sm mb-6">
        Trust fund paleo cray swag, health goth mixtape Carles deep v mustache craft beer
        retro Williamsburg High Life Godard. go's narwhal drinking vinegar gentrify lo-fi. Cray
        Austin Neutra farm-to-table pork belly Pitchfork, Odd Future food truck go's Helvetica.
      </p>
      <div>
        <ProgressBar label="Your Products are Always Available" value={98} />
        <ProgressBar label="Materials Handling Equipment" value={80} />
        <ProgressBar label="High Transparency" value={70} />
        <ProgressBar label="Outgoing Shipment" value={65} />
      </div>
    </div>
  );
};

const OtherServices = () => {
  return (
    <div className="bg-white py-8 px-6 rounded-md shadow-md mt-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">OTHER SERVICES</h2>
      <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
      <p className="text-gray-600 text-sm text-center">
        Artisan selvage art party Godard, forage Austin Pitchfork. Organic tofu vinyl VHS cold-pressed
        gastropub. Tousled letterpress actually irony Vice farm-to-table. Street art you probably haven't
        heard of them bicycle rights Cosby sweater small batch, PBR&B lomo.
      </p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <WarehousingSolutions />
        <OtherServices />
      </div>
    </div>
  );
};

export default ServicesSection;