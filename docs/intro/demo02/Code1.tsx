import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';

function Example() {
  const [text, setText] = useState('');
  const [height, setHeight] = useState(50);
  useEffect(() => {
    if (height === 50) {
      setHeight(100);
    }
  }, [height]);

  return (
    <>
      <div style={{ width: 100, height, background: 'pink' }}>{text}</div>
      <button
        onClick={() => {
          setText('changed');
          setHeight(50);
        }}
      >
        change height
      </button>
    </>
  );
}

export default Example;
