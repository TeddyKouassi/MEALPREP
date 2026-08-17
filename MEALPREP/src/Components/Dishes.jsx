import "./Dishes.css";
import { motion } from "framer-motion";

import amiwoImg from "../assets/burger.png";
import haricotImg from "../assets/pizza.png";
import ignameImg from "../assets/nouilles.png";
import akassaImg from "../assets/image.png";

function Dishes() {
    return (
        <>
            {/* =========================
                INTRODUCTION
            ========================= */}

            <motion.section
                className="dishes-intro"
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
                    className="dishes-category"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1
                    }}
                >
                    <span className="category-dot"></span>

                    <p>Catégories</p>
                </motion.div>


                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2
                    }}
                >
                    Explore nos plats
                </motion.h2>


                <motion.p
                    className="dishes-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.3
                    }}
                >
                    Découvre des plats béninois simples et adaptés à ton budget.
                </motion.p>

            </motion.section>


            {/* =========================
                CARROUSEL
            ========================= */}

            <section className="dishes-1">

                <div className="dishes-track">

                    {/* =========================
                        AMIWO
                    ========================= */}

                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={amiwoImg}
                            alt="Amiwo"
                        />

                        <div className="container">
                            <h4>
                                <b>Amiwo</b>
                            </h4>

                            <p>
                                400 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={amiwoImg}
                            alt="Amiwo"
                        />

                        <div className="container">
                            <h4>
                                <b>Amiwo</b>
                            </h4>

                            <p>
                                400 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={amiwoImg}
                            alt="Amiwo"
                        />

                        <div className="container">
                            <h4>
                                <b>Amiwo</b>
                            </h4>

                            <p>
                                400 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={amiwoImg}
                            alt="Amiwo"
                        />

                        <div className="container">
                            <h4>
                                <b>Amiwo</b>
                            </h4>

                            <p>
                                400 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    {/* =========================
                        HARICOT
                    ========================= */}

                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={haricotImg}
                            alt="Haricot"
                        />

                        <div className="container">
                            <h4>
                                <b>Haricot</b>
                            </h4>

                            <p>
                                300 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={haricotImg}
                            alt="Haricot"
                        />

                        <div className="container">
                            <h4>
                                <b>Haricot</b>
                            </h4>

                            <p>
                                300 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={haricotImg}
                            alt="Haricot"
                        />

                        <div className="container">
                            <h4>
                                <b>Haricot</b>
                            </h4>

                            <p>
                                300 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={haricotImg}
                            alt="Haricot"
                        />

                        <div className="container">
                            <h4>
                                <b>Haricot</b>
                            </h4>

                            <p>
                                300 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    {/* =========================
                        IGNAME
                    ========================= */}

                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    {/* =========================
                        AKASSA
                    ========================= */}

                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={akassaImg}
                            alt="Akassa avec sauce gombo"
                        />

                        <div className="container">
                            <h4>
                                <b>Akassa + sauce gombo</b>
                            </h4>

                            <p>
                                500 FCFA · 550 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={akassaImg}
                            alt="Akassa avec sauce gombo"
                        />

                        <div className="container">
                            <h4>
                                <b>Akassa + sauce gombo</b>
                            </h4>

                            <p>
                                500 FCFA · 550 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={akassaImg}
                            alt="Akassa avec sauce gombo"
                        />

                        <div className="container">
                            <h4>
                                <b>Akassa + sauce gombo</b>
                            </h4>

                            <p>
                                500 FCFA · 550 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={akassaImg}
                            alt="Akassa avec sauce gombo"
                        />

                        <div className="container">
                            <h4>
                                <b>Akassa + sauce gombo</b>
                            </h4>

                            <p>
                                500 FCFA · 550 kcal
                            </p>
                        </div>
                    </motion.div>


                    {/* =========================
                        RETOUR AMIWO
                    ========================= */}

                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={amiwoImg}
                            alt="Amiwo"
                        />

                        <div className="container">
                            <h4>
                                <b>Amiwo</b>
                            </h4>

                            <p>
                                400 FCFA · 450 kcal
                            </p>
                        </div>
                    </motion.div>


                    {/* =========================
                        IGNAME
                    ========================= */}

                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>


                    <motion.div
                        className="card"
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        <img
                            src={ignameImg}
                            alt="Igname pilée"
                        />

                        <div className="container">
                            <h4>
                                <b>Igname pilée</b>
                            </h4>

                            <p>
                                700 FCFA · 800 kcal
                            </p>
                        </div>
                    </motion.div>

                </div>

            </section>
        </>
    );
}

export default Dishes;