import React from 'react'
import HeroSection from '../Components/HomePageComponents/HeroSEction'
import ServicesSection from '../Components/HomePageComponents/ServiceSection'
import TestimonialSlider from '../Components/HomePageComponents/TestimonialsSection'
import NewsLetter from '../Components/HomePageComponents/NewsLetter'
import ImageCarousel from '../Components/ServicesComponents/ImageCarousel'

const HomePage = () => {
  return (
    <div>
   <HeroSection/>
   <ServicesSection/>
   <TestimonialSlider/>
   <NewsLetter/>
   <ImageCarousel/>
    </div>
  )
}

export default HomePage
