function RecettesCards({ recette }) {
    return (
        <> 
        <div className="recette-card">

            <img 
                src={recette.image} 
            
            />

            <div className="recette-content">

                <h3>{recette.nom}</h3>

                <p>{recette.description}</p>

                <div className="recette-info">
                    <span> {recette.calories} kcal</span>
                    <span> {recette.temps} min</span>
                </div>

                <span className="recette-objectif">
                    {recette.objectif}
                </span>

                <button>
                    Voir la recette
                </button>

            </div>

        </div>
        </>
    );
}

export default RecettesCards;