import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
  // 設置狀態來控制列表項的顯示狀態
  const [open, setOpen] = useState(false);

  // 定義動畫效果的變體物件
  const variants = {
    visible: (i) => ({
      opacity: 1,               // 設置透明度為完全可見
      x: 100,                   // 向右移動 100px
      transition: { delay: i * 0.3 }, // 添加延遲，根據列表項的索引值設置不同的延遲時間
    }),
    hidden: { opacity: 0 },    // 設置透明度為完全隱藏
  };

  // 定義列表中的項目陣列
  const items = ["項目1", "項目2", "項目3", "項目4"];

  return (
    <div className="course">
      {/* 使用 motion.ul 包裝所有列表項，並設置初始狀態和動畫狀態，應用動畫變體 */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {/* 使用 map 方法動態生成列表項，並為每個列表項設置動畫效果 */}
        {items.map((item, i) => (
          // 使用 motion.li 包裝每個列表項，並傳遞索引值作為 custom 屬性(根據內部子元件順序來傳遞動畫)
          <motion.li variants={variants} key={item} custom={i}>
            {item}  {/* 顯示列表項的文本內容 */}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
