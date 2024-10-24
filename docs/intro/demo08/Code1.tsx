import { Button } from 'antd';
import React, { useEffect } from 'react';

const Demo = () => {
  const obj = { key: 'value' };

  const handleChange = () => {
    obj.key = 'newValue'; // obj 的引用不变，但内容变化
  };

  useEffect(() => {
    console.log('111');
    //todo
  }, [obj]);

  return <Button onClick={handleChange}>change</Button>;
};

export default Demo;
