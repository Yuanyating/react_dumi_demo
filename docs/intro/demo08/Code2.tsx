import { Collapse, Modal } from 'antd';
import React, { useMemo } from 'react';
import { useState } from 'react';

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
    <Collapse activeKey={activeKeys} onChange={handleChange}>
      <Collapse.Panel key="1" header="collapse 1">
        1
      </Collapse.Panel>
      <Collapse.Panel key="2" header="collapse 2">
        2
      </Collapse.Panel>
    </Collapse>
  );
};

export default Demo;
