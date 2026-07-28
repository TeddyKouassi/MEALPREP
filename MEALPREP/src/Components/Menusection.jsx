import menusectionimg from "../assets/menusection.png";
import './menusection.css';

function Menusection(){
    
    return(
        <>
        <section className="menu-section">
        <div className="menu-section-container">
            <h1>
                CONÇU POUR LA SAVEUR, FAIT POUR IMPRESSIONNER
            </h1>
            <p>
                Chaque plat est préparé avec soin à partir d'ingrédients frais et de saveurs audacieuses —
                 élaboré pour satisfaire toutes les envies.
            </p>
        </div>

        <div className="conatainer-image">
            <img src={menusectionimg} alt="" />
        </div>

        



        </section>
        </>
        
    )
}
export default Menusection;