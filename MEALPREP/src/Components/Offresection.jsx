
import './Offresection.css';
import Buttonvar from './Button-var';

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
           
                            <div className="h-80 w-160 rounded-4xl bg-[url('https://framerusercontent.com/images/PDrjHbZPzqvaYnSBHOi3BevkHEA.png?width=2192&height=1152')] bg-cover bg-center bg-no-repeat relative overflow-hidden"> 
                                  <div className="flex flex-col gap-6 justify-center h-full  w-3/4">

                                        <div>
                                            <h4 className="text-white text-4xl font-black uppercase leading-tight text-left">Riz sauce tomate avec poulet</h4>
                                            <p className="text-white text-lg font-medium opacity-90 mt-2 text-left">Servi avec poulet grillé et légumes</p>
                                        </div>
                                    
                                        <div class="">
                                            <button className="flex items-center justify-center bg-white rounded-full w-32 h-12 transition duration-150 hover:bg-[#fc9e25] ">
                                                1500 FCFA <span className="text-xl">🔥</span>
                                            </button>
                                        </div>
                                        
                                  </div>
                            </div>


                            <div >
                                <h4>Pâte sauce arachide</h4>
                                <p>Un classique riche et nourrissant</p>
                             
                            </div>
                      </div>
                        <div >
                            <h4>Akassa + sauce gombo</h4>
                            <p>Un gout authentique et traditionnel</p>
                            <Buttonvar text="1000 FCFA"/>
                        </div>
                  
                </div>

             </section>
         </>
    )
}
export default Offresection;