import Button from "./Button";
import {Link} from "react-router-dom";
function aboutcta() {
  return (
    <> 
    <section className="apropos-cta">
      <div className="apropos-cta-content">
        <h2>Prêt à transformer votre alimentation ?</h2>

        <p>
          Rejoignez Meal Prep dès aujourd'hui et profitez de plans de repas
          personnalisés, de recettes équilibrées et d'une meilleure organisation
          de votre alimentation.
        </p>

        <div className="apropos-cta-buttons">
          <Link to="/Inscription" >
          <Button text="Commencer maintenant" />
          </Link>
           
           <Link to="/Recettes">
          <Button text="Découvrir les recettes" />
          </Link>
          
        </div>
      </div>
    </section>
    </>
  );
}

export default aboutcta;