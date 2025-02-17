import React from 'react'
import Avatar from '/assets/images/bg/avatar.png'

const contact = {
  title: 'KONTAKT',
  tel: '+41 79 523 81 57',
  email: 'claudia.calderone@gmx.ch',
  dom_behandlung: 'Domizil Behandlung und Beratung',
  method1: 'Physiotherapie Rotonda',
  address1: 'Stationstrasse 57, 8606 Nänikon',
  method2: 'Praxis Fit-Balance',
  address2: 'Bahnhofstraße 31, 8320 Fehraltorf',
}

const Contact = () => {
  return (
    <div className="contact-container" data-black-overlay="2" id="kontakt">
      <div className="right-contact">
        <div className="avatar">
          <img src={Avatar} alt="avatar" className="avatar-img" />
        </div>
        <h3>{contact.title}</h3>
        <h3>
          Telefon:{' '}
          <a href="tel:+41795238157" target="_blank">
            {contact.tel}
          </a>
        </h3>
        {/* emailto*/}
        <h3 style={{ cursor: 'pointer' }}>
          Email:{' '}
          <a href="mailto:claudia.calderone@gmx.ch" target="_blank">
            {contact.email}
          </a>
        </h3>
        <ul className="dom-behandlung">
          <li>
            <h3>{contact.dom_behandlung}</h3>
          </li>
          <li>
            <h3>{contact.method1}</h3>
          </li>
          <li>
            <h3>Adresse: {contact.address1}</h3>
          </li>
          <li>
            <h3>{contact.method2}</h3>
          </li>
          <li>
            <h3>Adresse: {contact.address2}</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
