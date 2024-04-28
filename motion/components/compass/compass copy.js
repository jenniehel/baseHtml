import React, { useEffect, useRef, useState } from 'react'
import style from "./compass.module.css"

export default function Compass() {
    const wheel = useRef(); // 获取旋转轮盘的引用
    const [value, setValue] = useState(0); // 修正状态命名，保持命名一致性

    const stopHandler = () => {
        const newValue = Math.ceil(Math.random() * 3600); // 生成新的旋转值
        setValue(newValue); // 更新状态，确保使用 newValue
    }
    useEffect(()=>{
        console.log("Ddd")
    },[])

    useEffect(() => {
        if (wheel.current) {
            wheel.current.style.transform = `rotate(${value}deg)`; // 在状态更新后应用变换
        }
    }, [value]); // 依赖列表中包含 value，确保每次 value 更新时都重新应用变换

    return (
        <div className={style.compass}>
        dddddd
            <div className={style.container} >
                <div className={style.spinBtn} >
                    <div className={style.wheel} ref={wheel} onClick={stopHandler}>
                        <div className={style.number}><span>1</span></div>
                        <div className={style.number}><span>50</span></div>
                        <div className={style.number}><span>0</span></div>
                        <div className={style.number}><span>1000</span></div>
                        <div className={style.number}><span>10</span></div>
                        <div className={style.number}><span>5</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
