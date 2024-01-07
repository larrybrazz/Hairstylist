import React from 'react'
import AboutDisplay from './AboutDisplay'
import Team from './Team'
import Overview from './Overview'
import AboutDisplayOne from './AboutDisplayOne'
import AboutHeader from './AboutHeader'
import Awards from './Awards'

const About = () => {
  return (
      <div>
          <AboutHeader/>
          <Overview />
          <AboutDisplayOne />
          <Awards/>
          <Team/>
          <AboutDisplay/>
    </div>
  )
}

export default About