import React,{useRef} from 'react'
import style from"./portolio.module.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const Single = ({ item }) => {
    const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
   
    return (
      <section >
        <div className={style.container}>
          <div className={style.wrapper}>
            <div className={style.imageContainer} ref={ref}>
              <img src={item.img} alt="" style={{objectFit:"contain"}} />
            </div>
            <motion.div className={style.textContainer} style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
export default Single

