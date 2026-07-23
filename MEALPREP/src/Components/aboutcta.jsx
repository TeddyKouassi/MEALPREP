import Button from "./Button";

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
          <Button text="Commencer maintenant" />
          <Button text="Découvrir les recettes" />
        </div>
      </div>
    </section>
    </>
  );
}

export default aboutcta;