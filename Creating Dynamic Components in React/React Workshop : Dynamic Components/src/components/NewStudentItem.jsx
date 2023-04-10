import React from "react";
import "./NewStudentItem.css";
import { useState } from "react";

const NewStudentItem = (props) => {
  const [currentName, setCurrentName] = useState("");
  const [currentSurname, setCurrenSurname] = useState("");
  const [currentAge, setCurrentAge] = useState("");
  const nameChangeHandler = (event) => {
    // event เป็น object
    setCurrentName(event.target.value); // value ของ event จะได้ค่าเป็น string
  };
  const surnameChangeHandler = (event) => {
    setCurrenSurname(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setCurrentAge(event.target.value);
  };
  const submitHandler = (event) => {
    // submit จะมีพฤติกรรมเริ่มต้นคือเวลากดจะเกิดการ refresh ถ
    event.preventDefault(); // ทำให้ไม่เกิดการ refresh
    const newStudent = {
      name: currentName,
      surname: currentSurname,
      age: Number(currentAge),
    };
    props.onAddStudent(newStudent); // ใช้ pattern นี้ในการสื่อสารระหว่าง parent และ child component
    // newStudent จะถูกส่งไปที่ function addStudentHandler > ข้อมูลถูกส่งไปที่ parent
    setCurrentName(""); // set state ให้เป็นค่าว่างเพื่อ clear ช่อง input
    setCurrenSurname("");
    setCurrentAge("");
  };
  return (
    // ถ้าเป็น form จะใช้ onSubmit และ type = "submit" ในการ submit form
    <form onSubmit={submitHandler}>
      <div className="NewStudentContainer">
        <div className="StudentInput">
          <label>Name</label>
          <input value={currentName} onChange={nameChangeHandler} type="text" />
        </div>
        <div className="StudentInput">
          <label>Surname</label>
          <input
            value={currentSurname}
            onChange={surnameChangeHandler}
            type="text"
          />
        </div>
        <div className="StudentInput">
          <label>Age</label>
          <input
            value={currentAge}
            onChange={ageChangeHandler}
            type="number"
            min="0"
            max="100"
            step="1"
          />
        </div>
        <div className="SubmitButton">
          <button type="submit">Add Student</button>
        </div>
      </div>
    </form>
  );
};
export default NewStudentItem;
