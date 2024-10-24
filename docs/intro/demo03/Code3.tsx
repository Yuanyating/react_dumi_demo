import { Button } from 'antd';
import React, { useRef, useState, useEffect } from 'react';

const DelayedCount = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count; // 同步最新的 count 到 ref
  }, [count]);

  const handleDelayedIncrement = () => {
    setTimeout(() => {
      // 通过 ref 访问最新的 count 值，而不是闭包中的旧值
      setCount(countRef.current + 1);
    }, 3000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleDelayedIncrement}>
        Increment after 3 seconds
      </Button>
    </div>
  );
};

export default DelayedCount;
