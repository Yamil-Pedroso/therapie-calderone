import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FaPlay } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BiLinkExternal } from 'react-icons/bi'

const linkAcpBtn = {
  text: 'ACP Flyer',
  link: '/assets/docs/flyer-acp.pdf',
}

function MyVideo(props) {
  return (
    <div className="modal-container">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="modal-wrapper">
          <div className="video-wrapper">
            <video className="video-screen" controls>
              <source
                src="/assets/videos/Video.mp4"
                alt="Video"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="close-wrapper">
            <div onClick={props.onHide}>
              <FaTimes className="close-icon" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

function ModalAcp() {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div className="">
      <Button onClick={() => setModalShow(true)} className="play-btn">
        <FaPlay className="faplay-icon" />
      </Button>

      <MyVideo show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

// popup modal video with usestate

const Media = () => {
  return (
    <div className="acp-container">
      <div className="info-wrapper">
        <div className="acp-content">
          <div className="acp-wrapper">
            <h2>
              ACP<span> Swiss</span>
            </h2>
            <div className="line2"></div>
            <li>
              Die Patientenverfügung plus (PV plus) richtet sich an alle
              Menschen, die für Situationen der Urteilsunfähigkeit
              selbstbestimmt vorsorgen und vorausplanen möchten. ACP= Advance
              Care Planning, die gesundheitliche Vorausplanung. Die Beratung
              findet je nach Situation an 1-3 ca. einstündigen Gesprächs-Treffen
              statt. Nach dem Erstellen einer Standortbestimmung werden die
              Therapieziele festgelegt und weitere Behandlungswünsche erfasst.
            </li>
          </div>
          <div className="opt-info">
            <div className="acp-link">
              <Link
                to={linkAcpBtn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn acp-btn"
                style={{ color: '#fff' }}
              >
                {linkAcpBtn.text}
              </Link>
            </div>
            <a
              href="https://www.acp-swiss.ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="ext-link"
            >
              ACP Swiss <BiLinkExternal className="link-icon" />
            </a>
          </div>
        </div>
        <div className="care-img">
          <div className="media-play">{ModalAcp()}</div>
        </div>
      </div>
    </div>
  )
}

export default Media
