import { useRef } from "react"; 
import { motion, useInView } from "framer-motion";
import styles from "./services.module.scss"
const Services = () => {
 // 定义动画变体
const variants = {
  initial: {
    x: -500,    // 初始水平位置，向左偏移500px
    y: 100,     // 初始垂直位置，向下偏移100px
    opacity: 0, // 初始透明度为0，完全透明
  },
  animate: {
    x: 0,        // 动画结束时水平位置归0
    opacity: 1,  // 动画结束时透明度归1，完全不透明
    y: 0,        // 动画结束时垂直位置归0
    transition: {  // 定义过渡效果
      duration: 1,       // 过渡持续时间1秒
      staggerChildren: 0.1,  // 子元素的动画延迟时间0.1秒
    },
  },
};
  const ref = useRef();
  
// useInView 是 Framer Motion 库中的一个 React Hook，
// 用于检测某个元素是否进入或离开视口（可视范围）。
// 这个功能特别适合在需要根据元素的可见状态触发动画或行为时使用。
// 判断元素是否在视图中（包括向视窗外100px的范围）
// once 来只触发一次
// const isInView = useInView(ref, { once: true });
// useInView是普通的 React 狀態，因此在isInView更改時觸發函數只需將其傳遞給useEffect.

// useEffect(() => {
//   console.log("Element is in view: ", isInView)
// }, [isInView])
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className={styles.services}
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView&&"animate"}
    >
      <motion.div className={styles.textContainer} variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className={styles.titleContainer} variants={variants}>
        <div className={styles.title}>
          <img src="/images/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className={styles.title}>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className={styles.listContainer} variants={variants}>
        <motion.div
          className={styles.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className={styles.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className={styles.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className={styles.box}
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default Services
