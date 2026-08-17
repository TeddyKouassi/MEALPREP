import { motion } from "framer-motion";
import Button from "./Button";
import { Link } from "react-router-dom";

function AboutCta() {
  return (
    <motion.section
      className="apropos-cta"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <div className="apropos-cta-content">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6
          }}
        >
          Prêt à transformer votre alimentation ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15
          }}
        >
          Rejoignez Meal Prep dès aujourd'hui et profitez de plans de repas
          personnalisés, de recettes équilibrées et d'une meilleure
          organisation de votre alimentation.
        </motion.p>

        <motion.div
          className="apropos-cta-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
        >

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/Inscription">
              <Button text="Commencer maintenant" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/Recettes">
              <Button text="Découvrir les recettes" />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
}

export default AboutCta;