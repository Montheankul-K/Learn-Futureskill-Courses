import React from "react";
import "./StudentItems.css";
import "./StudentTags.css";
import StudentTags from "./StudentTags";

function StudentItems(props) {
  const name = props.name;
  const surname = props.surname;
  const age = props.age;
  return (
    <div className="StudentItem">
      <div>{name}</div>
      <div>{surname}</div>
      <div>{age}</div>
      <StudentTags age={age} />
    </div>
  );
}
export default StudentItems;
