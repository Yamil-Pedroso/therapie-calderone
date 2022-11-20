import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Services from '../components/services/Services'

const HomePage = () => {
  return (
    <div style={{height: "250vh", backgroundColor:"#cccccc"}}>
      <Navbar />
      <Services />
    </div>
  )
}

export default HomePage
