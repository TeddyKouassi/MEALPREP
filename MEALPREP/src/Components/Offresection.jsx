
import './Offresection.css';
function Offresection(){
    return(
         <>
             <section className="offers">
                <div className="offre-header">
                    <span className="offre-1">
                        .Offres spéciales

                    </span>
                    <h2 className="offre-title">
                        DES PLATS BENINOIS A NE PAS MANQUER
                    </h2>
                    <p className="ofre-description">
                        Découvrez des repas locaux savoureux,préparés avce soin et adaptés à votre budget.
                        <br />Des plats équilibrés,délicieux et accessibles pour les jours.
                    </p>
                </div>

                <div class="flex">
                    <div >
                            <div class="rounded-xl bg-amber-700"  >
                                <h4>Riz sauce tomate avce poulet</h4>
                                <p>Servi avec poulet grillé et légumes</p>
                                <span>1500 FCFA</span>
                            </div>

                            <div >
                                <h4>Pâte sauce arachide</h4>
                                <p>Un classique riche et nourrissant</p>
                                <span>1200 FCFA</span>
                            </div>
                      </div>
                        <div >
                            <h4>Akassa + sauce gombo</h4>
                            <p>Un gout authentique et traditionnel</p>
                            <span>1000 FCFA</span>
                        </div>
                  
                </div>

             </section>
         </>
    )
}
export default Offresection;