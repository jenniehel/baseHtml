// components/MouseFollow.js
import React, { useState } from 'react';

function MouseFollow({children}) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX - event.target.offsetLeft, // 减去容器的左边距
            y: event.clientY - event.target.offsetTop  // 减去容器的上边距
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                height: '100%',
                width: '100%',
                position: 'relative',
                border: '1px solid black',  
                zIndex:"100"
            }}
        >
            <img
                src="/images/scroll.png"
                alt="Floating Icon"
                style={{
                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    pointerEvents: 'none',
                    zIndex:"100",  // 确保图片不会拦截鼠标事件
                    width: '50px'  // 控制图标大小
                }}
            />
            {children}
        </div>
    );
}

export default MouseFollow;
