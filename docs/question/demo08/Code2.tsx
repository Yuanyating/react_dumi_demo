import { Collapse, Modal } from 'antd';
import React, { useMemo, useState } from 'react';

const items = [
  { key: '1', label: 'collapse 1', children: <div>1</div> },
  { key: '2', label: 'collapse 2', children: <div>2</div> },
];

const Demo = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const scope = {
    a: 'xxx',
  };

  const form = useMemo(() => {
    Modal.info({ title: 'create the form ' });
    //return form
  }, [scope]);

  const handleChange = (keys: string[]) => {
    setActiveKeys(keys);
  };

  return (
    <Collapse
      activeKey={activeKeys}
      onChange={handleChange}
      items={items}
    ></Collapse>
  );
};

export default Demo;
