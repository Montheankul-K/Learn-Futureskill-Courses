import React from "react";
import "./App.css";
import StudentLists from "./components/StudentLists";

function App() {
  const studentList = [
    { name: "Tom", surname: "Cruise", age: 29 },
    { name: "Tom", surname: "Holland", age: 65 },
    { name: "Thomas", surname: "Adison", age: 68 },
    { name: "Willy", surname: "Allen", age: 35 },
  ];

  return (
    <div className="App">
      <h2>This is React Application</h2>
      <p>Let's get started!</p>
      <StudentLists list={studentList} />
    </div>
  );
}

export default App;
