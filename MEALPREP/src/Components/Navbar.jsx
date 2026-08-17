import "./Navbar.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo-div">
        <Link to="/" className="logo">
          <p>
            Meal-Prep<span>.</span>
          </p>
        </Link>
      </div>

      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>

          <li>
            <Link to="/a-propos">À propos</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/nos-recettes">Nos recettes</Link>
          </li>
        </ul>
      </nav>

      <div className="nav-buttons">
        <Link to="/connexion">
          <Button text="Connexion" />
        </Link>

        <Link to="/inscription">
          <Button text="Inscription" />
        </Link>
      </div>

    </header>
  );
}

export default Navbar;