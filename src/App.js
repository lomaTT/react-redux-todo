import {Input} from "./components/input-component/Input";
import {Tasks} from "./components/tasks-component/Tasks";
import {useSelector, useDispatch} from "react-redux";
import {addUser, deleteUser, editTask, completeTask, deleteAllCompleted} from "./features/Users";
import {useState} from "react";


function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.users.value)
  const [isEditting, setIsEditting] = useState(false);
  const [task, setTask] = useState("");
  const [edittedTask, setEdittedTask] = useState({});

  return (
    <div className="App">
      <Input
        dispatch={dispatch}
        addUser={addUser}
        editTask={editTask}
        data={tasks}
        isEditting={isEditting}
        setIsEditting={setIsEditting}
        deleteAllCompleted={deleteAllCompleted}
        task={task}
        setTask={setTask}
        edittedTask={edittedTask}
        setIsEditting={setIsEditting}
      />

      <Tasks
        dispatch={dispatch}
        data={tasks}
        deleteUser={deleteUser}
        setIsEditting={setIsEditting}
        completeTask={completeTask}
        setTask={setTask}
        setEdittedTask={setEdittedTask}
      />

    </div>
  );
}

export default App;
