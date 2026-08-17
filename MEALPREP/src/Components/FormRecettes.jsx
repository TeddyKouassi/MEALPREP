import "./FormRecettes.css";
import { motion } from "framer-motion";
import Menusection from "../Components/Menusection";
import Offresection from "../Components/Offresection";

function FormRecettes() {
  return (
    <>
      <Menusection />

      <Offresection />

      <motion.section
        className="form-recette"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="form-recette-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
        >
          <span className="form-label">NOUVELLE RECETTE</span>

          <h2>Ajouter une recette</h2>

          <p>
            Ajoutez une nouvelle recette à votre bibliothèque Meal Prep.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <div className="form-group">
            <label>Nom de la recette</label>
            <input
              type="text"
              placeholder="Ex : Riz au gras"
            />
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              accept="image/*"
            />
          </div>

          <div className="form-group">
            <label>Catégorie</label>

            <select>
              <option>Petit-déjeuner</option>
              <option>Déjeuner</option>
              <option>Dîner</option>
              <option>Collation</option>
            </select>
          </div>

          <div className="form-group">
            <label>Objectif</label>

            <select>
              <option>Prise de masse</option>
              <option>Perte de poids</option>
              <option>Maintien</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Temps de préparation</label>

              <input
                type="text"
                placeholder="Ex : 30 min"
              />
            </div>

            <div className="form-group">
              <label>Calories</label>

              <input
                type="number"
                placeholder="Ex : 500"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Ingrédients</label>

            <textarea
              placeholder="Liste des ingrédients..."
            ></textarea>
          </div>

          <div className="form-group">
            <label>Étapes de la préparation</label>

            <textarea
              placeholder="Décrivez les différentes étapes..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            Ajouter la recette
          </motion.button>
        </motion.form>
      </motion.section>
    </>
  );
}

export default FormRecettes;