import React, { useEffect, useRef, useState } from 'react'
import styles from "./compass.module.css"

export default function Compass() {
    const wheel = useRef(); // 获取旋转轮盘的引用
    const [value, setValue] = useState(0); // 修正状态命名，保持命名一致性

    const stopHandler = () => {
        const newValue = Math.ceil(Math.random() * 3600); // 生成新的旋转值
        setValue(newValue); // 更新状态，确保使用 newValue
    }
 
    useEffect(() => {
        if (wheel.current) {
            wheel.current.style.transform = `rotate(${value}deg)`; // 在状态更新后应用变换
        }
    }, [value]); // 依赖列表中包含 value，确保每次 value 更新时都重新应用变换

    return (
        <div className={styles.compass}> 
        
            <div className={styles.container} >
                <div className={styles.spinBtn}  onClick={stopHandler}>  
                    <div className={styles.wheel}  ref={wheel}>
                        <div className={styles.number} style={{"--i":1}}><span>1</span></div>
                        <div className={styles.number} style={{"--i":2}}><span>50</span></div>
                        <div className={styles.number} style={{"--i":3}}><span>0</span></div>
                        <div className={styles.number} style={{"--i":4}}><span>1000</span></div>
                        <div className={styles.number} style={{"--i":5}}><span>10</span></div>
                        <div className={styles.number} style={{"--i":6}}><span>5</span></div>
                        <div className={styles.number} style={{"--i":7}}><span>100</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
