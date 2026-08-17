import { motion } from "framer-motion";

function AboutStory() {
  return (
    <motion.section
      className="apropos-story"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <div className="apropos-story-content">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          Notre histoire
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
        >
          Meal Prep est né d'une idée simple : rendre l'alimentation saine
          accessible à tous. Nous savons qu'il n'est pas toujours facile de
          planifier ses repas ou de trouver des recettes adaptées à son budget
          et à ses objectifs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
        >
          Notre plateforme vous aide à organiser vos repas, découvrir de
          nouvelles recettes et gagner du temps au quotidien grâce à une
          expérience simple, pratique et personnalisée.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default AboutStory;
