
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
  <div>
    <div class="h-80 w-160 rounded-4xl bg-[url(https://framerusercontent.com/images/PDrjHbZPzqvaYnSBHOi3BevkHEA.png?width=2192&height=1152)] bg-cover bg-center bg-no-repeat pl-10">
      <div class="flex flex-col gap-50 pl-20 text-left">
        <div class=" ">
          <h4 class="">Riz sauce tomate avce poulet</h4>
          <p>Servi avec poulet grillé et légumes</p>
        </div>
        <div class=" ">
          <button class="bg-red-800">1500 FCFA</button>
        </div>
      </div>
    </div>

    <div>
      <h4>Pâte sauce arachide</h4>
      <p>Un classique riche et nourrissant</p>
    </div>
  </div>
  <div>
    <h4>Akassa + sauce gombo</h4>
    <p>Un gout authentique et traditionnel</p>
    <Buttonvar text="1000 FCFA" />
  </div>
</div>


             </section>
         </>
    )
}
export default Offresection;