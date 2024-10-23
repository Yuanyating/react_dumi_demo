"use strict";(self.webpackChunkreact_dumi_demo=self.webpackChunkreact_dumi_demo||[]).push([[904],{69093:function(R,d,e){e.r(d),e.d(d,{demos:function(){return i}});var l=e(67294),v=e(1122),i={}},11171:function(R,d,e){e.r(d),e.d(d,{demos:function(){return i}});var l=e(67294),v=e(68537),i={}},34847:function(R,d,e){var l;e.r(d),e.d(d,{demos:function(){return a}});var v=e(15009),i=e.n(v),T=e(19632),c=e.n(T),C=e(5574),D=e.n(C),p=e(97857),L=e.n(p),g=e(99289),M=e.n(g),u=e(67294),r=e(85082),n=e(75179),a={"docs-intro-demo-01-demo-0":{component:u.memo(u.lazy(M()(i()().mark(function s(){var o,t,f,_,I,m,y,h,O;return i()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.resolve().then(e.bind(e,75179));case 2:return o=E.sent,t=o.Button,f=o.List,_=o.Typography,E.next=8,Promise.resolve().then(e.t.bind(e,67294,19));case 8:return I=E.sent,m=I.default,y=I.useState,h=function(B){return B.map(function(x){return L()(L()({},x),{},{title:"".concat(x.title," -- update")})})},O=function(){var B=y([]),x=D()(B,2),K=x[0],j=x[1];console.log("refresh");var S=function(){fetch("http://rap2api.taobao.org/app/mock/259267/getMenu").then(function(b){return b.json()}).then(function(b){j(b==null?void 0:b.data);var U=h(b==null?void 0:b.data);j(function($){return[].concat(c()($),c()(U))})})};return m.createElement(m.Fragment,null,m.createElement(t,{onClick:S},"\u8BF7\u6C42\u63A5\u53E3"),m.createElement(f,{bordered:!0,style:{marginTop:16},dataSource:K,renderItem:function(b){return m.createElement(f.Item,null,m.createElement(_.Text,{mark:!0},b.title),m.createElement(_.Paragraph,null,Array.isArray(b.menu)?b.menu.join(","):""))}}))},E.abrupt("return",{default:O});case 14:case"end":return E.stop()}},s)})))),asset:{type:"BLOCK",id:"docs-intro-demo-01-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, List, Typography } from 'antd';
import React, { useState } from 'react';

type Item = {
  id: number;
  title: string;
  menu: string[];
};

const mutateData = (data: Item[]) => {
  return data.map((item) => ({
    ...item,
    title: \`\${item.title} -- update\`,
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
      <Button onClick={handleClick}>\u8BF7\u6C42\u63A5\u53E3</Button>
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

export default MockRequest;`},antd:{type:"NPM",value:"5.21.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:n,react:l||(l=e.t(u,2))},renderOpts:{compile:function(){var s=M()(i()().mark(function t(){var f,_=arguments;return i()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,e.e(335).then(e.bind(e,37335));case 2:return m.abrupt("return",(f=m.sent).default.apply(f,_));case 3:case"end":return m.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}}}},58264:function(R,d,e){var l;e.r(d),e.d(d,{demos:function(){return M}});var v=e(5574),i=e.n(v),T=e(15009),c=e.n(T),C=e(99289),D=e.n(C),p=e(67294),L=e(52425),g=e(75179),M={"docs-intro-demo-02-demo-0":{component:p.memo(p.lazy(D()(c()().mark(function u(){var r,n,a,s,o,t;return c()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.bind(e,75179));case 2:return r=_.sent,n=r.Button,_.next=6,Promise.resolve().then(e.t.bind(e,67294,19));case 6:return a=_.sent,s=a.default,o=a.useEffect,t=function(){var m={key:"value"},y=function(){m.key="newValue"};return o(function(){console.log("111")},[m]),s.createElement(n,{onClick:y},"change")},_.abrupt("return",{default:t});case 11:case"end":return _.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-intro-demo-02-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from 'antd';
import React, { useEffect } from 'react';

const Demo = () => {
  const obj = { key: 'value' };

  const handleChange = () => {
    obj.key = 'newValue'; // obj \u7684\u5F15\u7528\u4E0D\u53D8\uFF0C\u4F46\u5185\u5BB9\u53D8\u5316
  };

  useEffect(() => {
    console.log('111');
    //todo
  }, [obj]);

  return <Button onClick={handleChange}>change</Button>;
};

export default Demo;`},antd:{type:"NPM",value:"5.21.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:g,react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var u=D()(c()().mark(function n(){var a,s=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},n)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-intro-demo-02-demo-1":{component:p.memo(p.lazy(D()(c()().mark(function u(){var r,n,a,s,o,t,f,_,I;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,Promise.resolve().then(e.bind(e,75179));case 2:return r=y.sent,n=r.Collapse,a=r.Modal,y.next=7,Promise.resolve().then(e.t.bind(e,67294,19));case 7:return s=y.sent,o=s.default,t=s.useMemo,y.next=12,Promise.resolve().then(e.t.bind(e,67294,19));case 12:return f=y.sent,_=f.useState,I=function(){var O=_([]),P=i()(O,2),E=P[0],A=P[1],B={a:"xxx"},x=t(function(){a.info({title:"create the form "})},[B]),K=function(S){A(S)};return o.createElement(n,{activeKey:E,onChange:K},o.createElement(n.Panel,{key:"1",header:"collapse 1"},"1"),o.createElement(n.Panel,{key:"2",header:"collapse 2"},"2"))},y.abrupt("return",{default:I});case 16:case"end":return y.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-intro-demo-02-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Collapse, Modal } from 'antd';
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

export default Demo;`},antd:{type:"NPM",value:"5.21.5"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{antd:g,react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var u=D()(c()().mark(function n(){var a,s=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},n)}));function r(){return u.apply(this,arguments)}return r}()}}}},24185:function(R,d,e){var l;e.r(d),e.d(d,{demos:function(){return g}});var v=e(15009),i=e.n(v),T=e(5574),c=e.n(T),C=e(99289),D=e.n(C),p=e(67294),L=e(24928),g={"docs-intro-demo-03-demo-0":{component:p.memo(p.lazy(D()(i()().mark(function M(){var u,r,n,a,s;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){var _=n(""),I=c()(_,2),m=I[0],y=I[1],h=n(50),O=c()(h,2),P=O[0],E=O[1];return a(function(){P===50&&E(100)},[P]),r.createElement(r.Fragment,null,r.createElement("div",{style:{width:100,height:P,background:"pink"}},m),r.createElement("button",{onClick:function(){y("changed"),E(50)}},"change height"))},t.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return u=t.sent,r=u.default,n=u.useState,a=u.useEffect,t.abrupt("return",{default:s});case 8:case"end":return t.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-intro-demo-03-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';

function Example() {
  const [text, setText] = useState('');
  const [height, setHeight] = useState(50);
  useEffect(() => {
    if (height === 50) {
      setHeight(100);
    }
  }, [height]);

  return (
    <>
      <div style={{ width: 100, height, background: 'pink' }}>{text}</div>
      <button
        onClick={() => {
          setText('changed');
          setHeight(50);
        }}
      >
        change height
      </button>
    </>
  );
}

export default Example;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u70B9\u51FB\u6309\u94AE\uFF0C\u9875\u9762\u95EA\u70C1",title:"\u4F7F\u7528useEffect"},context:{react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var M=D()(i()().mark(function r(){var n,a=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(335).then(e.bind(e,37335));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,a));case 3:case"end":return o.stop()}},r)}));function u(){return M.apply(this,arguments)}return u}()}},"docs-intro-demo-03-demo-1":{component:p.memo(p.lazy(D()(i()().mark(function M(){var u,r,n,a,s;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){var _=n(""),I=c()(_,2),m=I[0],y=I[1],h=n(50),O=c()(h,2),P=O[0],E=O[1];return a(function(){P===50&&E(100)},[P]),r.createElement(r.Fragment,null,r.createElement("div",{style:{width:100,height:P,background:"pink"}},m),r.createElement("button",{onClick:function(){y("changed"),E(50)}},"change height"))},t.next=3,Promise.resolve().then(e.t.bind(e,67294,19));case 3:return u=t.sent,r=u.default,n=u.useState,a=u.useLayoutEffect,t.abrupt("return",{default:s});case 8:case"end":return t.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-intro-demo-03-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useState, useLayoutEffect } from 'react';
import { Button } from 'antd';

function Example() {
  const [text, setText] = useState('');
  const [height, setHeight] = useState(50);
  useLayoutEffect(() => {
    if (height === 50) {
      setHeight(100);
    }
  }, [height]);

  return (
    <>
      <div style={{ width: 100, height, background: 'pink' }}>{text}</div>
      <button
        onClick={() => {
          setText('changed');
          setHeight(50);
        }}
      >
        change height
      </button>
    </>
  );
}

export default Example;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",description:"\u70B9\u51FB\u6309\u94AE\uFF0C\u9875\u9762\u4E0D\u4F1A\u95EA\u70C1\uFF0C\u56E0\u4E3AuseLayoutEffect\u53D1\u751F\u5728\u6D4F\u89C8\u5668\u7ED8\u5236\u4E4B\u524D",title:"\u4F7F\u7528useLayoutEffect"},context:{react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var M=D()(i()().mark(function r(){var n,a=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(335).then(e.bind(e,37335));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,a));case 3:case"end":return o.stop()}},r)}));function u(){return M.apply(this,arguments)}return u}()}}}},58312:function(R,d,e){var l;e.r(d),e.d(d,{demos:function(){return M}});var v=e(5574),i=e.n(v),T=e(15009),c=e.n(T),C=e(99289),D=e.n(C),p=e(67294),L=e(41837),g=e(75179),M={"docs-intro-demo-04-demo-0":{component:p.memo(p.lazy(D()(c()().mark(function u(){var r,n,a,s,o,t,f,_;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=m.sent,n=r.default,a=r.useRef,m.next=7,Promise.resolve().then(e.bind(e,75179));case 7:return s=m.sent,o=s.Input,t=s.Button,f=s.Space,_=function(){var h=a(null);function O(){h.current.focus()}return n.createElement(f,null,n.createElement(o,{ref:h}),n.createElement(t,{onClick:O},"Focus the input"))},m.abrupt("return",{default:_});case 13:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-intro-demo-04-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef } from 'react';
import { Input, Button, Space } from 'antd';

const TextInput = () => {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <Space>
      <Input ref={inputRef} />
      <Button onClick={focusInput}>Focus the input</Button>
    </Space>
  );
};

export default TextInput;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.5"}},entry:"index.tsx"},context:{react:l||(l=e.t(p,2)),antd:g},renderOpts:{compile:function(){var u=D()(c()().mark(function n(){var a,s=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},n)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-intro-demo-04-demo-1":{component:p.memo(p.lazy(D()(c()().mark(function u(){var r,n,a,s,o;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=f.sent,n=r.default,a=r.useRef,s=r.useEffect,o=function(){var I=a(0);return s(function(){var m=setInterval(function(){I.current++,console.log("Timer running...")},1e3);return function(){return clearInterval(m)}},[]),n.createElement("div",null,n.createElement("p",null,I.current))},f.abrupt("return",{default:o});case 8:case"end":return f.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-intro-demo-04-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useEffect } from 'react';

const Timer = () => {
  const timerRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      timerRef.current++;
      console.log('Timer running...');
    }, 1000);

    // \u6E05\u9664\u5B9A\u65F6\u5668
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{timerRef.current}</p>
    </div>
  );
};

export default Timer;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var u=D()(c()().mark(function n(){var a,s=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},n)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-intro-demo-04-demo-2":{component:p.memo(p.lazy(D()(c()().mark(function u(){var r,n,a,s,o,t;return c()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=_.sent,n=r.default,a=r.useRef,s=r.useState,o=r.useEffect,t=function(){var m=s(0),y=i()(m,2),h=y[0],O=y[1],P=a(h);o(function(){P.current=h},[h]);var E=function(){setTimeout(function(){O(P.current+1)},3e3)};return n.createElement("div",null,n.createElement("p",null,"Count: ",h),n.createElement("button",{onClick:E},"Increment after 3 seconds"))},_.abrupt("return",{default:t});case 9:case"end":return _.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-intro-demo-04-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useRef, useState, useEffect } from 'react';

const DelayedCount = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count; // \u540C\u6B65\u6700\u65B0\u7684 count \u5230 ref
  }, [count]);

  const handleDelayedIncrement = () => {
    setTimeout(() => {
      // \u901A\u8FC7 ref \u8BBF\u95EE\u6700\u65B0\u7684 count \u503C\uFF0C\u800C\u4E0D\u662F\u95ED\u5305\u4E2D\u7684\u65E7\u503C
      setCount(countRef.current + 1);
    }, 3000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleDelayedIncrement}>Increment after 3 seconds</button>
    </div>
  );
};

export default DelayedCount;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var u=D()(c()().mark(function n(){var a,s=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},n)}));function r(){return u.apply(this,arguments)}return r}()}}}},26750:function(R,d,e){var l;e.r(d),e.d(d,{demos:function(){return p}});var v=e(15009),i=e.n(v),T=e(99289),c=e.n(T),C=e(67294),D=e(13797),p={"docs-intro-demo-05-demo-0":{component:C.memo(C.lazy(c()(i()().mark(function L(){var g,M,u,r;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return g=a.sent,M=g.default,u=[{key:"key1",value:"value1"},{key:"key2",value:"value2"}],r=function(){return M.createElement("section",null,u.map(function(o){return M.createElement("div",null,o.value)}))},a.abrupt("return",{default:r});case 7:case"end":return a.stop()}},L)})))),asset:{type:"BLOCK",id:"docs-intro-demo-05-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';

type dtype = {
  key: string;
  value: string;
};

const dataSource: dtype[] = [
  { key: 'key1', value: 'value1' },
  { key: 'key2', value: 'value2' },
];

const Step4 = () => {
  return (
    <section>
      {dataSource.map((item) => (
        <div>{item.value}</div>
      ))}
    </section>
  );
};

export default Step4;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:l||(l=e.t(C,2))},renderOpts:{compile:function(){var L=c()(i()().mark(function M(){var u,r=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(335).then(e.bind(e,37335));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,r));case 3:case"end":return a.stop()}},M)}));function g(){return L.apply(this,arguments)}return g}()}}}},3021:function(R,d,e){e.r(d),e.d(d,{demos:function(){return i}});var l=e(67294),v=e(65826),i={}},68115:function(R,d,e){var l;e.r(d),e.d(d,{demos:function(){return M}});var v=e(15009),i=e.n(v),T=e(5574),c=e.n(T),C=e(99289),D=e.n(C),p=e(67294),L=e(16044),g=e(75179),M={"docs-intro-demo-07-demo-0":{component:p.memo(p.lazy(D()(i()().mark(function u(){var r,n,a,s,o,t,f,_,I,m;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=h.sent,n=r.default,a=r.useState,h.next=7,Promise.resolve().then(e.bind(e,75179));case 7:return s=h.sent,o=s.Button,t=s.Flex,f=0,_=function(P){var E=P.title;return n.createElement(t,{align:"center",style:{border:"1px solid #000",padding:16,background:"#fff"}},n.createElement("p",null,E),n.createElement("span",null,"\u6E32\u67D3\u6B21\u6570\uFF1A",f++))},I=function(P){var E=P.title,A=P.subTitle,B=a(0),x=c()(B,2),K=x[0],j=x[1];return n.createElement("div",{style:{border:"1px solid #000",padding:16,background:"#ccc"}},n.createElement(t,{align:"center"},n.createElement("p",null,E),n.createElement(o,{size:"small",onClick:function(){return j(function(W){return W+1})}},"\u89E6\u53D1\u6E32\u67D3"),n.createElement("span",null,"\u6E32\u67D3\u6B21\u6570\uFF1A",K)),n.createElement(_,{title:A}))},m=function(){var P="wrapper",E="inside";return n.createElement("div",{style:{border:"1px solid #000",padding:16,background:"#fff"}},n.createElement("p",null,"App"),n.createElement(I,{title:P,subTitle:E}))},h.abrupt("return",{default:m});case 15:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-intro-demo-07-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Flex } from 'antd';

let renderTimes = 0;

const Inside = ({ title }: { title: string }) => {
  return (
    <Flex align="center" style={{ border: '1px solid #000', padding: 16, background: '#fff' }}>
      <p>{title}</p>
      <span>\u6E32\u67D3\u6B21\u6570\uFF1A{renderTimes++}</span>
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
          \u89E6\u53D1\u6E32\u67D3
        </Button>
        <span>\u6E32\u67D3\u6B21\u6570\uFF1A{count}</span>
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

export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.5"}},entry:"index.tsx"},context:{react:l||(l=e.t(p,2)),antd:g},renderOpts:{compile:function(){var u=D()(i()().mark(function n(){var a,s=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},n)}));function r(){return u.apply(this,arguments)}return r}()}},"docs-intro-demo-07-demo-1":{component:p.memo(p.lazy(D()(i()().mark(function u(){var r,n,a,s,o,t,f,_,I,m;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=h.sent,n=r.default,a=r.useState,h.next=7,Promise.resolve().then(e.bind(e,75179));case 7:return s=h.sent,o=s.Button,t=s.Flex,f=0,_=function(P){var E=P.title;return n.createElement(t,{align:"center",style:{border:"1px solid #000",padding:16,background:"#fff"}},n.createElement("p",null,E),n.createElement("span",null,"\u6E32\u67D3\u6B21\u6570\uFF1A",f++))},I=function(P){var E=P.title,A=P.renderSubTitle,B=a(0),x=c()(B,2),K=x[0],j=x[1];return n.createElement("div",{style:{border:"1px solid #000",padding:16,background:"#ccc"}},n.createElement(t,{align:"center"},n.createElement("p",null,E),n.createElement(o,{size:"small",onClick:function(){return j(function(W){return W+1})}},"\u89E6\u53D1\u6E32\u67D3"),n.createElement("span",null,"\u6E32\u67D3\u6B21\u6570\uFF1A",K)),A)},m=function(){var P="wrapper",E="inside";return n.createElement("div",{style:{border:"1px solid #000",padding:16,background:"#fff"}},n.createElement("p",null,"App"),n.createElement(I,{title:P,renderSubTitle:n.createElement(_,{title:E})}))},h.abrupt("return",{default:m});case 15:case"end":return h.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-intro-demo-07-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Flex } from 'antd';

let renderTimes = 0;

const Inside = ({ title }: { title: string }) => {
  return (
    <Flex align="center" style={{ border: '1px solid #000', padding: 16, background: '#fff' }}>
      <p>{title}</p>
      <span>\u6E32\u67D3\u6B21\u6570\uFF1A{renderTimes++}</span>
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
          \u89E6\u53D1\u6E32\u67D3
        </Button>
        <span>\u6E32\u67D3\u6B21\u6570\uFF1A{count}</span>
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

export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.5"}},entry:"index.tsx"},context:{react:l||(l=e.t(p,2)),antd:g},renderOpts:{compile:function(){var u=D()(i()().mark(function n(){var a,s=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(335).then(e.bind(e,37335));case 2:return t.abrupt("return",(a=t.sent).default.apply(a,s));case 3:case"end":return t.stop()}},n)}));function r(){return u.apply(this,arguments)}return r}()}}}},533:function(R,d,e){var l;e.r(d),e.d(d,{demos:function(){return g}});var v=e(15009),i=e.n(v),T=e(5574),c=e.n(T),C=e(99289),D=e.n(C),p=e(67294),L=e(56620),g={"docs-intro-demo-08-demo-0":{component:p.memo(p.lazy(D()(i()().mark(function M(){var u,r,n,a,s,o;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=f.sent,r=u.default,n=u.useState,a=r.memo(function(_){var I=_.item;return console.log("Rendering ListItem: ".concat(I)),r.createElement("div",{style:{padding:"5px",border:"1px solid #ccc",margin:"5px"}},I)}),s=function(I){var m=I.items;return console.log("Rendering List"),r.createElement("div",null,m.map(function(y){return r.createElement(a,{key:y,item:y})}))},o=function(){var I=n(0),m=c()(I,2),y=m[0],h=m[1],O=n(["Item 1","Item 2","Item 3"]),P=c()(O,1),E=P[0];return r.createElement("div",null,r.createElement("h1",null,"Counter: ",y),r.createElement("button",{onClick:function(){return h(y+1)}},"Increment"),r.createElement("h2",null,"List"),r.createElement(s,{items:E}))},f.abrupt("return",{default:o});case 9:case"end":return f.stop()}},M)})))),asset:{type:"BLOCK",id:"docs-intro-demo-08-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';

// \u5217\u8868\u9879\u7EC4\u4EF6\uFF0C\u4F7F\u7528 React.memo
const ListItem = React.memo(({ item }) => {
  console.log(\`Rendering ListItem: \${item}\`);

  return <div style={{ padding: '5px', border: '1px solid #ccc', margin: '5px' }}>{item}</div>;
});

// \u5217\u8868\u7EC4\u4EF6
const List = ({ items }) => {
  console.log('Rendering List');

  return (
    <div>
      {items.map((item) => (
        <ListItem key={item} item={item} />
      ))}
    </div>
  );
};

// \u4E3B\u5E94\u7528\u7EC4\u4EF6
const App = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>List</h2>
      <List items={items} />
    </div>
  );
};

export default App;`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:l||(l=e.t(p,2))},renderOpts:{compile:function(){var M=D()(i()().mark(function r(){var n,a=arguments;return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(335).then(e.bind(e,37335));case 2:return o.abrupt("return",(n=o.sent).default.apply(n,a));case 3:case"end":return o.stop()}},r)}));function u(){return M.apply(this,arguments)}return u}()}}}},48014:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(1122);const v=[{value:"https://jser.dev/2024-05-11-introducing-rie/",paraId:0,tocIndex:0},{value:"https://jser.pro/ddir/rie?reactVersion=18.3.1&snippetKey=hq8jm2ylzb9u8eh468",paraId:1,tocIndex:0},{value:"\u8BF4\u660E: ",paraId:2,tocIndex:0},{value:"https://jser.dev/series/react-source-code-walkthrough",paraId:2,tocIndex:0},{value:"React Internals Explorer - easily see how React works",paraId:3,tocIndex:0},{value:"Fiber \u662F React 16 \u4E4B\u540E\u63D0\u51FA\u7684\u67B6\u6784\uFF0C\u4F18\u52BF\u4E3B\u8981\u4F53\u73B0\u5728\u4EE5\u4E0B\u4E09\u90E8\u5206\uFF1A",paraId:4,tocIndex:0},{value:"\u5F02\u6B65\u53EF\u4E2D\u65AD\u6E32\u67D3",paraId:5,tocIndex:0},{value:"\u4F18\u5148\u7EA7\u8C03\u5EA6\uFF08Lane\uFF09",paraId:5,tocIndex:0},{value:"\u53CC\u7F13\u51B2\u673A\u5236\uFF08workInProgress tree, current tree)",paraId:5,tocIndex:0},{value:"\u7531\u4E8E\u957F\u65F6\u95F4\u7684\u8BA1\u7B97\u4EFB\u52A1\u53EF\u80FD\u4F1A\u5360\u7528\u7EBF\u7A0B\u5BFC\u81F4\u9875\u9762\u5361\u987F\u7684\u95EE\u9898\uFF0CReact\u63A8\u51FA\u4E86\u65F6\u95F4\u5207\u7247\u7684\u6280\u672F\u3002",paraId:6,tocIndex:1},{value:"\u5C06VDOM\u7684\u6267\u884C\u8FC7\u7A0B\uFF0C\u62C6\u5206\u4E3A\u4E00\u4E2A\u4E00\u4E2A\u7684\u72EC\u7ACB\u7684\u5B8F\u4EFB\u52A1\uFF0C\u5C06\u6BCF\u4E2A\u5B8F\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\u9650\u5236\u5728\u4E00\u5B9A\u7684\u8303\u56F4\u5185\uFF085ms\uFF09",paraId:7,tocIndex:1},{value:"\u800CScheduler\u8C03\u5EA6\u5668\u5B9E\u73B0\u4E86\u4E00\u5957\u57FA\u4E8ELane\u6A21\u578B\u7684\u4F18\u5148\u7EA7\u7B97\u6CD5\uFF0CLane\u662F\u4E3A\u4E86\u6807\u8BB0\u66F4\u65B0\u7684\u4F18\u5148\u7EA7\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u8BF4\u6807\u8BB0\u4E00\u9879\u5DE5\u4F5C\u7684\u4F18\u5148\u7EA7\u3002",paraId:8,tocIndex:2},{value:"Fiber\u67B6\u6784\u7684\u5DE5\u4F5C\u539F\u7406\u7C7B\u4F3C\u4E8E\u663E\u5361\u7684\u5DE5\u4F5C\u539F\u7406\u3002",paraId:9,tocIndex:3},{value:"\u7ED8\u5236\u7684\u6700\u7EC8\u4EA7\u7269\u662F\u4E00\u5F20\u56FE\u7247\uFF0C\u8FD9\u5F20\u56FE\u7247\u88AB\u53D1\u9001\u7ED9\u663E\u5361\u540E\u5373\u53EF\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u3002",paraId:10,tocIndex:3},{value:`
Fiber\u67B6\u6784\u4E2D\u540C\u65F6\u5B58\u5728\u4E24\u68F5Fiber Tree\uFF0C\u4E00\u68F5\u662F\u771F\u5B9EUI\u5BF9\u5E94\u7684Fiber Tree\uFF0C\u53EF\u7406\u89E3\u4E3A\u524D\u7F13\u51B2\u533A\u3002\u53E6\u4E00\u68F5\u6B63\u5728\u5185\u5B58\u4E2D\u6784\u5EFA\u7684Fiber Tree\uFF0C\u53EF\u7406\u89E3\u4E3A\u540E\u7F13\u51B2\u533A\u3002`,paraId:10,tocIndex:3},{value:"fiberRootNode",paraId:11,tocIndex:3},{value:"\u8D1F\u8D23\u7BA1\u7406Current Fiber Tree\u548CWip Fiber tree\u4E4B\u95F4\u7684\u5207\u6362\u3002",paraId:11,tocIndex:3}]},51446:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(68537);const v=[{value:"react-dumi-demo",paraId:0}]},39646:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(85082);const v=[{value:"\u5F53\u6211\u4EEC\u6B63\u5E38\u4F7F\u7528",paraId:0,tocIndex:1},{value:"setDataSource([...dataSource, ...newData])",paraId:0,tocIndex:1},{value:"\u76F4\u63A5\u66F4\u65B0\u65F6\uFF0C\u8FD9\u4E2A\u503C\u5E76\u4E0D\u662F\u5373\u65F6\u751F\u6548\u7684\uFF0C\u8FD9\u662F\u56E0\u4E3A\u72B6\u6001\u66F4\u65B0\u662F\u5F02\u6B65\u7684\uFF0C\u65E0\u6CD5\u7ACB\u5373\u5728\u66F4\u65B0\u540E\u83B7\u53D6\u6700\u65B0\u7684\u72B6\u6001\u3002",paraId:0,tocIndex:1},{value:`
\u4F7F\u7528\u51FD\u6570\u5F0F\u66F4\u65B0\u53EF\u4EE5\u57FA\u4E8E state \u7684\u6700\u65B0\u72B6\u6001\uFF0C\u8FDB\u884C\u4E0B\u4E00\u6B21\u7684\u8BA1\u7B97\u3002`,paraId:0,tocIndex:1},{value:"\u8FD9\u91CC\u8FD8\u53EF\u4EE5\u53D1\u73B0\u53E6\u4E00\u4E2A\u95EE\u9898\uFF0CReact \u7684\u6279\u5904\u7406\u5728\u5F02\u6B65\u4E2D\u5931\u6548\u4E86\u3002",paraId:1,tocIndex:2},{value:"\u6279\u5904\u7406\u662F\u6307 React \u4E3A\u4E86\u66F4\u597D\u7684\u6027\u80FD\u800C\u5C06\u591A\u4E2A\u72B6\u6001\u66F4\u65B0\u5206\u7EC4\u5230\u4E00\u4E2A\u91CD\u65B0\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u3002",paraId:2,tocIndex:2},{value:"\u5728\u540C\u4E00\u4E2A\u51FD\u6570\u4E2D\u8FDB\u884C\u4E86\u4E24\u6B21 setState\uFF0C\u7EC4\u4EF6 re-render \u4E86\u4E24\u6B21\u3002",paraId:3,tocIndex:2},{value:`
\u56E0\u4E3A\u5F53\u524D\u4F7F\u7528\u7684\u7248\u672C\u662F 17.x\uFF0C\u8BE5\u95EE\u9898\u5728 React 18 \u7248\u672C\u4E2D\u5F97\u5230\u4E86\u4F18\u5316\u3002`,paraId:3,tocIndex:2},{value:`
\u8BE6\u60C5\uFF1A`,paraId:3,tocIndex:2},{value:"https://github.com/reactwg/react-18/discussions/21",paraId:3,tocIndex:2},{value:"\u603B\u7ED3\u6765\u8BF4\uFF0C17 \u4E2D\u7684\u6279\u5904\u7406\u53EA\u80FD\u5728\u5408\u6210\u4E8B\u4EF6\u4E2D\u751F\u6548\uFF0C\u9488\u5BF9 setTimeout\u3001Promise\u3001\u539F\u751F\u4E8B\u4EF6\u7B49\u573A\u666F\u65E0\u6CD5\u751F\u6548\uFF0C18 \u5F00\u59CB\u9ED8\u8BA4\u5728\u4EFB\u610F\u4E8B\u4EF6\u4E2D\u90FD\u53EF\u4EE5\u6279\u5904\u7406\u66F4\u65B0\u3002",paraId:4,tocIndex:2}]},68646:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(52425);const v=[{value:"useEffect\u3001useMemo \u548C useCallback \u7684\u4F9D\u8D56\u9879\u90FD\u662F\u901A\u8FC7\u6D45\u6BD4\u8F83\u6765\u786E\u5B9A\u662F\u5426\u9700\u8981\u91CD\u65B0\u8BA1\u7B97\u6216\u6267\u884C\u3002\u8FD9\u610F\u5473\u7740\u53EA\u6709\u5F53\u4F9D\u8D56\u9879\u7684\u5F15\u7528\u53D1\u751F\u53D8\u5316\u65F6\uFF0CReact \u624D\u4F1A\u8BA4\u4E3A\u4F9D\u8D56\u9879\u53D1\u751F\u4E86\u53D8\u5316\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u80FD\u4F1A\u4EA7\u751F\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5\uFF1A",paraId:1,tocIndex:0},{value:"1.\u5BF9\u8C61\u5F15\u7528\u4E0D\u53D8\uFF0C\u4F46\u662F\u5185\u5BB9\u53D1\u751F\u4E86\u53D8\u5316",paraId:2,tocIndex:0},{value:"2.\u5BF9\u8C61\u91CD\u65B0\u521B\u5EFA",paraId:3}]},16203:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(24928);const v=[{value:"useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.",paraId:0,tocIndex:1},{value:"\u4F7F\u7528\u573A\u666F\uFF1A",paraId:1,tocIndex:1},{value:"\u9700\u8981\u540C\u6B65\u8BFB\u53D6\u6216\u66F4\u6539 DOM\uFF1A\u4F8B\u5982\uFF0C\u4F60\u9700\u8981\u8BFB\u53D6\u5143\u7D20\u7684\u5927\u5C0F\u6216\u4F4D\u7F6E\u5E76\u5728\u6E32\u67D3\u524D\u8FDB\u884C\u8C03\u6574\u3002",paraId:2,tocIndex:1},{value:"\u9632\u6B62\u95EA\u70C1\uFF1A\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u5F02\u6B65\u7684 useEffect \u53EF\u80FD\u4F1A\u5BFC\u81F4\u53EF\u89C1\u7684\u5E03\u5C40\u8DF3\u52A8\u6216\u95EA\u70C1\u3002\u4F8B\u5982\uFF0C\u52A8\u753B\u7684\u542F\u52A8\u6216\u67D0\u4E9B\u53EF\u89C1\u7684\u5FEB\u901F DOM \u66F4\u6539\u3002",paraId:2,tocIndex:1},{value:"\u6CE8\u610F\u4E8B\u9879\uFF1A",paraId:3},{value:"\u907F\u514D\u8FC7\u5EA6\u4F7F\u7528 useLayoutEffect\uFF0C\u56E0\u4E3A\u5B83\u662F\u540C\u6B65\u7684\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u5E94\u7528\u7684\u6027\u80FD\u3002\u53EA\u6709\u5F53\u4F60\u786E\u5B9E\u9700\u8981\u540C\u6B65\u7684 DOM \u64CD\u4F5C\u65F6\u624D\u4F7F\u7528\u5B83\u3002",paraId:4}]},19863:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(41837);const v=[{value:"\u8BBF\u95EE DOM \u5143\u7D20",paraId:0,tocIndex:0},{value:`
React \u5F3A\u8C03\u58F0\u660E\u5F0F\u7F16\u7A0B\uFF0C\u51CF\u5C11\u76F4\u63A5\u64CD\u4F5C DOM \u7684\u60C5\u51B5\u3002\u7136\u800C\uFF0C\u6709\u65F6\u6211\u4EEC\u4ECD\u7136\u9700\u8981\u76F4\u63A5\u4E0E DOM \u4EA4\u4E92\uFF0C\u6216\u8005\u8BBF\u95EE\u67D0\u4E2A\u7EC4\u4EF6\u7684\u5177\u4F53\u5B9E\u4F8B\u3002\u5F53\u6211\u4EEC\u9700\u8981\u76F4\u63A5\u4E0E DOM \u5143\u7D20\u8FDB\u884C\u4EA4\u4E92\uFF08\u4F8B\u5982\uFF0C\u624B\u52A8\u83B7\u53D6\u7126\u70B9\u6216\u6D4B\u91CF\u5143\u7D20\u5C3A\u5BF8\uFF09\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 useRef\u3002`,paraId:0,tocIndex:0},{value:"\u6301\u4E45\u5316\u53D8\u91CF",paraId:1,tocIndex:0},{value:"useRef",paraId:1,tocIndex:0},{value:" \u53EF\u4EE5\u7528\u6765\u5B58\u50A8\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7684\u503C\uFF0C\u8FD9\u4E9B\u503C\u5728\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\u4E0D\u4F1A\u6539\u53D8\u3002\u8FD9\u548C useState \u4E0D\u540C\uFF0CuseRef \u6539\u53D8\u4E0D\u4F1A\u5F15\u53D1\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u3002\u793A\u4F8B\uFF1A\u5B9A\u65F6\u5668",paraId:1,tocIndex:0},{value:"\u95ED\u5305\u9677\u9631",paraId:2,tocIndex:0},{value:`
\u5728\u5F02\u6B65\u51FD\u6570\u4E2D\uFF08\u5982 setTimeout\uFF09\uFF0C\u7531\u4E8E\u95ED\u5305\u7684\u7279\u6027\uFF0C\u53EF\u80FD\u4F1A\u6355\u83B7\u5230\u65E7\u7684\u72B6\u6001\u503C\u3002useRef \u53EF\u4EE5\u5E2E\u52A9\u6301\u4E45\u5316\u6700\u65B0\u7684\u503C\uFF0C\u4EE5\u907F\u514D\u6355\u83B7\u5230\u65E7\u7684\u72B6\u6001\u3002`,paraId:2,tocIndex:0}]},2124:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(13797);const v=[{value:"key\u5C5E\u6027\u518D\u5217\u8868\u6E32\u67D3\u7684\u65F6\u5019\u8D77\u5230\u5173\u952E\u4F5C\u7528",paraId:0,tocIndex:1},{value:"\u5F00\u53D1\u65F6\u6211\u4EEC\u5076\u5C14\u4F1A\u51FA\u73B0\u4E00\u4E2A\u62A5\u9519\uFF0C\u663E\u7136\u662F\u56E0\u4E3A\u6211\u4EEC\u6CA1\u6709\u7ED9\u5217\u8868\u9879\u6DFB\u52A0key\u503C",paraId:1,tocIndex:1},{value:"\u5E38\u89C1\u7684\u65E0\u6548Key\u7684\u60C5\u51B5\uFF1A",paraId:2},{value:"\u4F7F\u7528\u6570\u7EC4\u7D22\u5F15",paraId:3},{value:"\u5982\u679C\u5217\u8868\u7684\u987A\u5E8F\u53D8\u5316\uFF08\u5982\u6392\u5E8F\u3001\u63D2\u5165\u3001\u5220\u9664\u7B49\uFF09\uFF0C\u7D22\u5F15 ",paraId:4},{value:"key",paraId:4},{value:" \u4F1A\u5BFC\u81F4 React \u8BA4\u4E3A\u5143\u7D20\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5373\u4F7F\u5B9E\u9645\u4E0A\u6CA1\u6709\u53D8\u5316\u3002\u8FD9\u4F1A\u5BFC\u81F4\u4E0D\u5FC5\u8981\u7684\u91CD\u65B0\u6E32\u67D3\u3001\u7EC4\u4EF6\u72B6\u6001\u4E22\u5931\u3001\u4EE5\u53CA\u6F5C\u5728\u7684\u52A8\u753B\u6216\u8F93\u5165\u6846\u7126\u70B9\u7B49\u95EE\u9898\u3002",paraId:4},{value:"\u4F7F\u7528\u552F\u4E00\u4E0D\u53D8key",paraId:5},{value:"\u591A\u4E2A\u5143\u7D20\u7684key\u76F8\u540C\uFF0CReact\u65E0\u6CD5\u8BC6\u522B\u552F\u4E00\u6807\u5FD7\uFF0C\u5BFC\u81F4diff\u7B97\u6CD5\u5931\u6548\uFF0C\u6E32\u67D3\u51FA\u9519",paraId:6},{value:"\u7F3A\u5C11key",paraId:7},{value:"\u6CA1\u6709 ",paraId:8},{value:"key",paraId:8},{value:" \u5C5E\u6027\u65F6\uFF0CReact \u65E0\u6CD5\u9AD8\u6548\u5730\u8BA1\u7B97\u548C\u5339\u914D\u53D8\u5316\u7684\u5217\u8868\u9879\uFF0C\u5BFC\u81F4\u6F5C\u5728\u7684\u6027\u80FD\u95EE\u9898\u548C\u4E0D\u6B63\u786E\u7684\u6E32\u67D3\u884C\u4E3A\u3002",paraId:8},{value:"React\u7ED9\u5217\u8868\u52A0key\u5C5E\u6027\u7684\u539F\u56E0\uFF0C\u548C\u6211\u4EEC\u719F\u6089\u7684diff\u7B97\u6CD5\u6709\u5173\u3002",paraId:9,tocIndex:2},{value:"React\u9700\u8981\u540C\u65F6\u7EF4\u62A4\u4E24\u68F5\u865A\u62DFDOM\u6811\uFF1A\u4E00\u68F5\u8868\u793A\u5F53\u524D\u7684DOM\u7ED3\u6784\uFF0C\u53E6\u4E00\u68F5\u5728React\u72B6\u6001\u53D8\u66F4\u5C06\u8981\u91CD\u65B0\u6E32\u67D3\u65F6\u751F\u6210\u3002React\u901A\u8FC7\u6BD4\u8F83\u8FD9\u4E24\u68F5\u6811\u7684\u5DEE\u5F02\uFF0C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u4FEE\u6539DOM\u7ED3\u6784\uFF0C\u4EE5\u53CA\u5982\u4F55\u4FEE\u6539\u3002\u8FD9\u79CD\u7B97\u6CD5\u79F0\u4F5CDiff\u7B97\u6CD5\u3002",paraId:10,tocIndex:2},{value:"tree diff",paraId:11,tocIndex:2},{value:"component diff",paraId:11,tocIndex:2},{value:"element diff",paraId:11,tocIndex:2},{value:"1\uFF09key\u7684\u4F5C\u7528",paraId:12,tocIndex:2},{value:"\u5F53\u540C\u4E00\u5C42\u7EA7\u7684\u67D0\u4E2A\u8282\u70B9\u6DFB\u52A0\u4E86\u5BF9\u4E8E\u5176\u4ED6\u540C\u7EA7\u8282\u70B9\u552F\u4E00\u7684key\u5C5E\u6027\uFF0C\u5F53\u5B83\u5728\u5F53\u524D\u5C42\u7EA7\u7684\u4F4D\u7F6E\u53D1\u751F\u4E86\u53D8\u5316\u540E\u3002react diff\u7B97\u6CD5\u901A\u8FC7\u65B0\u65E7\u8282\u70B9\u6BD4\u8F83\u540E\uFF0C\u5982\u679C\u53D1\u73B0\u4E86key\u503C\u76F8\u540C\u7684\u65B0\u65E7\u8282\u70B9\uFF0C\u5C31\u4F1A\u6267\u884C\u79FB\u52A8\u64CD\u4F5C\uFF08\u7136\u540E\u4F9D\u7136\u6309\u539F\u7B56\u7565\u6DF1\u5165\u8282\u70B9\u5185\u90E8\u7684\u5DEE\u5F02\u5BF9\u6BD4\u66F4\u65B0\uFF09\uFF0C\u800C\u4E0D\u4F1A\u6267\u884C\u539F\u7B56\u7565\u7684\u5220\u9664\u65E7\u8282\u70B9\uFF0C\u521B\u5EFA\u65B0\u8282\u70B9\u7684\u64CD\u4F5C\u3002\u8FD9\u65E0\u7591\u5927\u5927\u63D0\u9AD8\u4E86React\u6027\u80FD\u548C\u6E32\u67D3\u6548\u7387",paraId:13,tocIndex:2},{value:"\uFF082\uFF09key\u7684\u5177\u4F53\u6267\u884C\u8FC7\u7A0B",paraId:14,tocIndex:2},{value:"\u9996\u5148\uFF0C\u5BF9\u65B0\u96C6\u5408\u4E2D\u7684\u8282\u70B9\u8FDB\u884C\u5FAA\u73AF\u904D\u5386 for (name in nextChildren)\uFF0C\u901A\u8FC7\u552F\u4E00\u7684 key \u5224\u65AD\u65B0\u65E7\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728\u76F8\u540C\u7684\u8282\u70B9 if (prevChild === nextChild)\uFF0C\u5982\u679C\u5B58\u5728\u76F8\u540C\u8282\u70B9\uFF0C\u5219\u8FDB\u884C\u79FB\u52A8\u64CD\u4F5C\uFF0C\u4F46\u5728\u79FB\u52A8\u524D\u9700\u8981\u5C06\u5F53\u524D\u8282\u70B9\u5728\u65E7\u96C6\u5408\u4E2D\u7684\u4F4D\u7F6E\u4E0E lastIndex \u8FDB\u884C\u6BD4\u8F83 if (child._mountIndex < lastIndex)\uFF0C\u5426\u5219\u4E0D\u6267\u884C\u8BE5\u64CD\u4F5C\u3002",paraId:15,tocIndex:2},{value:"\u66F4\u591A\u8BE6\u7EC6\u7684\u6E90\u7801\u5206\u6790\uFF1A",paraId:16,tocIndex:2},{value:"https://jser.dev/react/2022/02/08/the-diffing-algorithm-for-array-in-react",paraId:16,tocIndex:2}]},97045:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(65826);const v=[{value:"React.Component: Catching rendering errors with an error boundary",paraId:0,tocIndex:0},{value:"\u6362\u53E5\u8BDD\u8BF4\uFF1AErrorBoundary \u662F React fiber \u6811\u7684\u58F0\u660E\u5F0F try\u2026catch",paraId:1,tocIndex:0},{value:"\u5982\u679C\u4E00\u4E2A class \u7EC4\u4EF6\u4E2D\u5B9A\u4E49\u4E86 static getDerivedStateFromError() \u6216 componentDidCatch() \u8FD9\u4E24\u4E2A\u751F\u547D\u5468\u671F\u65B9\u6CD5\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\uFF08\u6216\u4E24\u4E2A\uFF09\u65F6\uFF0C\u90A3\u4E48\u5B83\u5C31\u53D8\u6210\u4E00\u4E2A\u9519\u8BEF\u8FB9\u754C\u3002\u5F53\u629B\u51FA\u9519\u8BEF\u540E\uFF0C\u8BF7\u4F7F\u7528 static getDerivedStateFromError() \u6E32\u67D3\u5907\u7528 UI \uFF0C\u4F7F\u7528 componentDidCatch() \u6253\u5370\u9519\u8BEF\u4FE1\u606F\u3002",paraId:2,tocIndex:0},{value:`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // \u66F4\u65B0 state \u4F7F\u4E0B\u4E00\u6B21\u6E32\u67D3\u80FD\u591F\u663E\u793A\u964D\u7EA7\u540E\u7684 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // \u4F60\u540C\u6837\u53EF\u4EE5\u5C06\u9519\u8BEF\u65E5\u5FD7\u4E0A\u62A5\u7ED9\u670D\u52A1\u5668
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // \u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u964D\u7EA7\u540E\u7684 UI \u5E76\u6E32\u67D3
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
`,paraId:3,tocIndex:0}]},98547:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(16044);const v=[{value:"\u5982\u679C\u5C06\u9012\u5F52\u5D4C\u5957\u5F0F\u7EC4\u4EF6 \u2192 \u5229\u7528 Children \u5B9E\u73B0\u7EC4\u4EF6\u7ED3\u6784\uFF0C\u4F1A\u6709\u6548\u51CF\u5C11\u91CD\u590D\u6E32\u67D3\u7684\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u4ECE\u7ED3\u679C\u53EF\u770B\u51FA\uFF0C\u7236\u7EC4\u4EF6\u65E0\u5173\u7684 state \u53D8\u5316\uFF0C\u4F9D\u7136\u4F1A\u89E6\u53D1\u5B50\u7EC4\u4EF6\u7684\u91CD\u590D\u6E32\u67D3",paraId:1},{value:"\u5229\u7528 Children \u6539\u53D8\u7EC4\u4EF6\u7ED3\u6784\uFF1A",paraId:2},{value:"\u8FD9\u79CD\u65B9\u5F0F\u662F\u5229\u7528 React \u81EA\u8EAB\u7684\u4F18\u5316\u7B97\u6CD5\uFF0C\u89C4\u907F\u4E86\u6E32\u67D3\u3002",paraId:3},{value:"\u56E0\u4E3A React \u7684\u6E32\u67D3\u539F\u5219\u662F\uFF1A\u5728\u904D\u5386\u8FC7\u7A0B\u4E2D\u5982\u679C\u53D1\u73B0\u3010\u8282\u70B9\u672C\u8EAB\u3011\u4EE5\u53CA\u3010\u7956\u5148\u8282\u70B9\u3011\u6CA1\u6709\u66F4\u65B0\uFF0C\u90A3\u4E48\u8BE5\u8282\u70B9\u4E5F\u4E0D\u4F1A\u88AB\u91CD\u65B0\u6E32\u67D3\u3002",paraId:4},{value:"\u56E0\u4E3A Inside \u8282\u70B9\u662F\u88AB App \u7EC4\u4EF6\u521B\u5EFA\u7684\uFF0C\u56E0\u6B64\u5B83\u7684\u7956\u5148\u8282\u70B9\u4E3A App \u7EC4\u4EF6\u800C\u4E0D\u662F Wrapper \u7EC4\u4EF6\uFF0C\u56E0\u6B64 Wrapper \u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C\u4E0D\u4F1A\u89E6\u53D1 Inside \u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u3002",paraId:5},{value:"\u4E3B\u8981\u662F\u56E0\u4E3A\u5176",paraId:6,tocIndex:1},{value:"\u53EF\u7EF4\u62A4\u6027\u4E0D\u9AD8",paraId:6,tocIndex:1},{value:"\uFF0C\u56E0\u4E3A\u4F60\u9700\u8981\u628A\u5177\u4F53\u67D0\u51E0\u4E2A\u8282\u70B9\u5355\u72EC\u63D0\u51FA\u53BB\u58F0\u660E\uFF0C\u8FD9\u8BA9\u8282\u70B9\u6E32\u67D3\u8131\u79BB\u4E86\u5E38\u89C4\u7684\u8282\u70B9\u6D41\uFF0C\u800C\u7B49\u5230\u4E1A\u52A1\u53D8\u5F97\u590D\u6742\uFF0C\u53EF\u80FD\u5F88\u96BE\u907F\u514D\u9700\u8981\u4F20\u9012\u4E00\u4E9B props \u7ED9\u8BE5\u7EC4\u4EF6\uFF0C\u8FD9\u65F6\u5019\u4F60\u5C31\u9700\u8981\u628A\u8FD9\u4E2A\u7EC4\u4EF6\u63D0\u5347\u5230\u7236\u7EC4\u4EF6\u4E2D\uFF0C\u90A3\u4EE3\u7801\u6539\u8D77\u6765\u5C31\u53D8\u5F97\u975E\u5E38\u7684\u9EBB\u70E6\u3002",paraId:6,tocIndex:1}]},38263:function(R,d,e){e.r(d),e.d(d,{texts:function(){return v}});var l=e(56620);const v=[{value:"\u6839\u636E\u4E0A\u8FF0\u60C5\u51B5\uFF0CReact \u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u7B26\u5408\u4F7F\u7528\u4E60\u60EF\u7684\u4F18\u5316\u65B9\u5F0F\uFF0C\u90A3\u5C31\u662F React.memo\uFF0C\u8FD9\u4E2A API \u7684\u4F5C\u7528\u5C31\u662F\u8BA9\u7EC4\u4EF6\u53D8\u6210\u4E00\u4E2A\u7EAF\u7EC4\u4EF6\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u7EC4\u4EF6\u7684 props \u6CA1\u6709\u53D8\u5316\uFF0C\u90A3\u4E48\u5C31\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\u3002",paraId:0,tocIndex:0},{value:"\u867D\u7136",paraId:1,tocIndex:0},{value:"React.memo",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u4F18\u5316\u7EC4\u4EF6\u6027\u80FD\uFF0C\u4F46\u662F\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\uFF0C\u5373\u4FBF\u4E0D\u505A\u4EFB\u4F55\u4F18\u5316\uFF0CReact \u7684\u6027\u80FD\u4E5F\u662F\u8DB3\u591F\u7684\u3002\u56E0\u6B64\u5BF9\u4E8E\u7B80\u5355\u7EC4\u4EF6\u548C props \u5E38\u53D8\u7684\u7EC4\u4EF6\uFF0C\u901A\u5E38\u4E0D\u9700\u8981\u4F7F\u7528 memo\u3002",paraId:1,tocIndex:0},{value:"\u9664\u4E86\u4E0A\u8FF0\u63D0\u5230\u7684\u539F\u56E0\uFF0C\u4E0D\u5E38\u4F7F\u7528 memo \u7684\u53E6\u4E00\u4E2A\u539F\u56E0\u662F React.memo \u5F88\u5BB9\u6613\u88AB\u201C\u7834\u574F\u201D",paraId:2,tocIndex:0},{value:"memo",paraId:3,tocIndex:0},{value:"\u4F1A\u5728\u53D1\u73B0\u7EC4\u4EF6\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u5148\u53BB check \u4E00\u904D\u7EC4\u4EF6\u7684",paraId:3,tocIndex:0},{value:"props",paraId:3,tocIndex:0},{value:"\u662F\u5426\u53D8\u5316\uFF0C",paraId:3,tocIndex:0},{value:"React",paraId:3,tocIndex:0},{value:"\u5C06\u4F7F\u7528",paraId:3,tocIndex:0},{value:"Object.is",paraId:3,tocIndex:0},{value:"\uFF08\u6D45\u6BD4\u8F83\uFF09\u6BD4\u8F83\u300C\u6BCF\u4E2A prop\u300D\u3002\u5982\u679C\u5B83\u4EEC\u6CA1\u6709\u53D1\u751F\u53D8\u5316\uFF0C\u5C31\u53EF\u4EE5\u8DF3\u8FC7\u91CD\u65B0\u6E32\u67D3\u3002",paraId:3,tocIndex:0},{value:"\u51FD\u6570",paraId:4,tocIndex:0},{value:"\u3001",paraId:4,tocIndex:0},{value:"\u5BF9\u8C61",paraId:4,tocIndex:0},{value:"\u548C",paraId:4,tocIndex:0},{value:"\u6570\u7EC4",paraId:4,tocIndex:0},{value:"\u7B49\u975E\u57FA\u672C\u6570\u636E\u7C7B\u578B\uFF0C\u5B83\u4EEC\u662F\u5B58\u5728\u5806\u4E2D\u7684\uFF0C\u4E5F\u5C31\u662F\u5728\u5F15\u7528\u5B83\u4EEC\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u53EA\u662F\u5F15\u7528\u4E86\u5B83\u5B58\u5728\u5806\u4E2D\u7684\u5730\u5740\uFF08",paraId:4,tocIndex:0},{value:"\u6307\u9488",paraId:4,tocIndex:0},{value:"\uFF09\uFF0C\u56E0\u6B64\u5BF9\u4E8E prop \u4E2D\u51FA\u73B0\u4E0A\u8FF0\u60C5\u51B5\uFF0C\u5B9E\u9645\u6BD4\u8F83\u662F\u4E0D\u51C6\u786E\u7684\u3002",paraId:4,tocIndex:0},{value:"\u89E3\u51B3\u65B9\u6848\u662F\u81EA\u5B9A\u4E49\u6BD4\u8F83\u51FD\u6570\uFF0C\u901A\u8FC7 ",paraId:5,tocIndex:0},{value:"React.memo",paraId:5,tocIndex:0},{value:" \u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4F20\u5165\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u66F4\u590D\u6742\u7684\u6BD4\u8F83\u903B\u8F91\u3002",paraId:5,tocIndex:0},{value:`import React from 'react';

const MyComponent = React.memo( (props) => { /* \u7EC4\u4EF6\u903B\u8F91 */ }, (prevProps, nextProps) => { // \u81EA\u5B9A\u4E49\u6BD4\u8F83\u903B\u8F91 return prevProps.someProp === nextProps.someProp; } );

export default MyComponent;
`,paraId:6,tocIndex:0},{value:"\u4F46\u662F\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF1A \u5BF9\u4E8E\u590D\u6742\u7684\u6BD4\u8F83\u903B\u8F91\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u989D\u5916\u7684\u6027\u80FD\u5F00\u9500\uFF0C\u7279\u522B\u662F\u5728\u9891\u7E41\u66F4\u65B0\u7684\u7EC4\u4EF6\u4E2D\u3002",paraId:7,tocIndex:0},{value:"\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u53EF\u4EE5\u77E5\u9053\u5728\u5927\u578B\u7EC4\u4EF6\u6811\u4E2D\uFF0C\u67D0\u4E9B\u5B50\u7EC4\u4EF6\u4E0D\u9700\u8981\u6BCF\u6B21\u7236\u7EC4\u4EF6\u6E32\u67D3\u7684\u65F6\u5019\u90FD\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u65F6\u5019\u662F\u4F7F\u7528 React.memo \u7684\u65F6\u673A\uFF1A",paraId:8,tocIndex:0}]}}]);
