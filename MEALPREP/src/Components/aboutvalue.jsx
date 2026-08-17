import { motion } from "framer-motion";

function AboutValues() {
  const values = [
    {
      title: "Santé",
      text: "Nous encourageons une alimentation équilibrée pour améliorer le bien-être de chacun."
    },
    {
      title: "Confiance",
      text: "Nous proposons des recommandations fiables et adaptées aux besoins de nos utilisateurs."
    },
    {
      title: "Simplicité",
      text: "Une plateforme intuitive qui facilite l'organisation de vos repas."
    },
    {
      title: "Accessibilité",
      text: "Des solutions pensées pour tous les budgets et tous les modes de vie."
    }
  ];

  return (
    <motion.section
      className="apropos-values"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8
      }}
    >
      <div className="apropos-values-content">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Nos valeurs
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
          Les valeurs qui nous guident chaque jour pour offrir la meilleure
          expérience à nos utilisateurs.
        </motion.p>

        <div className="apropos-values-cards">

          {values.map((value, index) => (
            <motion.div
              className="apropos-values-card"
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
                delay: index * 0.12
              }}
              whileHover={{
                y: -8,
                scale: 1.03
              }}
            >
              <h3>{value.title}</h3>

              <p>{value.text}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default AboutValues;