import "../Pages/Apropos.css";
import familyImg from "../assets/family.png";

function abouthero() {
  return (
    <>
      <section className="apropos-hero">
        <div className="apropos-hero-content">
          

          <h1>À propos de Meal Prep</h1>
          <p>
              <strong>15 ans d'excellence culinaire</strong>
              <br /><br />
              Depuis plus d'une décennie, MEAL PREP
              est bien plus qu'un simple endroit où manger — c'est un lieu de
              rassemblement pour célébrer la cuisine, le partage et les moments
              mémorables. 
              <br /><br />
              Nous sommes convaincus qu'un grand plat commence par de
              grands ingrédients. C'est pourquoi chaque assiette est préparée avec
              soin à partir de produits frais et de haute qualité, et façonnée
              avec amour par notre équipe passionnée, garantissant ainsi des
              saveurs riches, une qualité constante et une expérience culinaire
              inoubliable à chaque visite. 
              <br /><br />
              Qu'il s'agisse d'un repas décontracté
              ou d'une grande occasion, notre objectif est de créer des moments
              chaleureux, accueillants et pleinement satisfaisants grâce à un
              service amical, une ambiance chaleureuse et des souvenirs
              impérissables pour chacun de nos invités, en offrant toujours un
              goût exceptionnel, un service de qualité et de délicieux souvenirs
              de table. 
              <br /><br />
              Chaque assiette que nous servons reflète notre engagement
              envers le goût, la qualité et la joie de partager un bon repas avec
              passion, attention, régularité, pour la satisfaction culinaire
              inoubliable de tous.
            </p>
        </div>

        <div className="apropos-hero-image">
          <img src={familyImg} alt="" />
        </div>
        
      </section>
    </>
  );
}
export default abouthero;
