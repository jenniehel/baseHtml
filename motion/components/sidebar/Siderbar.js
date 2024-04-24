import React, { useState } from 'react'
import styles from "./siderbar.module.scss"
import ToggleButton from './toggleButton/ToggleButton'
import Link from 'next/link'
import Links from "./links/Links"
import { delay, motion } from 'framer-motion' 
const variants={
  open:{
    // 圓的半徑為 1200px，圓心位於 (50px, 50px)
    clipPath:"circle(1200px at 50px 50px )",
    transition:{
      type:"spring",
      stiffness:20
    }
  },
  closed:{
    clipPath:"circle(30px at 50px 50px )",
    transition:{
      delay:0.5,
      type:"spring",
      stiffness:400,
      damping:40
    }
  }
}
const itemVariants={
  open:{
   y:0,
   opacigy:1
    
  },
  closed:{
   
    }
  }
 
const Siderbar = () => {
  const [open,setOpen]=useState(false);

  return (
    <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={styles.bg} variants={variants}>
      <Links/> 
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Siderbar
