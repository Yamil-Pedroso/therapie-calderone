import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Claudia from '/assets/images/claudia.jpg'

const about = {
  title: 'Über mich',
  text:
    'Ich bin Mutter von vier jungen Erwachsenen Menschen, welche langsam «flügge» werden. Für mich der richtige Moment um mich beruflich in eine Selbständigkeit als Lymphdrainage Therapeutin und ACP-Beraterin zu wagen. In meiner langjährigen Tätigkeit als Pflegefachfrau für Palliativ Care begegneten mir oft Menschen in schweren Krebserkrankungen mit massiven Ödemen. Da ihnen die Kraft fehlte ausser Hause eine Therapeutin aufzusuchen, blieben die Ödeme dieser Menschen oftmals unterbehandelt. Gerne möchte ich mit dem Angebot der Domizil-Behandlungen Teil der ambulanten Versorgung sein. Meine freie Zeit verbringe ich in den Bergen beim Klettern, Trailrunning und Bergsteigen. Die körperliche Herausforderung gibt mir Kraft und Energie belastende Situationen zu meistern und hält meine innere Balance. Ruhige Momente verbringe ich gerne mit meiner Familie, beim Lesen oder im Garten.',
  education:
    'Dipl. manuelle Lymphdrainage Therapeutin, ACP Swiss Beraterin, CAS Pain Nurse, Palliativ Care B2, Pflegefachfrau HF',
  experience:
    'ambulante Onkologie und Palliativ Care GZO und OnPac, Spitex mit Schwerpunkt Palliativ Care, Akut - und Langzeitpflege',
}

const About = () => {
  return (
    <Container style={{ marginTop: '10rem' }} id="ubermich">
      <Row className="about-wrapper">
        <Col>
          <img
            src={Claudia}
            alt="Claudia Calderone"
            style={{ width: '100%' }}
          />
        </Col>
        <Col>
          <Col>
            <div>
              <h1 className="about-title">{about.title}</h1>
              <div className="line"></div>
            </div>
            <p className="desc-title">{about.text}</p>
            <p className="ausbildung">
              <strong>Ausbildung:</strong> {about.education}
            </p>
            <p className="erfahrung">
              <strong>Erfahrung:</strong> {about.experience}
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default About
