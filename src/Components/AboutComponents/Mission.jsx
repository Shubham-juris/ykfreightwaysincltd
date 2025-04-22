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
            Mixtape taxidermy plaid crucifix. Cosby sweater occupy cold-pressed Portland pop-up lo-fi PBR&B kale chips readymade.
            Flexitarian bitters Shoreditch literally paleo. Vice letterpress Bushwick direct trade fingerstache tattooed.
            Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.
          </p>
        </div>

        {/* Vision Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-center md:text-left animate-slide-in-right">
          <h2 className="text-3xl font-bold mb-4">VISION</h2>
          <p className="text-base sm:text-lg opacity-80 leading-relaxed">
            Mixtape taxidermy plaid crucifix. Cosby sweater occupy cold-pressed Portland pop-up lo-fi PBR&B kale chips readymade.
            Flexitarian bitters Shoreditch literally paleo. Vice letterpress Bushwick direct trade fingerstache tattooed.
            Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
