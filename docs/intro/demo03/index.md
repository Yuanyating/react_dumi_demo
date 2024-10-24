---
nav:
  title: 问题
  path: /intro
  order: 2
---

# ✨useRef 多样性

- 访问 DOM 元素  
  React 强调声明式编程，减少直接操作 DOM 的情况。然而，有时我们仍然需要直接与 DOM 交互，或者访问某个组件的具体实例。当我们需要直接与 DOM 元素进行交互（例如，手动获取焦点或测量元素尺寸）时，可以使用 useRef。

  <code src="./Code1.tsx">访问 DOM 元素 </code>


- 持久化变量  
  `useRef` 可以用来存储不需要重新渲染的值，这些值在组件重新渲染时不会改变。这和 useState 不同，useRef 改变不会引发组件重新渲染。示例：定时器

  <code src="./Code2.tsx">持久化变量</code>

- 闭包陷阱  
  在异步函数中（如 setTimeout），由于闭包的特性，可能会捕获到旧的状态值。useRef 可以帮助持久化最新的值，以避免捕获到旧的状态。

  <code src="./Code3.tsx">闭包陷阱</code>
