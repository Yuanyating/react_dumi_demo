import React, { useRef, useEffect } from 'react';

const Timer = () => {
  const timerRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      timerRef.current++;
      console.log('Timer running...');
    }, 1000);

    // 清除定时器
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{timerRef.current}</p>
    </div>
  );
};

export default Timer;
