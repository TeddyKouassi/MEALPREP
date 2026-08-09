import Menusection from "../Components/Menusection";
import Offresection from "../Components/Offresection";
import './Connexion.css'; 

import { Connexion as login } from '../Services/authServices'; 
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 

function Connexionmealprep(){ 
    const navigate = useNavigate(); 
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(""); 

    const handleSubmit = async (event) => { 
        event.preventDefault(); 
        setError(''); 
        setLoading(true); 

        try { 
            const response = await login(email, password); 
            
            if (response) { 
                navigate('/Dashboard'); 
            } else {
                setError('Erreur de connexion : Aucun jeton reçu.');
                error;
            }
        } catch (error) {
            const messageErreur = error.response?.data?.message || 'Identifiants incorrects.';
            setError(messageErreur); 
            alert(messageErreur); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Menusection/> 
        <Offresection/> 
        
        <section className="connexion"> 
            <div className="connexion-container"> 
                <h2>Connexion</h2>
                <p>Connectez-vous à votre compte pour accéder à votre espace.</p>

                <form className="connexion-form" onSubmit={handleSubmit}>
                    <div className="input"> 
                        <label htmlFor="email">Adresse e-mail</label>
                        <input 
                            type="email" 
                            name='email'  
                            id="email" 
                            placeholder="Entrez votre adresse e-mail" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div> 
                  
                    <div className="input"> 
                        <label htmlFor="password">Mot de passe</label>
                        <input 
                            type="password" 
                            name='password' 
                            id="password" 
                            placeholder="Entrez votre mot de passe" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>

                    <button type="submit" className="btn-connexion" disabled={loading}>
                        {loading ? "Connexion .." : "Se connecter"}
                    </button>
                    <p className="lien">
                        Vous n'avez pas de compte??
                        <a href="/Inscription">S'inscrire</a>
                    </p>
                </form>
            </div>
        </section>
        </>
    );
}

export default Connexionmealprep;
