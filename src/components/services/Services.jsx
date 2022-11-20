import React, { Component, Fragment } from 'react'
import ServiceList from './ServiceList'

class Services extends Component {

  render() {
    return (
      <Fragment>
          {/* Start Service Area  */}
          <div className="service-area creative-service-wrapper ptb--120 bg_color--1" id="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="section-title text-left mb--30">
                                    <h2>Unsere Dienstleistungen</h2>
                                    <p>Die Lymphdrainage ist eine spezielle Art der medizinischen Massage.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}
      </Fragment>
    )
  }
}

export default Services
