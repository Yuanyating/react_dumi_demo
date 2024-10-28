import React, { useRef } from 'react';
import { Input, Button, Space, InputRef } from 'antd';

const TextInput = () => {
  const inputRef = useRef<InputRef | null>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Space>
      <Input ref={inputRef} />
      <Button onClick={focusInput}>Focus the input</Button>
    </Space>
  );
};

export default TextInput;
