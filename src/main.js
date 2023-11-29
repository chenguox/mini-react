import React from "../lib/index.js";

function App() {
  return React.createElement(
    "div",
    { id: "foo" },
    React.createElement("a", null, "bar"),
    React.createElement("b")
  );
}

const content = App()
console.log('first')
// console.log(JSON.stringify(content))
console.log(content)
