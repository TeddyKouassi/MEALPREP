import Menusection from "../Components/Menusection";
import Offresection from "../Components/Offresection";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Inscription as registerServices } from "../Services/authServices";
import "./Inscription.css";
import nourriture from "../assets/nourriture.jpg";

function Inscription() {

    const navigate = useNavigate();

    // =========================
    // STATES
    // =========================

    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [genre, setGenre] = useState("masculin");
    const [budget, setBudget] = useState("");
    const [objectif, setObjectif] = useState("perte-poids");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    // =========================
    // SUBMIT
    // =========================

    const handleSubmit = async (event) => {

        event.preventDefault();

        setError("");

        // Vérification des mots de passe

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        setLoading(true);

        try {

            const response = await registerServices({
                name,
                prenom,
                email,
                telephone,
                dateNaissance,
                genre,
                budget,
                objectif,
                password
            });

            console.log("Inscription réussie :", response);

            navigate("/Connexion");

        } catch (error) {

            console.error(error);

            setError(
                error.response?.data?.message ||
                "Inscription impossible"
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <>

            <Menusection />

            <Offresection />

            <section className="inscription">

                {/* IMAGE */}

                <div className="inscription-image">

                    <img
                        src={nourriture}
                        alt="Nourriture"
                    />

                </div>


                {/* FORMULAIRE */}

                <div className="inscription1">

                    <div className="form-inscription">

                        <h2>Créer un compte</h2>

                        <p>
                            Rejoignez notre programme de meal prep
                        </p>

                    </div>


                    <div className="form-input">

                        <form onSubmit={handleSubmit}>

                            {/* MESSAGE ERREUR */}

                            {error && (
                                <p className="form-error">
                                    {error}
                                </p>
                            )}


                            {/* NOM */}

                            <div className="group-input">

                                <label htmlFor="nom">
                                    Nom
                                </label>

                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    placeholder="Votre nom"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* PRÉNOM */}

                            <div className="group-input">

                                <label htmlFor="prenom">
                                    Prénom
                                </label>

                                <input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    placeholder="Votre prénom"
                                    value={prenom}
                                    onChange={(e) =>
                                        setPrenom(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="group-input">

                                <label htmlFor="email">
                                    E-mail
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Votre email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* TÉLÉPHONE */}

                            <div className="group-input">

                                <label htmlFor="telephone">
                                    Téléphone
                                </label>

                                <input
                                    type="tel"
                                    id="telephone"
                                    name="telephone"
                                    placeholder="Votre numéro"
                                    value={telephone}
                                    onChange={(e) =>
                                        setTelephone(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* DATE DE NAISSANCE */}

                            <div className="group-input">

                                <label htmlFor="dateNaissance">
                                    Date de naissance
                                </label>

                                <input
                                    type="date"
                                    id="dateNaissance"
                                    name="dateNaissance"
                                    value={dateNaissance}
                                    onChange={(e) =>
                                        setDateNaissance(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* GENRE */}

                            <div className="group-input">

                                <label htmlFor="genre">
                                    Genre
                                </label>

                                <select
                                    id="genre"
                                    name="genre"
                                    value={genre}
                                    onChange={(e) =>
                                        setGenre(e.target.value)
                                    }
                                >

                                    <option value="masculin">
                                        Masculin
                                    </option>

                                    <option value="feminin">
                                        Féminin
                                    </option>

                                </select>

                            </div>


                            {/* BUDGET */}

                            <div className="group-input">

                                <label htmlFor="budget">
                                    Budget
                                </label>

                                <input
                                    type="number"
                                    id="budget"
                                    name="budget"
                                    placeholder="Votre budget"
                                    value={budget}
                                    onChange={(e) =>
                                        setBudget(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* OBJECTIF */}

                            <div className="group-input">

                                <label htmlFor="objectif">
                                    Objectif
                                </label>

                                <select
                                    id="objectif"
                                    name="objectif"
                                    value={objectif}
                                    onChange={(e) =>
                                        setObjectif(e.target.value)
                                    }
                                >

                                    <option value="perte-poids">
                                        Perte de poids
                                    </option>

                                    <option value="prise-poids">
                                        Prise de poids
                                    </option>

                                    <option value="maintien">
                                        Maintien
                                    </option>

                                </select>

                            </div>


                            {/* MOT DE PASSE */}

                            <div className="group-input">

                                <label htmlFor="password">
                                    Mot de passe
                                </label>

                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* CONFIRMATION */}

                            <div className="group-input">

                                <label htmlFor="confirmPassword">
                                    Confirmer votre mot de passe
                                </label>

                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="********"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* BOUTON */}

                            <button
                                type="submit"
                                disabled={loading}
                            >

                                {loading
                                    ? "Inscription..."
                                    : "S'inscrire"
                                }

                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </>
    );
}

export default Inscription;