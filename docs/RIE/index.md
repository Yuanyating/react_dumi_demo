---
nav:
  title: RIE
  path: /rie
  order: 1
---

## React Internals Explorer

<a target="_blank" href="https://jser.pro/ddir/rie?reactVersion=18.3.1&snippetKey=hq8jm2ylzb9u8eh468">体验 RIE</a>

> React Internals Explorer - easily see how React works

在传统的渲染模型中，React 在进行组件更新时会阻塞主线程，直到完成所有的渲染。这意味着如果某个更新耗时较长，用户可能会感受到界面的卡顿和不流畅。

Fiber 是 React 16 之后提出的架构，优势主要体现在以下三部分：

- 可中断渲染
- 优先级调度（Lane）
- 双缓存机制（workInProgress tree, current tree)

### 可中断渲染

由于长时间的计算任务可能会占用线程导致页面卡顿的问题，Fiber 允许在长时间的渲染过程中暂停任务，以处理更高优先级的更新 React 推出了时间切片的技术。

> 将渲染过程拆分为多个小任务，每个任务可以在执行过程中检查是否有更高优先级的任务需要处理

### 优先级调度

而 Scheduler 调度器实现了一套基于 Lane 模型的优先级算法，Lane 是为了标记更新的优先级，我们也可以说标记一项工作的优先级。

![lane优先级](./lane.png 'lane优先级')

1. **SyncLane (同步优先级)**

   描述：表示最高优先级的更新，立即执行，不会被打断。适用于需要快速响应用户交互的场景。  
   使用场景：例如，用户的点击事件、输入变化等。由于是同步的，React 会在所有其他更新之前处理这些任务。

2. **DefaultLane (默认优先级)**

   描述：用于处理普通优先级的更新，优先级低于同步优先级，但仍然重要。  
   使用场景：一般的状态更新、数据加载等，这类更新会在同步更新之后进行。

lanes：表示当前 Fiber 节点的更新优先级集合，指示需要处理的更新。

childLanes: 表示与当前 Fiber 节点的子节点相关的更新优先级集合，用于管理和调度子组件的更新。

<!-- ![更新源码](./pic2.png '更新源码') -->

### 双缓存机制

> Fiber 架构的工作原理类似于显卡的工作原理。绘制的最终产物是一张图片，这张图片被发送给显卡后即可显示在屏幕上。

Fiber 架构中同时存在两棵 Fiber Tree，一棵是真实 UI 对应的 Fiber Tree，可理解为前缓存区。另一棵正在内存中构建的 Fiber Tree，可理解为后缓存区。确保页面不会在渲染过程中显示不完整的内容。

`fiberRootNode`负责管理 Current Fiber Tree 和 Wip Fiber tree 之间的切换。

![双缓存机制](./pic1.png '双缓存机制')
