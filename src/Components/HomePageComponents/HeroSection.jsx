import React from "react";
import { motion } from "framer-motion";


import bg1 from '../../assets/images/HomePageImages/bgImage1.jpg';
import bg2 from '../../assets/images/HomePageImages/bgImage2.jpg';
import bg3 from '../../assets/images/HomePageImages/bgImage3.jpg';


import ground from '../../assets/images/HomePageImages/ground.jpg';
import air from '../../assets/images/HomePageImages/air.jpg';
import sea from '../../assets/images/HomePageImages/sea.jpg';

const backgroundImages = [bg1, bg2, bg3];

const cards = [
  {
    title: "Ground Shipping",
    subtitle: "AT A GLANCE",
    image: ground,
  },
  {
    title: "Air Delivery",
    subtitle: "SPEED FOR YOUR GOODS",
    image: air,
  },
  {
    title: "Sea Delivery",
    subtitle: "CLEVERLY COMBINED",
    image: sea,
  },
];

export default function HeroSection() {
  const [bgIndex, setBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${backgroundImages[bgIndex]})` }}
    >
      {/* Wrapper for vertical layout */}
      <div className="flex py-10  flex-col justify-between min-h-screen bg-black/40 text-white">
        
        {/* Header content */}
        <div className="text-center pb-40 px-4">
          <h4 className="text-md md:text-lg uppercase tracking-wide font-semibold">
            Providing First Class Freight Services
          </h4>
          <h1 className="text-4xl md:text-6xl min-w-xs font-bold mt-4">
            Providing First Class Freight Services
          </h1>
        </div>

        {/* Spacer between heading and cards */}
        <div className="flex-grow" />

        {/* Cards section at the bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden  shadow-lg relative text-white h-[300px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="relative z-10 bg-gradient-to-t from-black/80 to-transparent p-6 h-full flex flex-col justify-end">
                <h5 className="text-sm font-semibold mb-1 uppercase">
                  {card.subtitle}
                </h5>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm mb-4">
                  Hashtag Blue Bottle Williamsburg meggings. Kickstarter gluten-free
                  mustache jean shorts. Portland messenger bag heirloom fap.
                </p>
                <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
