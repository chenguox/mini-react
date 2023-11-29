export default function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...(props ? props : {}),
      children: children.map((child) => {
        // 如果 child 的类型不是 object, 就是文本节点
        if (typeof child === "object") {
          return child;
        } else {
          return {
            type: "TEXT_ELEMENT",
            props: {
              nodeValue: child,
              children: [],
            },
          };
        }
      }),
    },
  };
}