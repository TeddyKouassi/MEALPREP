import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Plats({ image, nom, prix, description }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <Link to="/Inscription" className="plat-card">
        <motion.div className="plat-image-container" whileHover="hover">
          <motion.img
            src={image}
            alt={nom}
            className="plat-image"
            variants={{
              hover: {
                scale: 1.1,
                rotate: 2,
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          />
        </motion.div>

        <div className="plat-info-bande">
          <div className="plat-ligne-titre">
            <h3 className="plat-titre">{nom}</h3>

            <span className="plat-titre">{prix}</span>
          </div>

          <p className="plat-description">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default Plats;
