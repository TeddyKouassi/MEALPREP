import Menusection from "../Components/Menusection";
import Offresection from "../Components/Offresection";
import RecettesList from "../Components/RecettesList"
import "./NosRecettes.css";

import b1img from "../assets/b1.png";
import b2img from "../assets/b2.png";
import b3img from "../assets/b3.png";
import b4img from "../assets/b4.png";
import b5img from "../assets/b5.png";
import b6img from "../assets/b6.png";




    const recettes = [
        {
            id: 1,
            nom: "Amiwo",
            image: b1img,
            description: "Un plat béninois à base de pâte de maïs et de sauce tomate.",
            calories: 500,
            temps: 45,
            objectif: "Maintien",
            categorie:"Dejeuner"
        },

        {
            id: 2,
            nom: "Haricot",
            image: b2img,
            description: "Un repas riche en protéines, idéal pour une alimentation équilibrée.",
            calories: 450,
            temps: 30,
            objectif: "Prise de masse",
            categorie:"Dejeuner"
        },

        {
            id: 3,
            nom: "Igname pilée",
            image: b3img,
            description: "Un plat traditionnel béninois à base d'igname accompagné de sauce.",
            calories: 600,
            temps: 50,
            objectif: "Prise de masse",
            categorie:"Dejeuner"
        },

        {
            id: 4,
            nom: "Amiwo",
            image: b4img,
            description: "Un plat béninois à base de pâte de maïs et de sauce tomate.",
            calories: 500,
            temps: 45,
            objectif: "Maintien",
            categorie:"Dejeuner"
        },

        {
            id: 5,
            nom: "Igname pilée",
            image: b5img,
            description: "Un plat traditionnel béninois à base d'igname accompagné de sauce.",
            calories: 600,
            temps: 50,
            objectif: "Prise de masse",
            categorie:"Dejeuner"
        },

        {
            id: 6,
            nom: "Haricot",
            image: b6img,
            description: "Un repas riche en protéines, idéal pour une alimentation équilibrée.",
            calories: 450,
            temps: 30,
            objectif: "Prise de masse",
            categorie:"Dejeuner"
        },


    ];

function NosRecettes(){
    return(
        <>
        <Menusection/>
    <Offresection/>
        <div className="recettes">

        <section className="recettes-hero"> 
         
        <h1>
            Nos Recettes
        </h1>
        <p>
         Découvrez des recettes simples, équilobrées et adaptées
         à vos objectifs
        </p>

        </section>
           
           <RecettesList recettes={recettes}/>
          
          </div>
        </> 

    )
}
export default NosRecettes;