import "./Offresection.css";
import { motion } from "framer-motion";
import Buttonvar from "./Button-var";

function Offresection() {
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };

    return (
        <>
            <section className="offers">

                {/* =========================
                    HEADER
                ========================= */}

                <motion.div
                    className="offre-header"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >

                    <motion.span
                        className="offre-1"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1
                        }}
                    >
                        .Offres spéciales
                    </motion.span>

                    <motion.h2
                        className="offre-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2
                        }}
                    >
                        DES PLATS BENINOIS À NE PAS MANQUER
                    </motion.h2>

                    <motion.p
                        className="offre-description"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3
                        }}
                    >
                        Découvrez des repas locaux savoureux, préparés avec soin
                        et adaptés à votre budget.
                        <br />
                        Des plats équilibrés, délicieux et accessibles pour tous les jours.
                    </motion.p>

                </motion.div>


                {/* =========================
                    CARTES
                ========================= */}

                <div className="offre-cards">

                    {/* =========================
                        CARTE 1
                    ========================= */}

                    <motion.article
                        className="offre-card offre-card-small"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.02,
                            y: -6
                        }}
                    >

                        <div className="offre-overlay"></div>

                        <div className="offre-content">

                            <h4>
                                Riz sauce tomate avec poulet
                            </h4>

                            <p>
                                Servi avec poulet grillé et légumes
                            </p>

                            <motion.button
                                className="offre-price"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                            >
                                1500 FCFA <span>🔥</span>
                            </motion.button>

                        </div>

                    </motion.article>


                    {/* =========================
                        CARTE 2
                    ========================= */}

                    <motion.article
                        className="offre-card offre-card-small offre-card-peanut"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.25,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.02,
                            y: -6
                        }}
                    >

                        <div className="offre-overlay"></div>

                        <div className="offre-content">

                            <h4>
                                Pâte sauce arachide
                            </h4>

                            <p>
                                Un classique riche et savoureux
                            </p>

                            <motion.button
                                className="offre-price"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                            >
                                1500 FCFA <span>🔥</span>
                            </motion.button>

                        </div>

                    </motion.article>


                    {/* =========================
                        GRANDE CARTE
                    ========================= */}

                    <motion.article
                        className="offre-card offre-card-large"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.4,
                            ease: "easeOut"
                        }}
                        whileHover={{
                            scale: 1.02,
                            y: -6
                        }}
                    >

                        <div className="offre-overlay"></div>

                        <div className="offre-content">

                            <h4>
                                Akassa sauce gombo
                            </h4>

                            <p>
                                Un goût authentique et traditionnel
                            </p>

                            <motion.button
                                className="offre-price"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                            >
                                1500 FCFA <span>🔥</span>
                            </motion.button>

                        </div>

                    </motion.article>

                </div>

            </section>
        </>
    );
}

export default Offresection;