import React from 'react'
import HeroSection from '../Components/HomePageComponents/HeroSection'
import ServicesSection from '../Components/HomePageComponents/ServiceSection'
import TestimonialSlider from '../Components/HomePageComponents/TestimonialsSection'
import NewsLetter from '../Components/HomePageComponents/NewsLetter'

const HomePage = () => {
  return (
    <div>
   <HeroSection/>
   <ServicesSection/>
   <TestimonialSlider/>
   <NewsLetter/>
    </div>
  )
}

export default HomePage
