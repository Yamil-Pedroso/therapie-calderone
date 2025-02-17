import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Media from '../media/Media'

const ServiceImages = [
  {
    image1: '/assets/images/drenageL/m-1.jpeg',
  },
  {
    image1: '/assets/images/drenageL/m-2.jpeg',
  },
  {
    image1: '/assets/images/drenageL/m-3.jpeg',
  },
]

const linkBtn = {
  text: 'Weiter zum Flyer',
  link: '/assets/docs/flyer-lt.pdf',
}
class TherapyServices extends Component {
  render() {
    const ServiceImg = ServiceImages.slice(0, this.props.item)
    return (
      <>
        <div className="therapy-services">
          <div className="top-line">
            <h2 className="angebot">Angebot</h2>
          </div>
          <div className="therapy-img-wrapper">
            {ServiceImg.map((val, i) => (
              <div className="img-s-wrapper" key={i}>
                <img
                  src={val.image1}
                  alt="Service Images"
                  className="img-service"
                />
              </div>
            ))}
          </div>
          <div className="header-title">
            <h5>
              Die Lymphdrainage ist eine spezielle Art der medizinischen
              Massage.
            </h5>
          </div>
          <div className="therapy-services-wrapper">
            <div className="m-lymph-wrapper">
              <ul className="m-lymph">
                <h3>Manuelle Lymphdrainage MLD mit KPE</h3>
                <li className="parag">
                  Die manuelle Lymphdrainage (MLD) ist eine sanfte Therapieform.
                  Mit speziellen Handgriffen werden die Lymphgefässe angeregt
                  und es entsteht ein besserer Rücktransport. Wasseransammlungen
                  (Ödeme) werden abtransportiert.
                </li>
                <li className="parag">
                  Die manuelle Lymphdrainage ist Teil de komplexen
                  physikalischen Entstauungstherapie (KPE). Diese besteht aus
                  fünf Säulen:
                </li>
                <ul className="pillars">
                  <li>Hautpflege</li>
                  <li>MLD</li>
                  <li>Kompression</li>
                  <li>Bewegung</li>
                  <li>Selbstmanagement</li>
                </ul>
                <Link
                  to={linkBtn.link}
                  target="_blank"
                  className="btn btn-flyer"
                  style={{ color: '#fff', marginTop: '2rem' }}
                >
                  <p>{linkBtn.text}</p>
                </Link>
              </ul>
            </div>
            <div className="mld">
              <ul>
                <h3>Einsatzgebiet der MLD</h3>
                <li>Ödeme nach Krebsbehandlungen und Strahlentherapie</li>
                <li>Ödeme nach Traumen (SUP-Trauma, Knochenbrüche)</li>
                <li>Ödeme nach Operationen</li>
                <li>Lymphödeme</li>
                <li>CRPS</li>
                <li>Kopfschmerzen, Migräne</li>
                <li>Allg. Schmerzen nach Sportverletzungen</li>
                <li>Hämatome</li>
                <li>Schwere Beine</li>
                <li>Immunsystem stärkend</li>
                <li>Narbenstörung</li>
              </ul>
            </div>
          </div>
          <div className="service-line"></div>
          <Media />
          <div className="bottom-line"></div>
        </div>
      </>
    )
  }
}
export default TherapyServices
