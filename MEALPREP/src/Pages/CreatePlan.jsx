import Menusection from "../Components/Menusection";
import Offresection from "../Components/Offresection";
import React, { useState } from "react";
import "./CreatePlan.css";
function CreatePlan() {
  const [step, setStep] = useState(1);

  return (
    <> 
    <Menusection/> 
        <Offresection/> 
        
    <div className="create-plan">
      <h1>Crée ton plan repas</h1>

      <p>Quelques questions pour créer un plan adapté à tes besoins.</p>

      {step === 1 && (
        <div>
          <h2>Pour combien de personnes ?</h2>

          <button>1 personne</button>
          <button>2 personnes</button>
          <button>3 à 4 personnes</button>
          <button>5 personnes ou plus</button>

          <br />

          <button onClick={() => setStep(2)}>
            Continuer
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Quel est ton objectif ?</h2>

          <button>Manger économique</button>
          <button>Manger équilibré</button>
          <button>Prendre soin de ma forme</button>
          <button>Gagner du temps</button>

          <br />

          <button onClick={() => setStep(3)}>
            Continuer
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Quels repas veux-tu planifier ?</h2>

          <button>Petit-déjeuner</button>
          <button>Déjeuner</button>
          <button>Dîner</button>
          <button>Tous les repas</button>

          <br />

          <button onClick={() => setStep(4)}>
            Continuer
          </button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Pour combien de jours ?</h2>

          <button>3 jours</button>
          <button>5 jours</button>
          <button>7 jours</button>

          <br />

          <button>
            Générer mon plan
          </button>
        </div>
      )}
    </div>

    </> 
  );
}

export default CreatePlan;