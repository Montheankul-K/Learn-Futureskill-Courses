import React, { useState } from "react";
import "./NewTodoTask.css";
function NewTodoTask(props) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const clickHandler = () => {
    const newTodo = {
      task: task,
      dueDate: date,
    };
    props.addNewTodo(newTodo);
    setTask("");
    setDate("");
  };
  return (
    <div>
      <div className="add-container">
        <div className="input-container">
          <div>
            <label>Task</label>
            <input
              value={task}
              onChange={(event) => setTask(event.target.value)}
              type="text"
            />
          </div>
          <div>
            <label>Due date</label>
            <input
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="date"
            />
          </div>
        </div>
        <div>
          <button onClick={clickHandler} className="add-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewTodoTask;
