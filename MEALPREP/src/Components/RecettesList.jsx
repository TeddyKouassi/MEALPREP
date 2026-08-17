import { motion } from "framer-motion";
import RecettesCards from "./RecettesCards";

function RecettesList({ recettes }) {
  return (
    <motion.section
      className="recettes-list"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
    >
      {recettes.map((recette) => (
        <motion.div
          key={recette.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <RecettesCards recette={recette} />
        </motion.div>
      ))}
    </motion.section>
  );
}

export default RecettesList;
