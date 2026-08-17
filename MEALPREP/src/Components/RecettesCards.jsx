import { motion } from "framer-motion";

function RecettesCards({ recette }) {
  return (
    <motion.div
      className="recette-card"
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >

      <motion.img
        src={recette.image}
        alt={recette.nom}
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 0.5,
        }}
      />

      <div className="recette-content">

        <h3>
          {recette.nom}
        </h3>

        <p>
          {recette.description}
        </p>

        <div className="recette-info">
          <span>
            {recette.calories} kcal
          </span>

          <span>
            {recette.temps} min
          </span>
        </div>

        <span className="recette-objectif">
          {recette.objectif}
        </span>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.2,
          }}
        >
          Voir la recette
        </motion.button>

      </div>

    </motion.div>
  );
}

export default RecettesCards;