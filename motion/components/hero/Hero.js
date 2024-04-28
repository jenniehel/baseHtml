import React from 'react'
import styles from './hero.module.scss';
import Image from 'next/image';
import { animate, motion } from 'framer-motion';
const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.textContainer}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <div className={styles.buttons}>
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/images/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className={styles.slidingTextContainer}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className={styles.imageContainer}>
        <img src="/images/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero

// 53
