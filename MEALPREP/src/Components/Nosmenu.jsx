import { useState } from "react";
import { DATA_PLATS } from "./platdata";
import Plats from "./Plats";
import "./Nosmenu.css";

function Nosmenu(){
    const[categorieActive, setCategorieActive]= useState("burger");
    //  ici j'ai procédé au filtrage du gros tableau unique selon la catégorie cliquée
    const platsFiltres = DATA_PLATS.filter(plat=> plat.categorie===categorieActive);
    return(
        <>
        <section className="Nos-menu">
        <div className="categories-buttons">
            <button className={categorieActive === "burger" ? "btn-categorie active" : "btn-categorie"}
            onClick={() => setCategorieActive("burger")}
            >
                Pour les burgers
            </button>

            <button className={categorieActive === "pasta" ? "btn-categorie active" : "btn-categorie"}
            onClick={() => setCategorieActive("pasta")}
            >
                Pour les pattes
            </button>

            <button className={categorieActive === "dessert" ? "btn-categorie active" : "btn-categorie"}
            onClick={() => setCategorieActive("dessert")}
            >
                Pour les desserts
            </button>
        </div>

        {/* C'est ici je vais appliquer la grille des plats
        ezn fonction  de l'id, du nom , du prix et de la description
        Alors on a: */}

        <div className="plats-grid">
            { platsFiltres.map((plat)=>
            <Plats
            key={plat.id}
            image={plat.image}
            nom={plat.nom}
            prix={plat.prix}
            description={plat.description}
            />
            )}
        </div>
         </section>
        </>
        
    )
}
export default Nosmenu;