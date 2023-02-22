import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const contact = {
  title: 'KONTAKT',
  tel: '+41 79 523 81 57',
  email: 'claudia.calderone@gmx.ch',
  address: 'Stationstrasse 57, 8606 Nänikon'
}

const Contact = () => {
  return (
    <Container style={{textAlign:'center', marginTop: "5rem"}}>
        <Row>
          <Col>
            <h2>{contact.title}</h2>
            <h3>Telefon: <a href="tel:+41795238157" target="_blank">{contact.tel}</a></h3>
            {/* emailto*/}
            <h3 style={{cursor: "pointer"}}>Email: <a href="mailto:claudia.calderone@gmx.ch" target="_blank">{contact.email}</a></h3>
            <h3>Adresse: {contact.address}</h3>
          </Col>
        </Row>
    </Container>
  )
}

export default Contact
