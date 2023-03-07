import React ,{ Component }from "react";
class TherapyServices extends Component{
    render(){

        return(
            <>
                <div className="therapy-services">
                    <div className="m-lymph">
                        <h3>Manuelle Lymphdrainage MLD mit KPE</h3>
                        <li className="parag">
                          Die manuelle Lymphdrainage(MLD) ist eine sanfte Therapieform. Mit speziellen Handgriffen werden die   Lymphgefässe angeregt und es entsteht ein besserer Rücktransport. Wasseransammlungen(Ödeme) werden   abtransportiert.
                        </li>
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
            </>
        )
    }
}
export default TherapyServices;
