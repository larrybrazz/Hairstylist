import React from 'react'
import Notification from '../Components/Header/Notification'
import Navbar from '../Components/Header/Navbar'
import Carousel from '../Components/Carousel/Carousel'
import DisplayOne from '../Components/Displays/DisplayOne'
import Services from '../Components/Services/Services'
import ServicesPage from '../Components/Services/ServicesPage'
import DisplayTwo from '../Components/Displays/DisplayTwo'
import Newsletter from '../Components/Displays/Newsletter'

const Home = () => {
  return (
      <div> 
          <Carousel />
          <DisplayOne />
          <DisplayTwo/>
      <ServicesPage />
      <Newsletter/>
    </div>
  )
}

export default Home