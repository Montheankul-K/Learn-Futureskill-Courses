import reactLogo from "./assets/react.svg";
import "./App.css";
import StudentItem from "./components/StudentItem";
import { useState } from "react";
import NewStudentItem from "./components/NewStudentItem";
function App() {
  const studentList = [
    { name: "Tom", surname: "Cruise", age: 29 }, // studentList[0]
    { name: "Tony", surname: "Ja", age: 65 }, // studentList[1]
    { name: "Tom", surname: "Hank", age: 68 }, // studentList[2]
    { name: "Chris", surname: "Evan", age: 35 }, // studentList[3]
  ];
  //let statusText = "Available" ไม่ต้องใช้แล้วเพราะใช้ state
  const [status, setStatus] = useState("Available");
  const clickHandler = () => {
    setStatus("Busy"); // ใช้ function เพื่อเปลี่ยน state
    // ตัวแปรเปลี่ยนแต่ react ไม่ได้ render หน้า web ใหม่จึงต้องใช้ state
  }; // state จะยังไม่เปลี่ยนทันทีจนกว่าจะทำ function จบ
  const addStudentHandler = (newStudent) => {
    const newStudentItem = {
      ...newStudent, // เอา newStudent มาใส่ใน object ใหม่และสร้าง id ให้
      id: Math.random().toString(),
    };
  };
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <NewStudentItem onAddStudent={addStudentHandler} />{" "}
      {/* NewStudentItem จะสามารถเข้าถึง props ได้ */}
      <StudentItem
        name={studentList[0].name}
        surname={studentList[0].surname}
        age={studentList[0].age}
      />
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
      <h3>Status: {status}</h3>
      <button onClick={clickHandler}>Click me</button>
      {/* onClick ถ้า click ให้ทำอะไร */}
    </div>
  );
}

export default App;
