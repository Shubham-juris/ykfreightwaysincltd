import React from 'react'
import HeroSection from '../Components/HomePageComponents/HeroSEction'
import ServicesSection from '../Components/HomePageComponents/ServiceSEction'
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
