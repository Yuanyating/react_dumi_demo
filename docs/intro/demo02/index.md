---
nav:
  title: 问题
  path: /intro
  order: 1

demo:
  cols: 2
---
# ✨useLayoutEffect

## useLayoutEffect 使用

> useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

使用场景：

- 需要同步读取或更改 DOM：例如，你需要读取元素的大小或位置并在渲染前进行调整。
- 防止闪烁：在某些情况下，异步的 useEffect 可能会导致可见的布局跳动或闪烁。例如，动画的启动或某些可见的快速 DOM 更改。

<code src="./Code1.tsx">使用useEffect</code>
<code src="./Code2.tsx">使用useLayoutEffect</code>



注意事项：

- 避免过度使用 useLayoutEffect，因为它是同步的，可能会影响应用的性能。只有当你确实需要同步的 DOM 操作时才使用它。


## useLayoutEffect 原理
