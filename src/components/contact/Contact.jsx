import React from 'react'
import Avatar from '/assets/images/bg/avatar.png'

const contact = {
  title: 'KONTAKT',
  tel: '+41 79 523 81 57',
  email: 'claudia.calderone@gmx.ch',
  dom_behandlung: 'Domizil Behandlung und Beratung',
  days: 'Dienstag und Freitag ganzer Tag oder nach Ansprache',
  address: 'Stationstrasse 57, 8606 Nänikon'
}

const Contact = () => {
  return (
    <div className="contact-container" data-black-overlay="2" id="kontakt">
      <div className="right-contact">
      <div className="avatar">
        <img src={Avatar} alt="avatar" className="avatar-img" />
      </div>
        <h3>{contact.title}</h3>
        <h3>Telefon: <a href="tel:+41795238157" target="_blank">{contact.tel}</a></h3>
        {/* emailto*/}
        <h3 style={{cursor: "pointer"}}>Email: <a href="mailto:claudia.calderone@gmx.ch" target="_blank">{contact.email}</a></h3>
        <ul className="dom-behandlung">
          <li>{contact.dom_behandlung}</li>
          <li>{contact.days}</li>
        </ul>
        <h3>Adresse: {contact.address}</h3>
      </div>
    </div>
  )
}

export default Contact
