import { motion } from "framer-motion";

function RecettesFilter({
  categorie,
  objectif,
  setCategorie,
  setObjectif,
}) {
  return (
    <motion.section
      className="recettes-filter"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >

      <select
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
      >
        <option value="">
          Toutes les catégories
        </option>

        <option value="petit-dejeuner">
          Petit-déjeuner
        </option>

        <option value="dejeuner">
          Déjeuner
        </option>

        <option value="diner">
          Dîner
        </option>
      </select>


      <select
        value={objectif}
        onChange={(e) => setObjectif(e.target.value)}
      >
        <option value="">
          Tous les objectifs
        </option>

        <option value="prise-de-masse">
          Prise de masse
        </option>

        <option value="perte-de-poids">
          Perte de poids
        </option>

        <option value="maintien">
          Maintien
        </option>
      </select>

    </motion.section>
  );
}

export default RecettesFilter;