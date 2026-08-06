import go from "../assets/go.png";
import "./About.css";

function letIncrement(parcours, debut, fin, duration) {
  let debutsecond = null;
  const evolution = (debutsecond) => {
    if (!debutsecond) debutsecond = timestamp;
  };
}

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-img">
          <img src={go} alt="go" style={{ width: "100%" }} />
        </div>

        <div className="about-section">
          <div class=" ">
            <h1 className="about-header">
              UNE EXPÉRIENCE EXCEPTIONNELLE
              <br /> AVEC UNE QUALITÉ SUPÉRIEURE <br /> ET DES SAVEURS RICHES
            </h1>
            <p>
              Nous réunissons des ingrédients de première qualité, un
              savoir-faire expert et une passion pour les saveurs — créant des
              expériences culinaires inoubliables à chaque bouchée, avec un goût
              riche et de qualité.
            </p>
          </div>

          <div className="">
            <h3>HORAIRES D'OUVERTURE</h3>
            <p>Lun – Jeu : 10h00 – 01h00</p>
            <p>Ven – Dim : 11h00 – 22h00</p>
            <button className="flex items-center justify-center self-center bg-white rounded-full w-48 h-12 transition duration-150 hover:bg-[#fc9e25]">
              Créer ton plan<span className="text-xl ml-1">🔥</span>
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 id="decrement"> 55</h1>
      </div>
    </>
  );
}
export default About;
