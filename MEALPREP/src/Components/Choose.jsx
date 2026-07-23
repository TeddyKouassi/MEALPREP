import image1 from "../assets/image1.png";
import photo2 from "../assets/photo2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
function Choose() {
  return (
    <>
      <div class="flex items-center justify-center gap-2 ">
        <div class=" w-3 h-3 rounded-xl bg-amber-600 items-center "></div>
        <p class="">Pourquoi nous choisir</p>
      </div>

      <div>
        <h2>LE MEILLEUR DU MEAL PREP BENINOIS</h2>
        <p>
          Nous préparons des repas frais équilibrés et savoureux avec des
          ingrédients locaux afin de vous faire gagner du temps tout en mangeant
          sainement.
        </p>
      </div>
      <section className="card-container">
        <div className="card-menu">
          <div className="hover">
            <img src={image1} alt="image1" style={{ width: "100%" }} />
          </div>
          <div className="container-menu">
            <h4>
              <b>REPAS SAVOUREUX</b>
            </h4>
            <p>Profitez de vos repas sans perdre de temps en cuisine.</p>
          </div>
        </div>

        <div className="card-menu" >
          <div className="hover">
            <img src={photo2} alt="photo2" style={{ width: "100%" }} />
          </div>
          <div className="container">
            <h4>
              <b>CONFORT</b>
            </h4>
            <p>Une équipe à votre écoute et une livraison soignée.</p>
          </div>
        </div>

        <div className="card-menu">
          <div className="hover">
            <img src={image3} alt="image3" style={{ width: "100%" }} />
          </div>
          <div className="container">
            <h4>
              <b>PRODUITS FRAIS</b>
            </h4>
            <p>Des ingrédients soigneusement sélectionnés chaque jour.</p>
          </div>
        </div>

        <div className="card-menu">
          <div className="hover">
            <img src={image4} alt="image4" style={{ width: "100%" }} />
          </div>
          <div className="container">
            <h4>
              <b>SERVICE FIABLE</b>
            </h4>
            <p>Une équipe à votre écoute et une livraison soignée.</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Choose;
