import React from 'react'
import massage from '/assets/images/masage.jpg'
import Scrollspy from 'react-scrollspy';

const Kosten = () => {
  return (
    <>
    <h3 className='kosten-title'>Kosten</h3>
    <div className="kosten-container" id="kosten">
        <div className="kosten-wrapper">
          <ul className="k-list">
              <div className="m-therapie">
                <h3>Manuelle Therapie</h3>
                <li><span>Behandlung 60-90min</span></li>
              </div>
              <div className="bar-twint">
                <li>35.-/15min Bar oder Twint</li>
                <li>140.-/60min</li>
              </div>
              <div className="m-lymph">
               <li>Die manuelle Lymphdrainage (MLD) kann bei den meisten Krankenkassen (KK) über die Zusatzversicherung abgerechnet werden.</li>
              </div>
              <div className="infor">
                <li>Bitte informieren Sie sich vorgängig bei Ihrer KK über den konkreten</li>
              </div>
              <div className="selbs-price">
                <span className="selbs-text">Für Selbstzahlende:</span>
                <li>biete ich andere Preise an, bitte fragen Sie bei mir nach.</li>
              </div>
              <div className="acp-beratung">
                <h3>ACP- Beratung</h3>
                <li>140.-/60min</li>
                <li>max. 500.-</li>
              </div>
          </ul>
          <Scrollspy items={['kontakt']} currentClassName="is-current" offset={ -200 } className="">
              <a href="#kontakt" className="rn-button-style--2 btn-kontakt" style=  {{color: "#00a9ba"}}>Kontakt</a>
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
