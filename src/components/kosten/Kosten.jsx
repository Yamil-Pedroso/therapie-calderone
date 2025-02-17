import React from 'react'
import massage from '/assets/images/masage.jpg'
import Scrollspy from 'react-scrollspy'

const Kosten = () => {
  return (
    <>
      <h3 className="kosten-title">Kosten</h3>
      <div className="kosten-container" id="kosten">
        <div className="kosten-wrapper">
          <ul className="k-list">
            <div className="m-therapie">
              <h3>Manuelle Lymphdrainage</h3>
              <li>
                <span>Behandlung 60-90 Min.</span>
              </li>
            </div>
            <div className="bar-twint">
              <ul>
                <li>CHF 35 /15min.</li>
                <li>CHF 140 /60min.</li>
              </ul>
            </div>
            <div className="m-lymph">
              <li>
                Die manuelle Lymphdrainage (MLD) kann bei den meisten
                Krankenkassen (KK) über die Zusatzversicherung abgerechnet
                werden.
              </li>
              <li>
                Bitte informieren Sie sich vorgängig bei Ihrer KK über den
                konkreten Leistungsumfang.
              </li>
            </div>
            <div className="selbs-price">
              <li className="selbs-text">
                Für Selbstzahlende biete ich andere Preise an, bitte fragen Sie
                bei mir nach.
              </li>
            </div>
            <div className="acp-beratung">
              <h3>ACP- Beratung (gesundheitliche Vorausplanung)</h3>
              <ul>
                <li>CHF 80.-/60min (max. CHF 240.-)</li>
              </ul>
            </div>
            <div className="emr-cer">
              <li>
                <a href="https://www.emr.ch/" target="_blank">
                  <h3>EMR Zertifiziert</h3>
                </a>
              </li>
            </div>
          </ul>
          <Scrollspy
            items={['kontakt']}
            currentClassName="is-current"
            offset={-200}
            className=""
          >
            <a
              href="#kontakt"
              className="rn-button-style--2 btn-kontakt"
              style={{ color: '#00a9ba', marginTop: '1rem' }}
            >
              Kontakt
            </a>
          </Scrollspy>
        </div>
        <div className="massage-img-wrapper">
          <img src={massage} alt="massage" className="massage-img" />
        </div>
      </div>
    </>
  )
}

export default Kosten
