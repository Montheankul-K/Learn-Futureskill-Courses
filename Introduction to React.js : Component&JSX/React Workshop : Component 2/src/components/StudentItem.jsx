import React from "react";
import "./StudentItem.css";
import "./StudentTags.css";

function StudentItem(props) {
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
    <div className="StudentItem">
      <div>Name : {name}</div>
      <div>Surname : {surname}</div>
      <div>Age : {age}</div>
      <div className="AgeGroup">
        <div className={"Tag" + classYear}>{year}</div>
        <div className={retired ? "Tag Working" : "Tag Working"}>
          {retired.toString()}
        </div>
      </div>
    </div>
  );
}
export default StudentItem; 
