
import RecettesCards from "./RecettesCards";


function RecettesList({recettes}){

    


    return(
        <> 
        <section className="recettes-list">

            {
                recettes.map((recette)=>(
                    <RecettesCards
                        key={recette.id}
                        recette={recette}
                    />
                ))
            }

        </section>
        </>
    );
}

export default RecettesList;