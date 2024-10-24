import { Button, List, Typography } from 'antd';
import React, { useState } from 'react';

type Item = {
  id: number;
  title: string;
  menu: string[];
};

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
    fetch('http://rap2api.taobao.org/app/mock/259267/getMenu')
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setDataSource(res?.data);
        const newData = mutateData(res?.data);
        // setDataSource([...dataSource, ...newData]);
        setDataSource((prevState) => {
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
        renderItem={(item) => (
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
