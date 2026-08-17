import "./About.css";
import { motion } from "framer-motion";

import go from "../assets/go.png";

function About() {
  return (
    <>
      {/* =========================
                SECTION À PROPOS
            ========================= */}

      <section className="about-container">
        {/* IMAGE */}

        <motion.div
          className="about-img"
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.img
            src={go}
            alt="Plat béninois"
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.5,
            }}
          />
        </motion.div>

        {/* CONTENU */}

        <motion.div
          className="about-section"
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* PRÉSENTATION */}

          <div className="about-content">
            <motion.h1
              className="about-header"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
            >
              UNE EXPÉRIENCE EXCEPTIONNELLE
              <br />
              AVEC UNE QUALITÉ SUPÉRIEURE
              <br />
              ET DES SAVEURS RICHES
            </motion.h1>

            <motion.p
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
                duration: 0.7,
                delay: 0.35,
              }}
            >
              Nous réunissons des ingrédients de première qualité, un
              savoir-faire expert et une passion pour les saveurs — créant des
              expériences culinaires inoubliables à chaque bouchée, avec un goût
              riche et de qualité.
            </motion.p>
          </div>

          {/* HORAIRES */}

          <motion.div
            className="about-hours"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            <h3>HORAIRES D'OUVERTURE</h3>

            <p>Lun – Jeu : 10h00 – 01h00</p>

            <p>Ven – Dim : 11h00 – 22h00</p>

            <motion.button
              className="about-button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Créer ton plan
              <span>🔥</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================
                COMPTEUR
            ========================= */}

      <motion.div
        className="about-counter"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <h1 id="decrement">55</h1>
      </motion.div>
    </>
  );
}

export default About;
