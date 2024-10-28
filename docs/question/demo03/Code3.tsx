import { Button } from 'antd';
import React, { useState, useRef, useEffect } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count); // 用于持久化最新的 count 值

  useEffect(() => {
    countRef.current = count; // 每次 count 更新时，更新 countRef
  }, [count]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 由于闭包原因，count始终为0
      // console.log(`count: ${count}`);
      // 使用 countRef.current 获取最新的 count 值
      // console.log(`Current count: ${countRef.current}`);
    }, 1000);

    return () => {
      clearInterval(intervalId); // 清理定时器
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default CounterComponent;
