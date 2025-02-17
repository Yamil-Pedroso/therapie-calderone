import React, { Component } from 'react'
import TherapyServices from './ServiceList'
import Media from '../media/Media'

const ServiceImages = [
  {
    image1: '/assets/images/drenageL/m-1.jpeg',
  },
  {
    image1: '/assets/images/drenageL/m-2.jpeg',
  },
  {
    image1: '/assets/images/drenageL/m-3.jpeg',
  },
]
class Services extends Component {
  render() {
    return (
      <>
        <div className="main-container" id="angebot">
          <div className="service-container">
            <TherapyServices />
          </div>
        </div>
      </>
    )
  }
}

export default Services
