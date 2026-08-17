import "./Menu.css";
import { motion } from "framer-motion";

import burger3 from "../assets/burger3.png";
import pattes from "../assets/pattes.png";
import viande from "../assets/viande.png";

function Menu() {
    return (
        <>
            {/* =========================
                INTRODUCTION
            ========================= */}

            <motion.section
                className="menu-intro"
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

                <motion.div
                    className="menu-category"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1
                    }}
                >
                    <span className="menu-dot"></span>

                    <p>Notre Menu</p>
                </motion.div>


                <motion.h1
                    className="menu-header"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2
                    }}
                >
                    DÉCOUVREZ DES SAVEURS QUE VOUS ALLEZ ADORER
                </motion.h1>


                <motion.p
                    className="menu-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3
                    }}
                >
                    Explorez nos plats préparés avec soin, élaborés avec des
                    ingrédients frais et des saveurs audacieuses, un goût riche,
                    une qualité supérieure et un arôme délicieux.
                </motion.p>


                <motion.button
                    className="menu-button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4
                    }}
                    whileHover={{
                        scale: 1.05
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                >
                    Découvrir le menu
                    <span>🔥</span>
                </motion.button>

            </motion.section>


            {/* =========================
                CARTES DU MENU
            ========================= */}

            <section className="card-container">

                {/* =========================
                    CARTE 1
                ========================= */}

                <motion.article
                    className="card-menu"
                    initial={{
                        opacity: 0,
                        y: 60
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
                        duration: 0.7,
                        delay: 0.1,
                        ease: "easeOut"
                    }}
                    whileHover={{
                        y: -8
                    }}
                >

                    <div className="menu-image-wrapper">

                        <motion.img
                            src={burger3}
                            alt="Igname pilée"
                            whileHover={{
                                scale: 1.08,
                                rotate: 2
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                        />

                    </div>

                    <div className="container-menu">

                        <h4>
                            <b>Igname pilée</b>
                        </h4>

                        <p>
                            700 FCFA · 800 kcal
                        </p>

                    </div>

                </motion.article>


                {/* =========================
                    CARTE 2
                ========================= */}

                <motion.article
                    className="card-menu"
                    initial={{
                        opacity: 0,
                        y: 60
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
                        duration: 0.7,
                        delay: 0.25,
                        ease: "easeOut"
                    }}
                    whileHover={{
                        y: -8
                    }}
                >

                    <div className="menu-image-wrapper">

                        <motion.img
                            src={pattes}
                            alt="Amiwo"
                            whileHover={{
                                scale: 1.08,
                                rotate: 2
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                        />

                    </div>

                    <div className="container-menu">

                        <h4>
                            <b>Amiwo</b>
                        </h4>

                        <p>
                            400 FCFA · 450 kcal
                        </p>

                    </div>

                </motion.article>


                {/* =========================
                    CARTE 3
                ========================= */}

                <motion.article
                    className="card-menu"
                    initial={{
                        opacity: 0,
                        y: 60
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
                        duration: 0.7,
                        delay: 0.4,
                        ease: "easeOut"
                    }}
                    whileHover={{
                        y: -8
                    }}
                >

                    <div className="menu-image-wrapper">

                        <motion.img
                            src={viande}
                            alt="Amiwo"
                            whileHover={{
                                scale: 1.08,
                                rotate: 2
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                        />

                    </div>

                    <div className="container-menu">

                        <h4>
                            <b>Amiwo</b>
                        </h4>

                        <p>
                            400 FCFA · 450 kcal
                        </p>

                    </div>

                </motion.article>

            </section>
        </>
    );
}

export default Menu;