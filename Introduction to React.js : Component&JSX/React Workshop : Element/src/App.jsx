import React from "react";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { style: { color: "green" } }, "Resume"),
    React.createElement("h2", null, "Kittamet Montheankul"),
    React.createElement("p", null, "My favorite color : Green"),
    React.createElement("p", null, "My height : 168 centimeters"),
    React.createElement("p", null, "My weight : 68 kilograms"),
    React.createElement("p", null, "My favorite epigram : Life long learning")
  );
}
export default App;
