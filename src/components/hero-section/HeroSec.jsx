import React from 'react'


const SlideList = [
  {
      textPosition: 'text-center',
      category: '',
      title: 'THERAPIE CALDERONE',
      description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
      buttonText: 'Contact Us',
      buttonLink: '/contact'
  }
]

const HeroSec = () => {
  return (
    <div>
         {/* Start Slider Area   */}
         <div className="slider-activation slider-creative-agency" id="home">
                    <div className="bg_image bg_image--1" data-black-overlay="4">
                        {SlideList.map((value , index) => (
                            <div className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className={`inner ${value.textPosition}`}>
                                                {value.category ? <span>{value.category}</span> : ''}
                                                {value.title ? <h1 className="title" style={{color: "#77cbcc"}}>{value.title}</h1> : ''}
                                                {value.description ? <p className="description">{value.description}</p> : ''}
                                                {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End Slider Area   */}
    </div>
  )
}

export default HeroSec
