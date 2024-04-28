import React from 'react'
import { useRef } from "react";
import styles from"./portolio.module.scss";
import Single from './Single';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Portfolio = () => {
  // 使用 useRef 创建一个 ref，用来引用 DOM 元素以便可以获取其滚动位置
  const ref = useRef();
  const items = [
    {
      id: 1,
      title: "React Commerce",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 2,
      title: "Next.js Blog",
      img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 3,
      title: "Vanilla JS App",
      img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
    {
      id: 4,
      title: "Music App",
      img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    },
  ];
  
// 在使用 Framer Motion 或類似的動畫庫來設定滾動監聽時，offset 參數的配置非常靈活，可以使用不同的組合來精確地控制滾動的起始點和終止點。以下是一些常見的配置選項和其意義：

// start end - 當目標元素的頂部對齊視口的底部時開始，常用於當元素即將進入視口時。
// end start - 當目標元素的底部對齊視口的頂部時結束，常用於當元素剛剛離開視口時。
// start start - 如你所述，當目標元素的頂部對齊視口的頂部時開始，用於目標元素進入視口視線的開始。
// end end - 同樣如你所述，當目標元素的底部對齊視口的底部時結束，用於目標元素完全離開視口視線的結束。
// "start 50%" - 表示從元素頂部到視口頂部的中  
// 
 // 使用 useScroll 钩子监听滚动，以 ref 作为目标元素
  // offset 配置为从元素底部与视口底部对齐开始，到元素顶部与视口顶部对齐结束
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
    // 使用 useSpring 创建一个弹簧动画，基于 scrollYProgress 的值
  // 弹性（stiffness）和阻尼（damping）属性控制动画的物理特性
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className={styles.portfolio} ref={ref}>
    <div className={styles.progress}>
      <h1>Featured Works</h1>
      <motion.div style={{ scaleX }} className={styles.progressBar}></motion.div>
    </div>
    {items.map((item) => (
      <Single item={item} key={item.id} />
    ))}
  </div>
  )
}

export default Portfolio
