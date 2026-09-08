import "./hero.scss";
import { motion } from "framer-motion";

const SLIDE_TEXT = "Build -- Train -- Deploy -- Scale -- Automate -- Innovate";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: { duration: 2, repeat: Infinity },
  },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const orbVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.5, 0.8, 0.5],
    x: [0, 20, -20, 0],
    y: [0, -20, 20, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>I am MOSES ILLA</motion.h2>
          <motion.h1 variants={textVariants}>
            AI & Machine Learning Engineer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection("Portfolio")}
            >
              See My Projects
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection("Contact")}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
        <div className="orbContainer">
          <motion.div className="orb orb1" variants={orbVariants} animate="animate" />
          <motion.div className="orb orb2" variants={{
            animate: {
              scale: [1, 1.2, 0.9, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, -30, 30, 0],
              y: [0, 30, -15, 0],
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }
          }} animate="animate" />
          <motion.div className="orb orb3" variants={{
            animate: {
              scale: [1, 0.85, 1.1, 1],
              opacity: [0.2, 0.5, 0.2],
              x: [0, 15, -25, 0],
              y: [0, -25, 10, 0],
              transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            }
          }} animate="animate" />
        </div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        {SLIDE_TEXT}
      </motion.div>
    </div>
  );
};

export default Hero;
