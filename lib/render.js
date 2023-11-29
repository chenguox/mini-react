/**
 *
 * @param {*} element 要渲染的 React 元素
 * @param {*} container React 元素要挂载到哪个 DOM 上
 */
export default function render(element, container) {
  // 根据 type 创建对应的 DOM 节点, 文本节点就通过 createTextNode() 去创建
  const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  // 把除了 children 的 prop 挂载到 dom 节点上
  const isProperty = (key) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));

  // 将 dom 挂载到 container 上，也就是 root 根节点
  container.appendChild(dom);
}
