import React from 'react';

type dtype = {
  key: string;
  value: string;
};

const dataSource: dtype[] = [
  { key: 'key1', value: 'value1' },
  { key: 'key2', value: 'value2' },
];

const Component = () => {
  return (
    <ul>
      {dataSource.map((item) => (
        <li>{item.value}</li>
      ))}
    </ul>
  );
};

export default Component;
