import "./Hero.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero">

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.p
          className="hero-content-1"
          variants={itemVariants}
        >
          Simple . Rapide . Économique
        </motion.p>

        <motion.h1
          className="hero-title"
          variants={itemVariants}
        >
          PLANIFIE TES REPAS BENINOIS FACILEMENT
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={itemVariants}
        >
          Génère des repas adaptés à ton budget et gagne du temps chaque semaine
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link to="/create-plan">
            <motion.button
              className="hero-btn"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Créer mon plan gratuit
            </motion.button>
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
}

export default Hero;