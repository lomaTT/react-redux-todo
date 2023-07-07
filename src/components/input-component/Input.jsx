import * as React from 'react';
import {useState} from "react";

export const Input = () => {
  const handleOnChange = (e) => {
    setTask(e.target.value);
  }

  const createNewTask = (e) => {
    e.preventDefault();
    console.log("created");
  }

  const deleteAllCompleted = (e) => {
    e.preventDefault();
    console.log("deleted")
  }

  const [task, setTask] = useState("");
  // console.log(task);
  return (
    <div className="flex justify-center items-center mt-12">
      <form action="" className="max-w-lg w-3/4">
        <input
          type="text"
          placeholder="Write your task here.."
          className="w-full h-6 pl-2 border-2 rounded-2xl h-10"
          onChange={handleOnChange}
          value={task}
        />
        <div className="flex justify-center">
          <button className="button-create" onClick={createNewTask}>Create task</button>
          <button className="button-delete" onClick={deleteAllCompleted}>Delete all completed tasks</button>
        </div>
      </form>
    </div>
  );
};