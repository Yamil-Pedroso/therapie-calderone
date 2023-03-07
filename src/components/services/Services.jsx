import React, { Component } from 'react'
import TherapyServices from './ServiceList'

const ServiceImages = [
    {
      image1: "/assets/images/drenageL/image1.jpg"
    },
    {
      image1: "/assets/images/drenageL/claudia-1.jpeg"
    },
    {
      image1: "/assets/images/drenageL/image3.jpg"
    }
];
class Services extends Component {

  render() {
    const { image1 } = this.props;
    const ServiceImg = ServiceImages.slice(0 , this.props.item);

    return (
      <>
        <div className="main-container" id="angebot">
          <div className="service-container">
              <div className="header-title">
                  <h2 className="service-title">Unsere Dienstleistungen</h2>
                  <p>Die Lymphdrainage ist eine spezielle Art der medizinischen Massage.</p>
              </div>
               <div className="therapy-img-wrapper">
                  {ServiceImg.map( (val , i) => (
                      <div className="img-s-wrapper" key={i}>
                          <img src={val.image1} alt="Service Images" className="img-service" />
                      </div>
                  ))}
                </div>
          <TherapyServices />
          </div>
        </div>
      </>
    )
  }
}

export default Services
