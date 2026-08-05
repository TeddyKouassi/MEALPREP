import {Link} from 'react-router-dom';
function Plats({ image, nom, prix, description}){
    return ( 
        <>
        <Link to="/Inscription" className="plat-card">
        
            <div className="plat-image-container">
                <img src={image} alt="" className="plat-image" />
            </div>
       

        <div className="plat-info-bande">
            <div className="plat-ligne-titre">
              <h3 className="plat-titre">{nom}</h3>
              <span className="plat-titre">{prix}</span>
            </div>
            <p className="plat-description">{description}</p>
        </div>
        
         
         </Link>
        
        </>
    )
}
export default Plats;
