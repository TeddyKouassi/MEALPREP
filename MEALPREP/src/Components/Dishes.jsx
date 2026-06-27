import './Dishes.css'
import amiwoImg from "../assets/burger.png"; 
import haricotImg from "../assets/pizza.png"
import ignameImg from "../assets/nouilles.png"
import akassaImg from "../assets/image.png"


function Dishes(){
    return(
        <>
            <section className=" space-y-4 ">
                <div class="flex items-center justify-center gap-2 ">
                    <div class=" w-3 h-3 rounded-xl bg-amber-600 items-center "></div>
                    <p class="">Catégories</p>
                </div>
                <div class="">
                    <h2 class="uppercase ">Explore nos plats</h2>
                </div>
                <div>
                 <p className="">
                    Découvre des plats béninois simples et adaptés à ton budget.
                </p>
                </div>
              
            </section>
        
            <section className='dishes-1'>
                <div className="card">
                    <img src={amiwoImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Amiwo</b></h4> 
                        <p>400 FCFA; 450 kcal</p>
                    </div>
                </div>

        
                <div className="card">
                    <img src={haricotImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Haricot</b></h4> 
                        <p>300 FCFA; 450 kcal</p>
                    </div>
                </div>

                
                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>

                
                <div className="card">
                    <img src={akassaImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Akassa + sauce gombo</b></h4> 
                        <p>500 FCFA; 550 kcal</p>
                    </div>
                </div>

                <div className="card">
                    <img src={amiwoImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Amiwo</b></h4> 
                        <p>400 FCFA; 450 kcal</p>
                    </div>
                </div>

                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>
                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>

                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>

                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>

                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>

                <div className="card">
                    <img src={ignameImg} alt="Avatar" style={{width: "100%"}} />
                    <div className="container">
                        <h4><b>Igname pilée</b></h4> 
                        <p>700 FCFA; 800 kcal</p>
                    </div>
                </div>






            </section>

            
        </>
    )
}

export default Dishes;
