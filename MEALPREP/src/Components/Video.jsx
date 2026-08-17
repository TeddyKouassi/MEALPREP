import "./Video.css";
import { motion } from "framer-motion";

import video from "../assets/video.mp4";

function Video() {
    return (
        <motion.section
            className="about-video"
            initial={{
                opacity: 0,
                y: 50,
                scale: 0.97
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
            }}
            viewport={{
                once: true,
                amount: 0.2
            }}
            transition={{
                duration: 0.9,
                ease: "easeOut"
            }}
        >
            <motion.video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                whileHover={{
                    scale: 1.02
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeOut"
                }}
            />
        </motion.section>
    );
}

export default Video;