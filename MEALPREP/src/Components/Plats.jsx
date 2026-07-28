function Plats({ image, nom, prix, description}){
    return ( 
        <>
        <div className="plat-card">
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
        
         </div>
        
        </>
    )
}
export default Plats;