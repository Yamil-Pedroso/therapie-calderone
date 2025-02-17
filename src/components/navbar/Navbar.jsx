import React, { Component, Fragment } from 'react'
import Scrollspy from 'react-scrollspy'
import { FiX, FiMenu } from 'react-icons/fi'
import HeroSec from '../hero-section/HeroSec'
import Helmet from 'react-helmet'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.menuTrigger = this.menuTrigger.bind(this)
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this)
    this.stickyHeader = this.stickyHeader.bind(this)

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener('load', function () {
      console.log('All assets are loaded')
    })
  }
  menuTrigger() {
    document.querySelector('.header-wrapper').classList.toggle('menu-open')
  }
  CLoseMenuTrigger() {
    document.querySelector('.header-wrapper').classList.remove('menu-open')
  }
  stickyHeader() {}

  render() {
    window.addEventListener('scroll', function () {
      let value = window.scrollY
      if (value > 50) {
        document.querySelector('.header--fixed').classList.add('sticky')
      } else {
        document.querySelector('.header--fixed').classList.remove('sticky')
      }
    })

    let elements = document.querySelectorAll('.has-droupdown > a')
    for (let i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active')
          this.classList.toggle('open')
        }
      }
    }

    return (
      <>
        <Helmet pageTitle="Therapie Calderone" />
        {/* Start Header Area  */}
        <header className="header-area formobile-menu header--fixed default-color">
          <div className="header-wrapper" id="header-wrapper">
            <div className="header-left">
              <div className="logo">
                <a href="/">
                  <img
                    className="logo-1"
                    src="/assets/images/logo/massage3.png"
                    alt="Calderone-Logo"
                  />
                  <img
                    className="logo-2"
                    src="/assets/images/logo/massage3.png"
                    alt="Calderone-Logo"
                  />
                </a>
              </div>
            </div>
            <div className="header-right">
              <nav className="mainmenunav d-lg-block">
                <Scrollspy
                  className="mainmenu"
                  items={['home', 'ubermich', 'angebot', 'kosten', 'kontakt']}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#ubermich">Über mich</a>
                  </li>
                  <li>
                    <a href="#angebot">Angebot</a>
                  </li>
                  <li>
                    <a href="#kosten">Kosten</a>
                  </li>
                  <li>
                    <a href="#kontakt">Kontakt</a>
                  </li>
                </Scrollspy>
              </nav>
              {/* Start Humberger Menu  */}
              <div className="humberger-menu d-block d-lg-none pl--20">
                <span
                  onClick={this.menuTrigger}
                  className="menutrigger text-white"
                >
                  <FiMenu />
                </span>
              </div>
              {/* End Humberger Menu  */}
              <div className="close-menu d-block d-lg-none">
                <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </header>
        {/* End Header Area  */}
        <HeroSec />
      </>
    )
  }
}

export default Navbar
