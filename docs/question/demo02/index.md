---
nav:
  title: 问题
  path: /intro
  order: 1

demo:
  cols: 2
---

# ✨useLayoutEffect

> useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

## 使用场景

- 需要同步读取或更改 DOM：例如，你需要读取元素的大小或位置并在渲染前进行调整。
- 防止闪烁：在某些情况下，异步的 useEffect 可能会导致可见的布局跳动或闪烁。例如，动画的启动或某些可见的快速 DOM 更改。

<code src="./Code1.tsx">使用 useEffect</code>
<code src="./Code2.tsx">使用 useLayoutEffect</code>

注意事项：

- 避免过度使用 useLayoutEffect，因为它是同步的，可能会影响应用的性能。只有当你确实需要同步的 DOM 操作时才使用它。

## 时机

**useEffect**<Badge>DefaultLane</Badge>
在所有 DOM 更新完成后、浏览器绘制之后执行。这意味着在用户看到任何变化之前，useEffect 中的代码会被延迟执行。它通常用于处理副作用，比如数据获取、订阅等。

**useLayoutEffect**<Badge>SyncLane</Badge>
在所有 DOM 更新之后、浏览器绘制之前同步执行。它适用于需要进行布局计算或直接操作 DOM 的场景，以确保在用户看到内容之前，所有的计算和更新都已经完成。

https://jser.pro/ddir/rie?reactVersion=18.3.1&snippetKey=o4tq9q2m9tzkc3gpcma
