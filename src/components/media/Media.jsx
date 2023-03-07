import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlay } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { BiLinkExternal } from 'react-icons/bi';

const linkAcpBtn = {
  text: 'ACP Flyer',
  link: '/assets/docs/flyer-acp.pdf'
}

function MyVideo(props) {
  return (
    <div style={{ position: "relative"}}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{backgroundColor: "#043053", display: "flex", flexDirection: "column",alignItems: "center", padding: "2.5rem"}}>
          <div>
             <p style={{fontSize: "2em", fontWeight: "600", color: "#fff"}}>Advanced Care Planning</p>
          </div>
          <div>
            <video width="720" height="640" controls>
                <source src="/assets/videos/Video.mp4" alt="Video" type="video/mp4" />
            </video>
          </div>
          <div style={{ position: "absolute", right: "-30px", top: "-30px", zIndex: "1", cursor: "pointer" }}>
            <div onClick={props.onHide}>
              <FaTimes style={{fontSize: "1.8rem", marginLeft: "0.3rem"}} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="">
      <Button onClick={() => setModalShow(true)}
         className="play-btn"
        >
        <FaPlay className="faplay-icon" />
      </Button>

      <MyVideo
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

// popup modal video with usestate

const Media = () => {
  return (
    <div className="planning-container" id="therapie">
      <h3 className='acp-title'>Advanced Care Planning</h3>
      <div className="acp-container">
        <div className="info-wrapper">
          <div className="acp-wrapper">
            <h2>ACP<span> Swiss</span></h2>
            <div className="line2"></div>
            <p>
            Die Patientenverfügung plus (PV plus) richtet sich an alle Menschen, die für Situationen der Urteilsunfähigkeit selbstbestimmt     vorsorgen und vorausplanen möchten.
            ACP= Advance Care Planning, die gesundheitliche Vorausplanung

            Die Beratung findet je nach Situation an 1-3 ca. einstündigen Gesprächs-Treffen statt. Nach dem Erstellen einer   Standortbestimmung   werden die Therapieziele festgelegt und weitere Behandlungswünsche erfasst.
            </p>
          </div>
          <div className="opt-info">
             <div className="acp-link">
                <Link to={linkAcpBtn.link} target="_blank" rel="noopener noreferrer" className="acp-btn">{linkAcpBtn.text}</Link>
             </div>
             <a href="https://www.acp-swiss.ch/" target="_blank" rel="noopener noreferrer" className="ext-link">
               ACP Swiss <BiLinkExternal className="link-icon" />
             </a>
          </div>
        </div>
        <div className="care-img">
          <div className="media-play">
            {App()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media
