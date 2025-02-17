import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ScrollToTop from 'react-scroll-up'
import { FiChevronUp } from 'react-icons/fi'
import Services from '../components/services/Services'
import About from '../components/about/About'
import Kosten from '../components/kosten/Kosten'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Cookies from '../components/cookies/MyCookies'

setTimeout(() => {
  console.log('this is the first message')
}, 5000)

const HomePage = () => {
  return (
    <div style={{ positon: 'relative' }}>
      <Navbar />
      <About />
      <Services />
      <Kosten />
      <Contact />
      <Footer />
      <Cookies />
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
    </div>
  )
}

export default HomePage
