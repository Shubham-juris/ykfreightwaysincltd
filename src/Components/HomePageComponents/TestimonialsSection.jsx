import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import bg3 from "../../assets/images/HomePageImages/bgImage3.jpg";
import avatar from '../../assets/images/HomePageImages/avatar.jpg'
import london from '../../assets/images/HomePageImages/london.jpg'
import france from '../../assets/images/HomePageImages/france.jpg'
import china from '../../assets/images/HomePageImages/china.jpg'
import brazil from '../../assets/images/HomePageImages/brazil.jpg'
const testimonials = [
  {
    name: "Kelly Stafford",
    role: "CEO, Grand Valley Inc, London",
    message:
      "Truffaut skateboard hashtag, pork belly Odd Future bespoke paleo forage before they sold out meggings Banksy cred.",
    img: london,
    avatar: avatar,
  },
  {
    name: "Fransua Madwin",
    role: "CEO, Grand Valley Inc, France",
    message:
      "Bitters plaid banjo High Life, tofu artisan Kickstarter chillwave shabby chic Pitchfork flexitarian pug wayfarers hoodie.",
    img: france,
    avatar: avatar,
  },
  {
    name: "Carol Linda Van",
    role: "CEO, Grand Valley Inc, Brasil",
    message:
      "Odd Future bespoke paleo forage before they sold out meggings Banksy cred.",
    img: brazil,
    avatar: avatar,
  },
  {
    name: "Jin TaiWan",
    role: "CEO, Grand Valley Inc, China",
    message:
      "Kickstarter chillwave shabby chic Pitchfork flexitarian pug wayfarers hoodie.",
    img: china,
    avatar: avatar,
  },
];
export default function TestimonialSlider() {
    return (
      <div className="relative flex flex-col gap-20 justify-center items-center py-20 bg-cover bg-center" style={{ backgroundImage: `url(${bg3})` }}>
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
  
        {/* Content */}
        <div className="relative z-10 text-center flex flex-col gap-10 text-white ">
          <h2 className="text-3xl font-bold">What Customers Are Saying About Us</h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2"></div>
        </div>
  
        <div className="relative z-10 px-6 max-w-[100%] lg:max-w-[70%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            navigation
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="pb-10"
          >
            {testimonials.map((t, index) => (
             <SwiperSlide key={index}>
             <div className="relative group h-[400px]  overflow-hidden shadow-lg">
               <img src={t.img} alt="City" className="w-full h-full object-cover" />
           
               {/* Avatar always visible */}
               <div className="absolute bottom-1 p-6 w-full bg-black/70  z-10 flex items-center space-x-3">
                 <img
                   src={t.avatar}
                   alt="Avatar"
                       loading="lazy"
                   className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
                 />
                 <div className="text-white  drop-shadow">
                   <p className="font-semibold">{t.name}</p>
                   <p className="text-xs text-gray-300">{t.role}</p>
                 </div>
               </div>
           
               {/* Message overlay, initially hidden and slides up on hover */}
               <div className="absolute inset-0 flex items-end p-6 bg-black/70 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                 <div className="text-white mb-[50%]">
                   <FaQuoteLeft className="text-xl mb-2" />
                   <p className="text-sm leading-relaxed ">{t.message}</p>
                   <FaQuoteRight className="text-xl mt-2 ml-auto" />
                 </div>
               </div>
             </div>
           </SwiperSlide>
           
            ))}
          </Swiper>
        </div>
      </div>
    );
  }
  