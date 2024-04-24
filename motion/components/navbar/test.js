// pages/index.js 或其他页面文件
import React, { useState } from 'react';
import styles from "./test.module.scss"
import { motion, spring } from 'framer-motion';


{/*
   initial={{ opacity: 0, scale: 0.5 }}--初始
      transition={{ duration: 2, delay: 2 }} 設定
        animate={{ opacity: 1, scale: 1, x: 200,y:100 }}--結束
          whileTap={{background:"blue"}}--當我按下去
           drag就可以移動拉
            <motion.div
                className={styles.box}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, x: 200, y: 100 }}
                transition={{ duration: 2, delay: 0 }}
                whileHover={{ opacity: 1, scale: 2 }}
                whileTap={{ background: "blue" }}
                drag
            >
                Hello, Framer Motion!
            </motion.div>

        duration : 持續時間，最大值是 10 秒。如果有同時設定 bounce 屬性，最大是 8 秒。
bounce : 如果設定 duration，預設值為 0.25，值越小越ㄉㄨㄞ。
damping : 阻尼(減震)，預設值為 10 ，類似摩擦力，越大越不會震動。
mass : 質量，預設值為 1，越大越沉重，用在動畫表現上就像暈暈沉沉的。
stiffness : 剛性，抗形變的程度，預設值為 100，越大越快代表物體移動越快。
velocity : 初始速度 v0 ，預設是元素當下的速度 (距離/時間 = 速度)
*/}
const TestPage = () => { 
    const [open,setOpen]=useState(false)
    // const variants={
    //     visible:{opacity:1,x:600,transition:{type:spring,stiffness:200}},
    //     hidden:{opacity:0},

    // }
    const variants={
        visible:{opacity:1,x:800,transition:{type:"spring",stiffness:100,damping:100}}
    }
    return (
        <div className={styles.course}>
            <motion.div
                className={styles.box} 
                variants={variants}
                initial="hidden" 
                transition={{duration:2}}
                animate={open?"visible":"hidden"}
            >
                Hello, Framer Motion!
            </motion.div>
            <br/>
            <button onClick={()=>setOpen(prev=>!prev)}>click</button>
        </div>
    );
};

export default TestPage;
