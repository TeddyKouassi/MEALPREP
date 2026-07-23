import "./Menu.css";
import burger3 from "../assets/burger3.png";
import pattes from "../assets/pattes.png";
import viande from "../assets/viande.png";

function Menu() {
  return (
    <>
      <div class="flex items-center justify-center gap-2 ">
        <div class=" w-3 h-3 rounded-xl bg-amber-600 items-center "></div>
        <p class="">Notre Menu</p>
      </div>

      <div>
        <h1 className="menu-header">
          DECOUVREZ DES SAVEURS QUE VOUS ALLEZ ADORER
        </h1>
        <p>
          Explorez nos plats préparés avec soin- élaborés avcec des ingrédients
          frais et des saveurs audacieuses, un goût riche, une qualité
          supérieure et un arôme délicieux.
        </p>

        <div class="">
          <button className="flex items-center justify-center bg-white rounded-full w-32 h-12 transition duration-150 hover:bg-[#fc9e25] ">
            Book your table<span className="text-xl">🔥</span>
          </button>
        </div>
      </div>

      <section className="card-container">
        <div className="card-menu">
          <div className="hover">
            <img src={burger3} alt="burger3" style={{ width: "100%" }} />
          </div>
          <div className="container-menu">
            <h4>
              <b>Igname pilée</b>
            </h4>
            <p>700 FCFA; 800 kcal</p>
          </div>
        </div>

        <div className="card-menu">
          <div className="hover">
            <img src={pattes} alt="pattes" style={{ width: "100%" }} />
          </div>
          <div className="container">
            <h4>
              <b>Amiwo</b>
            </h4>
            <p>400 FCFA; 450 kcal</p>
          </div>
        </div>

        <div className="card-menu">
          <div className="hover">
            <img src={viande} alt="viande" style={{ width: "100%" }} />
          </div>
          <div className="container">
            <h4>
              <b>Amiwo</b>
            </h4>
            <p>400 FCFA; 450 kcal</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Menu;
