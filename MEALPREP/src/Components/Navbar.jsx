import './Navbar.css';
import Button from './Button';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
    <>
    <header>
        <div className='logo-div'>
            <div className='logo'>
                <p>Meal-Prep<span>.</span></p>
            </div>
        </div>
        <ul>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/nos-recettes">Nos Recettes</Link></li>
                
            </ul>
            
                <Link to="/Connexion"> 
               <Button text="Connexion"/>
               </Link>
        

               <Link to="/Inscription">
               <Button text="Inscription"/>
               </Link>
        </header>    
    </>
    )
    
}

export default Navbar