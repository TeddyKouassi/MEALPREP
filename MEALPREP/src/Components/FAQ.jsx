import "./FAQ.css";
import { motion } from "framer-motion";

const questions = [
  {
    q: "Combien de temps dure la livraison ?",
    r: "Entre 30 et 45 minutes selon ta zone."
  },
  {
    q: "Est-ce que les repas sont frais ?",
    r: "Oui, tous les repas sont préparés le même jour."
  },
  {
    q: "Peut-on commander à l'avance ?",
    r: "Oui, tu peux programmer tes commandes."
  }
];

function FAQ() {
  return (
    <motion.section
      className="faq"
      id="faq"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <motion.p
        className="section-label"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        FAQ
      </motion.p>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.1
        }}
      >
        Questions fréquentes
      </motion.h2>

      <div className="faq-list">
        {questions.map((item, index) => (
          <motion.details
            className="faq-item"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.12
            }}
          >
            <summary className="faq-question">
              {item.q}
            </summary>

            <div className="faq-answer">
              {item.r}
            </div>
          </motion.details>
        ))}
      </div>
    </motion.section>
  );
}

export default FAQ;