

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      
      <div className="footer-vague"></div>

      <div className="footer-container">

        
        <div className="footer-gauche">
          <h2>MealPrep</h2>

          <h4>Adresse</h4>
          <p>
            Cotonou, Bénin <br />
            +229 00 00 00 00
          </p>
        </div>

        
        <div className="footer-links">

          <div>
            <h4>Menu</h4>
            <p>Nos-recettes</p>
           
          </div>

          <div>
            
            <p>About</p>
            <p>Gallery</p>
          </div>

          <div>
           
            <p>FAQ</p>
            <p>Contact</p>
          </div>

        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2026 MealPrep. Tous droits réservés</p>

        <div className="socials">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;