import './Navbar.css';
import Button from './Button';

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
                <li><a href="">Hero</a></li>
                <li><a href="">HowItWorks </a></li>
                <li><a href="">RecipeSection</a></li>
            </ul>
            
               <Button text="Créer mon plan gratuit"/>
        </header>    
    </>
    )
    
}

export default Navbar