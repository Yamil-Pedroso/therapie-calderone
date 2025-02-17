import React, { useState, useEffect } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

function App() {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  )
}

const myStyles = {
  background: '#d7d7d7',
  borderRadius: '0.5rem',
  zIndex: '9999',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const btnDecline = {
  color: '#d6d6d6',
  background: '#c13a2d',
  borderRadius: '0.2rem',
  padding: '0.5rem 1rem',
  fontWeight: 'bold',
  fontSize: '1.2rem',
  '@media screen (max-width: 960px)': {
    background: 'red',
  },
}

const btnAccept = {
  color: '#eaeaea',
  background: '#127b85',
  borderRadius: '0.2rem',
  padding: '0.5rem 1rem',
  fontWeight: 'bold',
  fontSize: '1.2rem',
}

const MyCookies = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 4000)
  }, [])

  return (
    <>
      {show && (
        <CookieConsent
          enableDeclineButton
          declineButtonText="Ablehnen"
          declineButtonStyle={btnDecline}
          onDecline={() => {
            Cookies.remove('myAwesomeCookieName3')
          }}
          location="bottom"
          buttonText="Cool, ich akzeptiere!"
          cookieName="myAwesomeCookieName3"
          className="cookieConsent"
          style={myStyles}
          buttonStyle={btnAccept}
          expires={150}
          overlay
          visible="byCookieValue"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h5 style={{ textAlign: 'center', color: '#3e3e3e' }}>
              Diese Webseite verwendet Cookies, um die Benutzerfreundlichkeit zu
              verbessern.
            </h5>
            <div style={{ width: '8vw', height: '8vw', borderRadius: '50%' }}>
              <img
                src="/assets/images/cookies-img.png"
                alt="cookies"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  marginTop: '0.7rem',
                }}
              />
            </div>
          </div>
        </CookieConsent>
      )}
    </>
  )
}

export default MyCookies
