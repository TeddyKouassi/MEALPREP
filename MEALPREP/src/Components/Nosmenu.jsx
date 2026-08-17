import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { DATA_PLATS } from "./platdata";
import Plats from "./Plats";

import "./Nosmenu.css";

function Nosmenu() {
  const [categorieActive, setCategorieActive] = useState("burger");

  const platsFiltres = DATA_PLATS.filter(
    (plat) => plat.categorie === categorieActive,
  );

  return (
    <section className="Nos-menu">
      <motion.div
        className="categories-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <motion.button
          className={
            categorieActive === "burger"
              ? "btn-categorie active"
              : "btn-categorie"
          }
          onClick={() => setCategorieActive("burger")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pour les burgers
        </motion.button>

        <motion.button
          className={
            categorieActive === "pasta"
              ? "btn-categorie active"
              : "btn-categorie"
          }
          onClick={() => setCategorieActive("pasta")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pour les pâtes
        </motion.button>

        <motion.button
          className={
            categorieActive === "dessert"
              ? "btn-categorie active"
              : "btn-categorie"
          }
          onClick={() => setCategorieActive("dessert")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Pour les desserts
        </motion.button>
      </motion.div>

      <motion.div className="plats-grid" layout>
        <AnimatePresence mode="popLayout">
          {platsFiltres.map((plat) => (
            <motion.div
              key={plat.id}
              layout
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <Plats
                image={plat.image}
                nom={plat.nom}
                prix={plat.prix}
                description={plat.description}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Nosmenu;
