import React from "react";
import "./App.css";
import StudentItem from "./components/Studentitem"; //import component StudentItem
import StudentExample from "./components/StudentExample";

function App() {
  const studentList = [
    { name: "Tom", surname: "Cruise", age: 29 },
    { name: "Tom", surname: "Holland", age: 65 },
    { name: "Thomas", surname: "Adison", age: 68 },
    { name: "Willy", surname: "Allen", age: 35 },
  ];

  return (
    <div className="App">
      {/*<NewStudentItem />*/}
      <StudentItem
        name={studentList[0].name}
        surname={studentList[0].surname}
        age={studentList[0].age}
      />
      {/* เป็นการ reuse component */}
      <StudentItem
        name={studentList[1].name}
        surname={studentList[1].surname}
        age={studentList[1].age}
      />
      <StudentItem
        name={studentList[2].name}
        surname={studentList[2].surname}
        age={studentList[2].age}
      />
      <StudentItem
        name={studentList[3].name}
        surname={studentList[3].surname}
        age={studentList[3].age}
      />
      <StudentExample>Hello World</StudentExample>{" "}
      {/* เข้าถึง Hello World โดยใช้ props.children */}
      <button onClick={clickHandler}>Click me</button>
    </div>
    // เอา component StudentItem มาแสดง
    // component มี 2 แบบ custom component, built-in component
  );
}

export default App;
