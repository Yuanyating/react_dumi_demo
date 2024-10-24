---
nav:
  title: 问题
  path: /intro
  order: 4
---

# 💓ErrorBoundary

> React.Component: Catching rendering errors with an error boundary

换句话说：ErrorBoundary 是 React fiber 树的声明式 try…catch

如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。

```yml
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```

React的错误机制自始至终是基于类组件的，特定的声明周期钩子：
  - getDerivedStateFromError
  - componentDidCatch

> 函数式组件中目前还没有与 static getDerivedStateFromError 直接等同的东西。如果你想避免创建类式组件，请像上面那样编写一个 ErrorBoundary 组件，并在整个应用程序中使用它。或者使用 react-error-boundary 包来执行此操作。

RIE：https://jser.pro/ddir/rie?reactVersion=18.3.1&snippetKey=ltglm2ylb7m8p6mb2c
