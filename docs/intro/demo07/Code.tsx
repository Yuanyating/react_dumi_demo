import React, { useState } from 'react';
import { Flex, Button } from 'antd';

// 列表项组件，使用 React.memo
const ListItem = React.memo(({ item }: { item: string }) => {
  const [state, setState] = useState(0);
  console.log(`Rendering ListItem: ${item}`);

  const handleClick = () => {
    setState((state) => state + 1);
  };

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '1px solid #ccc',
        margin: '5px',
      }}
    >
      <div style={{ padding: '5px' }}>{item}</div>
      <Flex gap="middle">
        <Button size="small" onClick={handleClick}>
          add
        </Button>
        <div>{state}</div>
      </Flex>
    </section>
  );
});

// 列表组件
const List = ({ items }: { items: string[] }) => {
  console.log('Rendering List');

  return (
    <div>
      {items.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </div>
  );
};

// 主应用组件
const App = () => {
  const [count, setCount] = useState(0);
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <h2>List</h2>
      <List items={items} />
    </div>
  );
};

export default App;
