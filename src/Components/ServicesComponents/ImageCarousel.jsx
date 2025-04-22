import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "THE RIGHT STORAGE FOR YOU",
    description: "Efficient and secure storage solutions tailored to your needs.",
    image: " https://plus.unsplash.com/premium_photo-1682144324433-ae1ee89a0238?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D  ",
  },
  {
    id: 2,
    title: "OPTIMIZED WAREHOUSING",
    description: "Maximize your space and streamline your logistics.",
    image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJ1Y2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "SECURE AND RELIABLE",
    description: "Top-notch security to keep your goods safe and protected.",
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJ1Y2t8ZW58MHx8MHx8fDA%3D",
  },
];

const ImageCarousel = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="text-center bg-opacity-50 p-8 rounded-lg">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="mt-4 text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
