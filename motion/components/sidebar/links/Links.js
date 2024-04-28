import React from 'react'
import styles from "./link.module.scss"
import Link from 'next/link'
import { motion } from 'framer-motion' 
{/*側邊欄動畫*/}  
const  Variants={
    open:{
        transition:{
            // 子元素的動畫將以 0.1 的間隔依次啟動
            staggeredChildren:0.1
        }
    },
    closed:{
        transition:{
            // staggeredDirection 屬性設置為 -1。
            // 這意味著子元素的過渡動畫將以相反的順序且間隔 0.05 的時間依次啟動。
            staggeredChildren:.05,
            staggeredDirection:-1
        }
    }
}
{/*側邊欄內選單*/}
const itemVariants={
    open:{
       y:0,
       opacity:1
    },
    closed:{
       y:50,
       opacity:0
    }
}
const Links22 = () => {
    const items = [
        "Home",
        "Services",
        "Contact",
        "Parallax",
        "Portfolio", 
        "Compass",
    ]
    return (
        <motion.dev className={styles.links} variants={Variants}>
            {items.map(item => {
                return (  
                    <Link href={`#${item}`} key={item}  >
                    <motion.div  variants={itemVariants}
                    whileHover={{ scale: 1.1,opacity:.5 }}
                    whileTap={{ scale: 0.95,opacity:.1 }}
                    >
                    {item}
                    </motion.div> 
                    </Link>
                )
            })}

        </motion.dev>
    )
}

export default Links22
