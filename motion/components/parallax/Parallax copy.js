import { useRef } from "react";
import styles from "./parallax.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({type}) => {
  const ref=useRef();
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
      
    </div>
  )
}

export default Parallax
