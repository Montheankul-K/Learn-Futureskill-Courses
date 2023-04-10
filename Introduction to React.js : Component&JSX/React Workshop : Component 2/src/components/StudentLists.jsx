import React from "react";
import StudentItems from "./StudentItems";

function StudentLists(props) {
  const list = props.list;
  return (
    <div>
      <StudentItems
        name={list[0].name}
        surname={list[0].surname}
        age={list[0].age}
      />
      <StudentItems
        name={list[1].name}
        surname={list[1].surname}
        age={list[1].age}
      />
      <StudentItems
        name={list[2].name}
        surname={list[2].surname}
        age={list[2].age}
      />
      <StudentItems
        name={list[3].name}
        surname={list[3].surname}
        age={list[3].age}
      />
    </div>
  );
}
export default StudentLists;
