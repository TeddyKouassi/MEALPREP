import "./Choose.css";
import { motion } from "framer-motion";

import image1 from "../assets/image1.png";
import photo2 from "../assets/photo2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

function Choose() {
  return (
    <>
     

      <motion.section
        className="choose-intro"
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
          className="choose-category"
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
            delay: 0.1,
          }}
        >
          <span className="choose-dot"></span>

          <p>Pourquoi nous choisir</p>
        </motion.div>

        <motion.h2
          className="choose-title"
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
            delay: 0.2,
          }}
        >
          LE MEILLEUR DU MEAL PREP BÉNINOIS
        </motion.h2>

        <motion.p
          className="choose-description"
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
            delay: 0.3,
          }}
        >
          Nous préparons des repas frais, équilibrés et savoureux avec des
          ingrédients locaux afin de vous faire gagner du temps tout en mangeant
          sainement.
        </motion.p>
      </motion.section>

      
      <section className="choose-card-container">
       

        <motion.article
          className="choose-card"
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
            delay: 0.1,
          }}
          whileHover={{
            y: -8,
          }}
        >
          <div className="choose-image-wrapper">
            <motion.img
              src={image1}
              alt="Repas savoureux"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>

          <div className="choose-container">
            <h4>
              <b>REPAS SAVOUREUX</b>
            </h4>

            <p>Profitez de vos repas sans perdre de temps en cuisine.</p>
          </div>
        </motion.article>

        
        <motion.article
          className="choose-card"
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
            delay: 0.2,
          }}
          whileHover={{
            y: -8,
          }}
        >
          <div className="choose-image-wrapper">
            <motion.img
              src={photo2}
              alt="Confort"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>

          <div className="choose-container">
            <h4>
              <b>CONFORT</b>
            </h4>

            <p>Une équipe à votre écoute et une livraison soignée.</p>
          </div>
        </motion.article>

        
        <motion.article
          className="choose-card"
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
            delay: 0.3,
          }}
          whileHover={{
            y: -8,
          }}
        >
          <div className="choose-image-wrapper">
            <motion.img
              src={image3}
              alt="Produits frais"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>

          <div className="choose-container">
            <h4>
              <b>PRODUITS FRAIS</b>
            </h4>

            <p>Des ingrédients soigneusement sélectionnés chaque jour.</p>
          </div>
        </motion.article>

      
        <motion.article
          className="choose-card"
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
            delay: 0.4,
          }}
          whileHover={{
            y: -8,
          }}
        >
          <div className="choose-image-wrapper">
            <motion.img
              src={image4}
              alt="Service fiable"
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.5,
              }}
            />
          </div>

          <div className="choose-container">
            <h4>
              <b>SERVICE FIABLE</b>
            </h4>

            <p>Une équipe à votre écoute et une livraison soignée.</p>
          </div>
        </motion.article>
      </section>
    </>
  );
}

export default Choose;
