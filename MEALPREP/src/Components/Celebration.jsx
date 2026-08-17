import "./Celebration.css";
import { motion } from "framer-motion";

import celebration1 from "../assets/celebration1.png";
import celebration2 from "../assets/celebration2.png";
import celebration3 from "../assets/celebration3.png";

function Celebration() {
  const cards = [
    {
      image: celebration1,
      alt: "Petit déjeuner",
      tag: "PETIT DÉJEUNER",
      title: "Igname pilée",
      price: "700 FCFA",
      calories: "800 kcal",
    },
    {
      image: celebration2,
      alt: "Déjeuner",
      tag: "DÉJEUNER",
      title: "Amiwo",
      price: "400 FCFA",
      calories: "450 kcal",
    },
    {
      image: celebration3,
      alt: "Dîner",
      tag: "DÎNER",
      title: "Amiwo",
      price: "400 FCFA",
      calories: "450 kcal",
    },
  ];

  return (
    <>
      {/* =========================
                INTRODUCTION
            ========================= */}

      <motion.section
        className="celebration-intro"
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
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <motion.div
          className="celebration-category"
          initial={{
            opacity: 0,
            y: 15,
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
          <span className="celebration-dot"></span>

          <p>NOS FORMULES</p>
        </motion.div>

        <motion.h2
          className="celebration-title"
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.15,
          }}
        >
          DES REPAS POUR TOUS VOS OBJECTIFS
        </motion.h2>

        <motion.p
          className="celebration-description"
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
            delay: 0.25,
          }}
        >
          Du petit-déjeuner au dîner, nous vous livrons des plats sains et
          locaux cuisinés avec soin, pour vous régaler chaque jour sans perdre
          de temps.
        </motion.p>
      </motion.section>

      {/* =========================
                CARTES
            ========================= */}

      <section className="celebration-grid">
        {cards.map((card, index) => (
          <motion.article
            className="card-celeb"
            key={card.tag}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
            }}
          >
            {/* IMAGE */}

            <div className="celebration-image">
              <motion.img
                src={card.image}
                alt={card.alt}
                whileHover={{
                  scale: 1.06,
                }}
                transition={{
                  duration: 0.5,
                }}
              />
            </div>

            {/* BADGE */}

            <motion.span
              className="dishes-tag"
              whileHover={{
                x: 5,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              {card.tag}
            </motion.span>

            {/* INFORMATIONS */}

            <div className="container-celeb">
              <h4>
                <b>{card.title}</b>
              </h4>

              <p>
                {card.price} · {card.calories}
              </p>
            </div>
          </motion.article>
        ))}
      </section>
    </>
  );
}

export default Celebration;
