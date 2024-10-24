---
nav:
  title: 问题
  path: /intro
  order: 7
---

# 🐼依赖项浅比较引发的问题

useEffect、useMemo 和 useCallback 的依赖项都是通过浅比较来确定是否需要重新计算或执行。这意味着只有当依赖项的引用发生变化时，React 才会认为依赖项发生了变化。

可能会产生以下两种情况：

1.对象引用不变，但是内容发生了变化

<code src="./Code1.tsx">对象引用不变，但是内容发生了变化</code>

2.对象重新创建

<code src="./Code2.tsx">对象重新创建</code>
