import React, { Component, Fragment } from 'react'
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
      <Fragment>
        <div className="main-container">
          <div className="service-container">
              <div className="header-title">
                  <h2>Unsere Dienstleistungen</h2>
                  <p>Die Lymphdrainage ist eine spezielle Art der medizinischen Massage.</p>
              </div>
               <div className="therapy-img-wrapper">
                  {ServiceImg.map( (val , i) => (
                      <div style={{margin: "0 20px"}} key={i}>
                          <img src={val.image1} alt="Service Images" style={{width: "10rem", height:"10rem",borderRadius: "50%", backgroundImage:"cover", backgroundPosition:"center",  border:"4px solid #043053"}} />
                      </div>
                  ))}
                </div>
          <TherapyServices />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Services
