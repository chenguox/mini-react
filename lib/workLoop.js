/**
 * 
 * @param {*} deadline 浏览器回调会传递进来
 */
export default function workLoop(deadline) {
  let shouldYeild = false

  // 有工作单元需要执行，且浏览器空闲
  while(nextUnitOfWork && !shouldYeild) {
    // 调用 performUnitOfWork 函数，执行并返回下一个工作单元
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
    // 执行完一个工作单元就判断是否需要让出主线程控制权 
  }
}

// 让浏览器在空闲的时候调用 workLoop
requestIdleCallback(workLoop)