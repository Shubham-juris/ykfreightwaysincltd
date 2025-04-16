import React from 'react'
import Welcome from '../Components/AboutComponents/Welcome'
import LogisticsOfferSection from '../Components/AboutComponents/LogisticsOfferSection'
import CompanyValuesSection from '../Components/AboutComponents/CompanyValuesSection'
import Mission from '../Components/AboutComponents/Mission'
import Board from '../Components/AboutComponents/Board'

const Aboutpages = () => {
  return (
    <div>
      <Welcome/>
      <LogisticsOfferSection/>
      <CompanyValuesSection/>
      <Mission/>
      <Board/>
    </div>
  )
}

export default Aboutpages
