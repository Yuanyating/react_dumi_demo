import { Button, List, Typography } from 'antd';
import React, { useState } from 'react';

type Item = {
  id: number;
  title: string;
  menu: string[];
};

type Data = {
  id: number;
  title: string;
  menu: string[];
};

const data: Data[] = [
  {
    id: 1,
    title: '餐饮行业',
    menu: ['快餐系列', '中餐系列', '西餐系列'],
  },
  {
    id: 2,
    title: '电竞行业',
    menu: ['手游系列', '桌游系列'],
  },
];

const mutateData = (data: Item[]) => {
  return data.map((item) => ({
    ...item,
    title: `${item.title} -- update`,
  }));
};

const MockRequest = () => {
  const [dataSource, setDataSource] = useState<Item[]>([]);
  console.log('refresh');
  const handleClick = () => {
    return new Promise((resolve) => {
      resolve(data);
    }).then((data: Data[]) => {
      setDataSource(data);
      const newData = mutateData(data);
      // setDataSource([...dataSource, ...newData]);
      setDataSource((prevState: Data[]) => {
        return [...prevState, ...newData];
      });
    });
  };

  return (
    <>
      <Button onClick={handleClick}>请求接口</Button>
      <List
        bordered
        style={{ marginTop: 16 }}
        dataSource={dataSource}
        renderItem={(item: Data) => (
          <List.Item>
            <Typography.Text mark>{item.title}</Typography.Text>
            <Typography.Paragraph>
              {Array.isArray(item.menu) ? item.menu.join(',') : ''}
            </Typography.Paragraph>
          </List.Item>
        )}
      />
    </>
  );
};

export default MockRequest;
