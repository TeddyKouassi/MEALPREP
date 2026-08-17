import { motion } from "framer-motion";

function AboutMission() {
  const cards = [
    {
      title: "Bien manger",
      text: "Des repas équilibrés pour une meilleure santé."
    },
    {
      title: "Gagner du temps",
      text: "Planifiez vos repas rapidement et efficacement."
    },
    {
      title: "Économiser",
      text: "Optimisez vos dépenses grâce à une meilleure organisation."
    }
  ];

  return (
    <motion.section
      className="apropos-mission"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8
      }}
    >
      <div className="apropos-mission-content">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Notre mission
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
          Chez Meal Prep, notre mission est de rendre l'alimentation saine
          simple, accessible et adaptée à tous. Nous aidons chaque utilisateur
          à planifier ses repas selon son budget, son mode de vie et ses
          objectifs nutritionnels.
        </motion.p>

        <div className="apropos-mission-cards">

          {cards.map((card, index) => (
            <motion.div
              className="apropos-mission-card"
              key={index}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                amount: 0.2
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{
                y: -8,
                scale: 1.02
              }}
            >
              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default AboutMission;