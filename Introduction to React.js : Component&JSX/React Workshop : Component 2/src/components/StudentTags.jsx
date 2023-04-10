import React from "react";
import "./StudentTags.css";
import "./StudentIiems.css";

function StudentTags(props) {
  const year = new Date().getFullYear() - props.age;
  const age = props.age;
  let retired = age > 60;

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
    <div className="AgeGroup">
      <div className={"Tag" + classYear}>{year}</div>
      <div className={retired ? "Tag Working" : "Tag Working"}>
        {retired.toString()}
      </div>
    </div>
  );
}
export default StudentTags;
