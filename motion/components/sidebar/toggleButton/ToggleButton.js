import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" }, 
            open:{d:"M 17 2.5 L 2 16.346"}
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
// d 屬性是用來定義路徑的形狀的
// M：移動到（Move To）命令，指定一個起始點。
// L：直線到（Line To）命令，指定一條直線的結束點。
// C：貝塞爾曲線（Cubic Bezier Curve）命令，用於定義一個三次貝塞爾曲線。
// Z：閉合路徑（Close Path）命令，將路徑的結束點連接到起始點，形成一個封閉的形狀。

// strokeWidth="3"：設置路徑的寬度為 3 像素。
// stroke="black"：設置路徑的顏色為黑色。
// strokeLinecap="round"：設置線條的端點樣式為圓形，這意味著線條的結束點將呈現圓角。