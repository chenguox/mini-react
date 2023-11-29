# mini-react

## window.requestIdleCallback

当关注用户体验，不希望因为一些不重要的任务（如统计上报）导致用户感觉到卡顿的话，就应该考虑使用requestIdleCallback。因为requestIdleCallback回调的执行的前提条件是当前浏览器处于空闲状态。而这个API出现就是为了提高浏览器的性能，利用空闲时间来处理延迟，以保证网站或应用快速完成加载。

requestIdleCallback和懒加载的原理在于我理解是相反的，懒加载是当用户滚动到视口附近时才发送请求获得数据，这会导致页面加载会有卡顿效果，但是requestIdleCallback会利用空闲时间来处理可延迟的工作，让用户感受不到延迟。

### 语法：

requestIdleCallback(callback)

requestIdleCallback(callback，options)

### 参数：

callback：一个在事件循环空闲时即将被调用的函数的引用。函数会接收到一个名为 [`IdleDeadline`](https://developer.mozilla.org/zh-CN/docs/Web/API/IdleDeadline) 的参数，这个参数可以获取当前空闲时间以及回调是否在超时时间前已经执行的状态。

options：包括可选的配置参数。具有如下属性：

- `timeout`：如果指定了 timeout，并且有一个正值，而回调在 timeout 毫秒过后还没有被调用，那么回调任务将放入事件循环中排队，即使这样做有可能对性能产生负面影响。