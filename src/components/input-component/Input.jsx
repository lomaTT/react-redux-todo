import * as React from 'react';
import {useState} from "react";
import {createTask} from "../../functions/functions";
import {editTask} from "../../features/Users";

export const Input = (
  {
    dispatch, addUser, data,
    isEditting, deleteAllCompleted, task,
    setTask, edittedTask, setIsEditting
  }) => {
  const handleOnChange = (e) => {
    setTask(e.target.value);
  }

  const handleDeleteCompleted = () => {
    dispatch(deleteAllCompleted());
    setIsEditting(false);
  }

  const handleEditTask = (item) => {
    dispatch(editTask({id: edittedTask.id, newTask: task }));
    setIsEditting(false);
    setTask("");
  }

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
          {isEditting ? (
            <button className="button-create" onClick={() => handleEditTask()}>
              Edit task
            </button>
          ) : (
            <button className="button-create" onClick={() => createTask(task, dispatch, addUser, data)}>
              Create task
            </button>
          )}

          <button className="button-delete" onClick={handleDeleteCompleted}>Delete all completed tasks</button>
        </div>
      </div>
    </div>
  );
};