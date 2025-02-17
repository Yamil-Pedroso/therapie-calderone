import React from 'react'
import Scrollspy from 'react-scrollspy'

const SlideList = [
  {
    textPosition: 'text-center',
    category: '',
    title: 'THERAPIE CALDERONE',
    description:
      'Es ist mir ein Anliegen auch jene Menschen behandeln und beraten zu können, welche kräftemässig den Weg in eine Praxis nicht mehr auf sich  nehmen können. Gerne berate oder behandle ich Sie bei Ihnen zu Hause, Domizil-Behandlung.',
    buttonText: 'Kontakt',
  },
]

const HeroSec = () => {
  return (
    <>
      {/* Start Slider Area   */}
      <div className="slider-activation slider-creative-agency" id="home">
        <div className="bg_image bg_image--1" data-black-overlay="4">
          {SlideList.map((value, index) => (
            <div
              className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center"
              key={index}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ''}
                      {value.title ? (
                        <h1 className="title" style={{ color: '#77cbcc' }}>
                          {value.title}
                        </h1>
                      ) : (
                        ''
                      )}
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ''
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <Scrollspy
                            items={['kontakt']}
                            currentClassName="is-current"
                            offset={-200}
                          >
                            <a
                              href="#kontakt"
                              className="rn-button-style--2 btn-primary-color"
                            >
                              {value.buttonText}
                            </a>
                          </Scrollspy>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Slider Area   */}
    </>
  )
}

export default HeroSec
