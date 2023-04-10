import React from "react";

function StudentExample() {
  return (
    <div>
      {/*StudentExample = {props.children}*/}
      StudentExample ={" "}
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {
          style: { color: "green", fontSize: "30px" },
        })
      )}
    </div>
    // เอา props.children มา map
  );
}
export default StudentExample;
