## Fiber架构下的React是如何更新的

React完成一次更新分为两个阶段：`render阶段`和`commit阶段`，两个阶段的工作可分别概括为**新fiber树的构建**和**更新最终效果**的应用。

### ✨render阶段

  render阶段实际是在内存中`构建一棵新的fiber树`（称为workInProgress树），构建过程是依照现有fiber树（current树）从root开始`深度优先遍历`，再回溯到root的过程。

  这个过程中每个fiber节点都会经历两个阶段：`beginWork`和`completeWork`

  **beginWork：组件的状态计算、diff的操作以及render函数的执行。**

  **completeWork：effect链表的收集、被跳过的优先级的收集。**

  构建workInProgress树的过程中会有一个workInProgress的`指针`记录下当前构建到哪个fiber节点，这是React更新任务`可恢复`的重要原因之一。

### ✨commit阶段

  在render阶段结束后，会进入commit阶段，该阶段`不可中断`。

  依据workInProgress树中有变化的那些节点（render阶段的completeWork过程收集到的`effect链表`）,去`完成DOM操作`，将更新应用到页面上。

  除此之外，还会`异步调度useEffect`以及`同步执行useLayoutEffect`。