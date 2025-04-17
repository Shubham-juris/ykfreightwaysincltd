import React from 'react'

const Mission = () => {
  return (
    <div>
       <div className="bg-blue-900 text-white py-20 relative overflow-hidden">
      {/* Background Image (replace with your actual image) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 blur-sm"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=600")' }}
      ></div>
      <div className="container mx-auto px-4 relative z-10 flex justify-center space-x-16">
        {/* Mission Section */}
        <div className="w-1/2 md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 animate-slide-in-left">MISSION</h2>
          <p className="text-lg opacity-80 animate-fade-in">
            Mixtape taxidermy plaid crucifix. Cosby sweater occupy cold-pressed Portland pop-up lo-fi PBR&B kale chips readymade.
            Flexitarian bitters Shoreditch literally paleo. Vice letterpress Bushwick direct trade fingerstache tattooed.
            Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.
          </p>
        </div>

        {/* Vision Section */}
        <div className="w-1/2 md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6 animate-slide-in-right">VISION</h2>
          <p className="text-lg opacity-80 animate-fade-in delay-200">
            Mixtape taxidermy plaid crucifix. Cosby sweater occupy cold-pressed Portland pop-up lo-fi PBR&B kale chips readymade.
            Flexitarian bitters Shoreditch literally paleo. Vice letterpress Bushwick direct trade fingerstache tattooed.
            Stumptown flannel mlkshk wayfarers forage, plaid VHS drinking vinegar quinoa YOLO.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Mission
