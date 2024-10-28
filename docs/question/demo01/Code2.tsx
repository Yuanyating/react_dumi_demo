import { Button, Space } from 'antd';
import React, { useState } from 'react';

const Demo = () => {
  const getInitialState = () => {
    console.log('recall');
    return Number(window.localStorage.getItem('count'));
  };
  const initState = getInitialState();
  const [state, setState] = useState(getInitialState);

  return (
    <Space>
      <Button onClick={() => setState(state + 1)}>add</Button>
      <div>{state}</div>
    </Space>
  );
};

export default Demo;
