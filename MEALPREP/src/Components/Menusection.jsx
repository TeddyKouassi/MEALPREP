import menusectionimg from "../assets/menusection.png";
import "./menusection.css";
import { motion } from "framer-motion";

function Menusection() {
  return (
    <motion.section
      className="menu-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >

      <motion.div
        className="menu-section-container"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.1,
        }}
      >
        <h1>
          CONÇU POUR LA SAVEUR, FAIT POUR IMPRESSIONNER
        </h1>

        <p>
          Chaque plat est préparé avec soin à partir d'ingrédients frais et
          de saveurs audacieuses — élaboré pour satisfaire toutes les envies.
        </p>
      </motion.div>

      <motion.div
        className="container-image"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <motion.img
          src={menusectionimg}
          alt="Présentation de nos plats"
          whileHover={{
            scale: 1.03,
          }}
          transition={{
            duration: 0.4,
          }}
        />
      </motion.div>

    </motion.section>
  );
}

export default Menusection;