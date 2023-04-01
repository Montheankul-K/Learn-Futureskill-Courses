// ชื่อ Component มันขึ้นต้นด้วย Uppercase
// ถ้าเป็น version เก่าจะต้อง import React from "react"
import React from "react";
import "./StudentItem.css";
import "./StudentTags.css";
// เขียนแบบ function component
function StudentItem(props) {
  //รับ props
  /*
      --- comment ---
    const isFlag = true
    const message = "Practice React"
    const message1 = "Hello world"
    const message2 = "Bye world"
    let isShow = true
    let welcomeMessage = "Welcome to React"
    let arr = [Hello, World]
    --- comment ---
  let name = "kittamet";
  let surname = "Montheankul";
  let age = 23;
    ---------------
    */

  // รับค่าจาก props มาใส่ตัวแปร
  const name = props.name;
  const surname = props.surname;
  const age = props.age;
  const year = new Date().getFullYear() - props.age; // get current date

  let retired;
  if (age > 60) {
    retired = true;
  } else {
    retired = false;
  }
  // เขียนแบบนี้ได้ let retired = age > 60;

  let classYear;
  if (age % 4 === 0) {
    classYear = "Blue";
  } else if (age % 4 === 1) {
    classYear = "Red";
  } else if (age % 4 === 2) {
    classYear = "Green";
  } else {
    classYear = "LightBlue";
  }

  return (
    // {message} เป็น expression นำค่าจาก message มาแสดงใน div
    <div className="StudentItem">
      {/*
      --- comment ---
            <div>
                <p>{message}</p>
                <p>{isFlag? message1 : message2}</p>
                <p>{isShow && welcomeMessage}</p>
                <p>{arr.length > 0 && arr}</p>
                <p>{5 + 5}</p>
                <p>{message.toUpperCase()}</p>
            </div>
            // && มักใช้กับตัวแปรที่อาจมีค่าว่างได้
      ---------------
      */}
      <div>Name : {name}</div>
      <div>Surname : {surname}</div>
      <div>Age : {age}</div>
      {/* สามารถนำด้านล่างไปสร้างเป็นอีก component ได้ */}
      {/*<StudentTag  tagAge={age}*/}
      <div className="AgeGroup">
        <div className={"Tag" + classYear}>{year}</div>
        <div className={retired ? "Tag Working" : "Tag Working"}>
          {/* ใช้ ternary operator ในการเลือกใช้ property */}
          {retired.toString()}
        </div>
      </div>
      {/* true แสดงไม่ได้จึงต้องแปลงเป็น string */}
    </div>
  );
}

// เขียนเป็นแบบ class component
/*class StudentItem extends React.Component {
  render() {
    let name = "kittamet";
    let surname = "Montheankul";
    let age = 23;

    return (
      <div className="StudentItem">
        <div>{name}</div>
        <div>{surname}</div>
        <div>{age}</div>
      </div>
    );
  }
}*/
// ตอนนี้ state สามารถใช้ใน class component ได้ แต่ก่อนสามารถใช้ได้ในแค่ class component
export default StudentItem; //export เพื่อนำ component ไปใช้ในไฟล์อื่น
