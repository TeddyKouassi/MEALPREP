import "./Temoignage.css";
import { motion } from "framer-motion";

import chef from "../assets/chef.png";
import chef2 from "../assets/chef2.png";

function Temoignage() {
    return (
        <>
            {/* =========================
                TITRE
            ========================= */}

            <motion.div
                className="temoignage-header"
                initial={{
                    opacity: 0,
                    y: 30,
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
                <span className="temoignage-dot"></span>

                <p>TÉMOIGNAGES</p>
            </motion.div>


            {/* =========================
                CONTENU
            ========================= */}

            <section className="grid-temoignage">

                {/* IMAGE 1 */}

                <motion.article
                    className="card-temoignage temoignage-image"
                    initial={{
                        opacity: 0,
                        x: -60,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    whileHover={{
                        y: -8,
                    }}
                >
                    <motion.img
                        src={chef}
                        alt="Chef préparant un repas"
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    />
                </motion.article>


                {/* TÉMOIGNAGE */}

                <motion.article
                    className="card-temoignage temoignage-content"
                    initial={{
                        opacity: 0,
                        y: 50,
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
                        duration: 0.8,
                        delay: 0.15,
                        ease: "easeOut",
                    }}
                    whileHover={{
                        y: -8,
                    }}
                >

                    <div className="container-temoignage">

                        <span className="quote-icon">“</span>

                        <h4>
                            CE QUE DISENT NOS CLIENTS
                        </h4>

                        <p>
                            "La nourriture était absolument incroyable !
                            Chaque bouchée était fraîche, pleine de saveurs
                            et parfaitement cuisinée. Je reviendrai sans
                            hésiter avec grand plaisir et satisfaction."
                        </p>

                        <div className="temoignage-line"></div>

                        <span className="temoignage-client">
                            Client satisfait
                        </span>

                    </div>

                </motion.article>


                {/* IMAGE 2 */}

                <motion.article
                    className="card-temoignage temoignage-image"
                    initial={{
                        opacity: 0,
                        x: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.25,
                        ease: "easeOut",
                    }}
                    whileHover={{
                        y: -8,
                    }}
                >
                    <motion.img
                        src={chef2}
                        alt="Chef en cuisine"
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    />
                </motion.article>

            </section>
        </>
    );
}

export default Temoignage;