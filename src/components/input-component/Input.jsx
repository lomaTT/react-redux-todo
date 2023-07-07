import * as React from 'react';
import {useState} from "react";
import {createTask} from "../../functions/functions";

export const Input = ({dispatch, addUser, data, isEditting, deleteAllCompleted}) => {
  const handleOnChange = (e) => {
    setTask(e.target.value);
  }

  const handleDeleteCompleted = () => {
    dispatch(deleteAllCompleted());
  }


  const [task, setTask] = useState("");
  // console.log(task);
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="max-w-lg w-3/4">
        <input
          type="text"
          placeholder="Write your task here.."
          className="w-full h-6 pl-2 border-2 rounded-2xl h-10"
          onChange={handleOnChange}
          value={task}
        />

        <div className="flex justify-center">

          <button className="button-create" onClick={() => createTask(task, dispatch, addUser, data)}>
            {isEditting ? "Edit" : "Create"} task
              </button>
          <button className="button-delete" onClick={handleDeleteCompleted}>Delete all completed tasks</button>
        </div>
      </div>
    </div>
  );
};