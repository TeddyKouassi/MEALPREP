import "../Pages/Apropos.css";
import { motion } from "framer-motion";
import familyImg from "../assets/family.png";

function Abouthero() {
  return (
    <section className="apropos-hero">

      <motion.div
        className="apropos-hero-content"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.1
          }}
        >
          À propos de Meal Prep
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
        >
          <strong>15 ans d'excellence culinaire</strong>

          <br />
          <br />

          Depuis plus d'une décennie, MEAL PREP est bien plus qu'un simple
          endroit où manger — c'est un lieu de rassemblement pour célébrer la
          cuisine, le partage et les moments mémorables.

          <br />
          <br />

          Nous sommes convaincus qu'un grand plat commence par de grands
          ingrédients. C'est pourquoi chaque assiette est préparée avec soin
          à partir de produits frais et de haute qualité, et façonnée avec
          amour par notre équipe passionnée, garantissant ainsi des saveurs
          riches, une qualité constante et une expérience culinaire
          inoubliable à chaque visite.

          <br />
          <br />

          Qu'il s'agisse d'un repas décontracté ou d'une grande occasion,
          notre objectif est de créer des moments chaleureux, accueillants et
          pleinement satisfaisants grâce à un service amical, une ambiance
          chaleureuse et des souvenirs impérissables pour chacun de nos
          invités.

          <br />
          <br />

          Chaque assiette que nous servons reflète notre engagement envers le
          goût, la qualité et la joie de partager un bon repas avec passion,
          attention et régularité.
        </motion.p>
      </motion.div>


      <motion.div
        className="apropos-hero-image"
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          delay: 0.2,
          ease: "easeOut"
        }}
        whileHover={{
          y: -10,
          scale: 1.02
        }}
      >
        <img
          src={familyImg}
          alt="Famille partageant un repas"
        />
      </motion.div>

    </section>
  );
}

export default Abouthero;