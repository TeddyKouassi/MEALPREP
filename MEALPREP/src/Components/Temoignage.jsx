import chef from "../assets/chef.png"
import chef2 from "../assets/chef2.png"
function Temoignage(){
    return(
        <>

        <div class="flex items-center justify-center gap-2 ">
        <div class=" w-3 h-3 rounded-xl bg-amber-600 items-center "></div>
        <p class="">TEMOIGNAGES</p>
      </div>

        <section className="card-container">
                <div className="card-menu">
                  <img src={chef} alt="chef" style={{width:"100%"}}/>
                  
                </div>
        
                <div className="card-menu" >
                  
                  <div className="container-temoignage">
                    <h4>
                      <b>CE QUE DISENT NOS CLIENTS</b>
                    </h4>
                    <p>"La nourriture était absolument incroyable ! Chaque bouchée était fraîche, pleine de saveurs et parfaitement cuisinée. 
                        Je reviendrai sans hésiter avec grand plaisir et satisfaction."</p>
                  </div>
                </div>
        
                <div className="card-menu">
                  <img src={chef2} alt="chef2" style={{width :"100%"}} />
                  
                </div>
        
                
              </section>
        </>
    )
}
export default Temoignage;