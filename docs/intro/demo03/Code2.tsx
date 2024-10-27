import { Button } from 'antd';
import React, { useRef, useEffect, useState } from 'react';

const CounterComponent = () => {
  const countRef = useRef(0); // 持久化计数器
  const [count, setCount] = useState(0); // 触发渲染的状态
  const intervalRef = useRef(null); // 持久化定时器 ID

  // 启动定时器
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      countRef.current += 1; // 更新持久化计数器
      setCount(countRef.current); // 更新状态以触发渲染
    }, 1000); // 每秒增加 1

    // 清理定时器
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const resetCounter = () => {
    countRef.current = 0; // 重置持久化计数器
    setCount(countRef.current); // 更新状态以触发渲染
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={resetCounter}>Reset</Button>
    </div>
  );
};

export default CounterComponent;
