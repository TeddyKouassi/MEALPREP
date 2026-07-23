import  "./Celebration.css";
import celebration1 from"../assets/celebration1.png";
import celebration2 from"../assets/celebration2.png";
import celebration3 from"../assets/celebration3.png";

function Celebration (){
    return(
        <>
        <div class="flex items-center justify-center gap-2 ">
        <div class=" w-3 h-3 rounded-xl bg-amber-600 items-center "></div>
        <p class="">NOS FORMULES</p>
      </div>

      <div>
        <h2>DES REPAS POUR TOUT VOS OBJECTIFS</h2>
        <p>
         Du petit-déjeuner au dîner, nous vous livrons des plats sains et locaux cuisinés avec soin, 
            pour vous régaler chaque jour sans perdre de temps.
        </p>
      </div>
        

        <section className="card-container">
                <div className="card-celeb">
                  
                    <img src={celebration1} alt="celbration1" style={{ width: "100%" }} />
                    
                         <span className="dishes-tag">PETIT DEJEUNER</span>
                    
                  
                  <div className="container-celeb">
                    <h4>
                      <b>Igname pilée</b>
                    </h4>
                    <p>700 FCFA; 800 kcal</p>
                  </div>
                </div>
        
                <div className="card-celeb">
                  
                    <img src={celebration2} alt="celebration2" style={{ width: "100%" }} />
                  <span className="dishes-tag">DEJEUNER</span>
                  <div className="container-celeb">
                    <h4>
                      <b>Amiwo</b>
                    </h4>
                    <p>400 FCFA; 450 kcal</p>
                  </div>
                </div>
        
                <div className="card-celeb">
                  
                    <img src={celebration3} alt="celebration3" style={{ width: "100%" }} />
                   <span className="dishes-tag">DINER</span>
                  <div className="container-celeb">
                    <h4>
                      <b>Amiwo</b>
                    </h4>
                    <p>400 FCFA; 450 kcal</p>
                  </div>
                </div>
              </section>

        </>

    )
}
export default Celebration