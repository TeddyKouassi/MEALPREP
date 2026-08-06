import Menusection from "../Components/Menusection";
import Offresection from "../Components/Offresection";
function FormRecettes(){
    return(
        <> 
        <Menusection/> 
        <Offresection/> 
          <div className="form-recette">

            <h2> Ajouter une recette</h2>
          
          
          <form>
            <label> Nom de la recette</label>
            <input type="text" placeholder="ex: riz au gras" />
             
             <label>image</label>
             <input type="file" name="" id="" />
             
             <label>
                Catégorie
             </label>
             <select >
                <option > Petit-déjeuner</option>
                <option > Déjeuner</option>
                <option > Dîner</option>
                <option > Collation</option>
             </select>

             <label >Objectif</label>
             <select >
                <option > Prise de masse</option>
                <option > Perte de ppoids</option>
                <option > Maintien</option>
             </select>

             <label > Temps de préparation</label>
             <input type="text" placeholder="ex:30min"/>
             <label> Calories</label>
             <input type="number"  placeholder="ex:100" />

             <label>Ingrédients</label>
             <textarea placeholder="liste des ingrédients.." >
             </textarea>

             <label>Etapes de la préparation</label>
             <textarea placeholder="Décrivez les étapes"></textarea>

           <button type="submit"> Ajouter la recette</button>
            
          </form>
          
          </div>

        </> 
    )

}
export default FormRecettes;