---
nav:
  title: 问题
  path: /intro
  order: 5
---

# 🐼react 重复渲染分析

如果将递归嵌套式组件 → 利用 Children 实现组件结构，会有效减少重复渲染的情况

```tsx
import React, { useState } from 'react';
import { Button, Flex } from 'antd';

let renderTimes = 0;

const Inside = ({ title }: { title: string }) => {
  return (
    <Flex align="center" style={{ border: '1px solid #000', padding: 16, background: '#fff' }}>
      <p>{title}</p>
      <span>渲染次数：{renderTimes++}</span>
    </Flex>
  );
};

const Wrapper = ({ title, subTitle }: { title: string; subTitle: string }) => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '1px solid #000', padding: 16, background: '#ccc' }}>
      <Flex align="center">
        <p>{title}</p>
        <Button size="small" onClick={() => setCount((count) => count + 1)}>
          触发渲染
        </Button>
        <span>渲染次数：{count}</span>
      </Flex>
      <Inside title={subTitle} />
    </div>
  );
};

const App = () => {
  const title = 'wrapper';
  const subTitle = 'inside';

  return (
    <div style={{ border: '1px solid #000', padding: 16, background: '#fff' }}>
      <p>App</p>
      <Wrapper title={title} subTitle={subTitle} />
    </div>
  );
};

export default App;
```

从结果可看出，父组件无关的 state 变化，依然会触发子组件的重复渲染

利用 Children 改变组件结构：

```tsx

import React, { useState } from 'react';
import { Button, Flex } from 'antd';

let renderTimes = 0;

const Inside = ({ title }: { title: string }) => {
  return (
    <Flex align="center" style={{ border: '1px solid #000', padding: 16, background: '#fff' }}>
      <p>{title}</p>
      <span>渲染次数：{renderTimes++}</span>
    </Flex>
  );
};

const Wrapper = ({ title, renderSubTitle }: { title: string; renderSubTitle: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '1px solid #000', padding: 16, background: '#ccc' }}>
      <Flex align="center">
        <p>{title}</p>
        <Button size="small" onClick={() => setCount((count) => count + 1)}>
          触发渲染
        </Button>
        <span>渲染次数：{count}</span>
      </Flex>
      {renderSubTitle}
    </div>
  );
};

const App = () => {
  const title = 'wrapper';
  const subTitle = 'inside';

  return (
    <div style={{ border: '1px solid #000', padding: 16, background: '#fff' }}>
      <p>App</p>
      <Wrapper title={title} renderSubTitle={<Inside title={subTitle} />} />
    </div>
  );
};

export default App;

```

这种方式是利用 React 自身的优化算法，规避了渲染。

因为 React 的渲染原则是：在遍历过程中如果发现【节点本身】以及【祖先节点】没有更新，那么该节点也不会被重新渲染。

因为 Inside 节点是被 App 组件创建的，因此它的祖先节点为 App 组件而不是 Wrapper 组件，因此 Wrapper 组件重新渲染时，不会触发 Inside 组件的重新渲染。

### 但是为什么不建议使用这种方式来减少渲染呢

主要是因为其<mark style="background-color:pink">可维护性不高</mark>，因为你需要把具体某几个节点单独提出去声明，这让节点渲染脱离了常规的节点流，而等到业务变得复杂，可能很难避免需要传递一些 props 给该组件，这时候你就需要把这个组件提升到父组件中，那代码改起来就变得非常的麻烦。
