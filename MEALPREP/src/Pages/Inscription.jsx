import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Inscription as registerServices} from "../Services/authServices";
import "./Inscription.css";
import nourriture from "../assets/nourriture.jpg";

function Inscription(){
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        setLoading(true);

        try {
            await inscription ({ name, email,password});
            navigate("/Connection")
        }
        catch (error) {
            setError(error.response?.data?.message || "Inscription impossible");
        }
        finally{
            setLoading(false);
        }
    };


    
    return(
        <>
        <section className="inscription">
            <div className="inscription-image"> 
        <img src={nourriture} alt="nourriture"  />
        </div> 
 
           <div className="inscription1"> 
        <div className="form-inscription">
            <h2>Créer un compte</h2>
            <p>
                Rejoignez notre progrmme de meal prep
            </p>
        </div>
           
           <div className="form-input"> 

           <form onSubmit={handleSubmit}> 
        <div className="group-input"> 
            <label htmlFor="Nom"> Nom</label>
            <input type="text"  placeholder="Votre nom" required/>
            </div>

            <div className="group-input"> 
            <label htmlFor="Prénom"> Prénom</label>
            <input type="text"  placeholder="Votre prénom" required/>
            </div>

            <div className="group-input"> 
            <label htmlFor="E-mail"> E-mail</label>
            <input type="email" id="email"  placeholder="votre email" required/>
            </div>

            <div className="group-input"> 
            <label htmlFor="Telephone"> Telephone</label>
            <input type="number"  id="number" placeholder="Votre numero" required/>
            </div>

            <div className="group-input"> 
            <label htmlFor="date de naissance"> Date de naissance</label>
            <input type="date" name="" id="" placeholder="Date de naissance" required />
            </div>

            <div className="group-input"> 
            <label htmlFor="Genre"> Genre</label>
            <select> 
                <option > Masculin</option>
                <option > Féminin</option>
            </select>
            </div>

            <div className="group-input"> 
            <label htmlFor="Budget">Budget</label>
            <input type="number"  id="number" placeholder="Votre budget" required/>
            </div>

             <div className="group-input"> 
            <label htmlFor="Objectif">Objectif</label>
            <select> 
                <option > Perte de poids</option>
                <option > Prise de poids</option>
                <option > Maintien</option>
            </select>
            </div>

            <div className="group-input"> 
            <label htmlFor="Mot de passe"> Confirmer votre mot de passe</label>
            <input type="password" placeholder="********" />
            </div>

            <button type="submit" >
                S'inscrire
            </button> 
           </form>
           </div>
           </div>
        </section>
        </>

    );
}

export default Inscription;
