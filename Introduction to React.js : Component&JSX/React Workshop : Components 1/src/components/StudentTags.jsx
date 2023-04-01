import React from "react";
import "./StudentTags.css";
import "./StudentIiem.css";

function StudentTag(props) {
  const year = new Date().getFullYear() - props.tagAge;
  const age = props.tagAge;
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
        {/* ใช้ ternary operator ในการเลือกใช้ property */}
        {retired.toString()}
      </div>
    </div>
  );
}
export default StudentTag;
