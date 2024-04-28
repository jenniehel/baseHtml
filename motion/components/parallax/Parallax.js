import { useRef } from "react";
import styles from "./parallax.module.scss";
// 引入 Framer Motion 的功能，包括動畫元素、滾動鉤子和變換工具
import { motion, useScroll, useTransform } from "framer-motion";
// 定義 Parallax 組件，接收一個名為 type 的屬性
const Parallax = ({ type }) => {
  const ref = useRef();
  // useScroll 是一個鉤子，用來監聽滾動事件和進度
  const { scrollYProgress } = useScroll({

    target: ref,// 監聽 ref 指向的元素的滾動
    offset: ["start start", "end start"],// 定義滾動起點和終點的對齊方式
  });
 
  // useTransform 用於根據滾動進度進行變換
  //我們可以用來useTransform建立一個名為 的新運動值opacity。
  // 透過定義輸入範圍和輸出範圍，我們可以說，“當x是時0，opacity應該是1。當x是 時100，opacity應該是 0。”

  // const opacity = useTransform(
  //   x,
  //   // Map x from these values:
  //   [0, 100],
  //   // Into these values:
  //   [1, 0]
  // )
  const yText = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  const ydragon = useTransform(scrollYProgress, [0, 1], ["30%", "-100%"]);
  const ydragon2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  return (
    <div
      className={styles.parallax}
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
        {type}
      </motion.h1>
      <motion.div className={styles.mountains}></motion.div>
      <motion.div className={styles.planets}
        style={{
          y: yBg,
          backgroundImage: `url(${type === "services" ? "/images/planets.png" : "/images/sun.png"
            })`,
        }}
      ></motion.div>
      <motion.img
        style={{
        x:ydragon2,
          y: ydragon, 
        
        }}
        className={styles.dragon}
        src="/images/dragon.png"
        alt=""
      />
      <motion.div style={{ x: yBg }} className={styles.stars}></motion.div>
    </div>
  )
}

export default Parallax
