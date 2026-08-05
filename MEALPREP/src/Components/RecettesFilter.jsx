function RecettesFilter(){

    return(
        <> 
        <section className="recettes-filter">

            <select>
                <option value="">Toutes les catégories</option>
                <option value="petit-dejeuner">Petit-déjeuner</option>
                <option value="dejeuner">Déjeuner</option>
                <option value="diner">Dîner</option>
            </select>


            <select>
                <option value="">Tous les objectifs</option>
                <option value="prise-de-masse">Prise de masse</option>
                <option value="perte-de-poids">Perte de poids</option>
                <option value="maintien">Maintien</option>
            </select>

        </section>
        </>
    );
}

export default RecettesFilter;