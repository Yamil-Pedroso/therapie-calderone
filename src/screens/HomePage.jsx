import React, { Fragment } from 'react'
import Navbar from '../components/navbar/Navbar'
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Services from '../components/services/Services'
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

const HomePage = () => {
  console.log(getCookieConsentValue());

  return (
    <Fragment style={{height: "250vh", backgroundColor:"#cccccc"}}>
      <Navbar />
      <Services />
      <CookieConsent
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}

        enableDeclineButton
        onDecline={() => {
          alert("nay!");
        }}
        location="bottom"
        buttonText="Cool, I accept!"
        cookieName="myAwesomeCookieName3"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        overlay
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
      </CookieConsent>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
            <FiChevronUp />
        </ScrollToTop>
      </div>
    </Fragment>
  )
}

export default HomePage
