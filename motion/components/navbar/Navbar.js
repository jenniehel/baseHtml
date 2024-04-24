import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { animate, motion } from "framer-motion";
import Sidebar from "../sidebar/Siderbar";

export default function Navbar2() {
    return (
        <div className={styles.navbar}>
            {/* 側邊欄 */}
            <Sidebar/>
            <div className={styles.wrapper}> 
                {/* Lama Dev 文字動畫 */}
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 3 }}
                >
                    Lama Dev
                </motion.span>
                {/* 社交媒體連結 */}
                <div className={styles.social}>
                    <Link href="#"><img src='/images/facebook.png' /></Link>
                    <Link href="#"><img src='/images/instagram.png' /></Link>
                    <Link href="#"><img src='/images/youtube.png' /></Link>
                    <Link href="#"><img src='/images//dribbble.png' /></Link>
                </div>
            </div>
        </div>
    );
}
