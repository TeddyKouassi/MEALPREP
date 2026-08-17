import Menusection from "../Components/Menusection";
import Offresection from "../Components/Offresection";
import React, { useState } from "react";
import "./CreatePlan.css";

function CreatePlan() {
  const [step, setStep] = useState(1);

  const [personnes, setPersonnes] = useState("");
  const [objectif, setObjectif] = useState("");
  const [repas, setRepas] = useState("");
  const [jours, setJours] = useState("");

  const handleGenerate = () => {
    console.log({
      personnes,
      objectif,
      repas,
      jours,
    });

    alert("Ton plan repas est en cours de préparation !");
  };

  return (
    <>
      <Menusection />
      <Offresection />

      <main className="create-plan">

        <div className="plan-header">
          <span className="plan-label">MEAL PREP</span>

          <h1>Crée ton plan repas</h1>

          <p>
            Quelques questions pour créer un plan adapté à tes besoins.
          </p>
        </div>

      

        <div className="progress">
          <span className={step >= 1 ? "active" : ""}>1</span>
          <div></div>
          <span className={step >= 2 ? "active" : ""}>2</span>
          <div></div>
          <span className={step >= 3 ? "active" : ""}>3</span>
          <div></div>
          <span className={step >= 4 ? "active" : ""}>4</span>
        </div>

        

        {step === 1 && (
          <section className="plan-step">

            <h2>Pour combien de personnes ?</h2>

            <p className="step-description">
              Choisis le nombre de personnes concernées par ton plan.
            </p>

            <div className="choices">

              <button
                className={personnes === "1" ? "selected" : ""}
                onClick={() => setPersonnes("1")}
              >
                1 personne
              </button>

              <button
                className={personnes === "2" ? "selected" : ""}
                onClick={() => setPersonnes("2")}
              >
                2 personnes
              </button>

              <button
                className={personnes === "3-4" ? "selected" : ""}
                onClick={() => setPersonnes("3-4")}
              >
                3 à 4 personnes
              </button>

              <button
                className={personnes === "5+" ? "selected" : ""}
                onClick={() => setPersonnes("5+")}
              >
                5 personnes ou plus
              </button>

            </div>

            <button
              className="continue-btn"
              disabled={!personnes}
              onClick={() => setStep(2)}
            >
              Continuer →
            </button>

          </section>
        )}

        

        {step === 2 && (
          <section className="plan-step">

            <h2>Quel est ton objectif ?</h2>

            <p className="step-description">
              Dis-nous ce que tu souhaites obtenir avec ton plan repas.
            </p>

            <div className="choices">

              <button
                className={objectif === "economique" ? "selected" : ""}
                onClick={() => setObjectif("economique")}
              >
                Manger économique
              </button>

              <button
                className={objectif === "equilibre" ? "selected" : ""}
                onClick={() => setObjectif("equilibre")}
              >
                Manger équilibré
              </button>

              <button
                className={objectif === "forme" ? "selected" : ""}
                onClick={() => setObjectif("forme")}
              >
                Prendre soin de ma forme
              </button>

              <button
                className={objectif === "temps" ? "selected" : ""}
                onClick={() => setObjectif("temps")}
              >
                Gagner du temps
              </button>

            </div>

            <div className="navigation-buttons">

              <button
                className="back-btn"
                onClick={() => setStep(1)}
              >
                ← Retour
              </button>

              <button
                className="continue-btn"
                disabled={!objectif}
                onClick={() => setStep(3)}
              >
                Continuer →
              </button>

            </div>

          </section>
        )}

       

        {step === 3 && (
          <section className="plan-step">

            <h2>Quels repas veux-tu planifier ?</h2>

            <p className="step-description">
              Sélectionne les repas que tu souhaites préparer.
            </p>

            <div className="choices">

              <button
                className={repas === "petit-dejeuner" ? "selected" : ""}
                onClick={() => setRepas("petit-dejeuner")}
              >
                Petit-déjeuner
              </button>

              <button
                className={repas === "dejeuner" ? "selected" : ""}
                onClick={() => setRepas("dejeuner")}
              >
                Déjeuner
              </button>

              <button
                className={repas === "diner" ? "selected" : ""}
                onClick={() => setRepas("diner")}
              >
                Dîner
              </button>

              <button
                className={repas === "tous" ? "selected" : ""}
                onClick={() => setRepas("tous")}
              >
                Tous les repas
              </button>

            </div>

            <div className="navigation-buttons">

              <button
                className="back-btn"
                onClick={() => setStep(2)}
              >
                ← Retour
              </button>

              <button
                className="continue-btn"
                disabled={!repas}
                onClick={() => setStep(4)}
              >
                Continuer →
              </button>

            </div>

          </section>
        )}

        

        {step === 4 && (
          <section className="plan-step">

            <h2>Pour combien de jours ?</h2>

            <p className="step-description">
              Choisis la durée de ton plan repas.
            </p>

            <div className="choices">

              <button
                className={jours === "3" ? "selected" : ""}
                onClick={() => setJours("3")}
              >
                3 jours
              </button>

              <button
                className={jours === "5" ? "selected" : ""}
                onClick={() => setJours("5")}
              >
                5 jours
              </button>

              <button
                className={jours === "7" ? "selected" : ""}
                onClick={() => setJours("7")}
              >
                7 jours
              </button>

            </div>

            <div className="navigation-buttons">

              <button
                className="back-btn"
                onClick={() => setStep(3)}
              >
                ← Retour
              </button>

              <button
                className="generate-btn"
                disabled={!jours}
                onClick={handleGenerate}
              >
                Générer mon plan
              </button>

            </div>

          </section>
        )}

      </main>
    </>
  );
}

export default CreatePlan;