import {Input} from "./components/input-component/Input";
import {Tasks} from "./components/tasks-component/Tasks";
import {useSelector, useDispatch} from "react-redux";
import {addUser, deleteUser, editTask, completeTask} from "./features/Users";
import {useState} from "react";


function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.users.value)
  const [isEditting, setIsEditting] = useState(false);
  // console.log(isEditting);
  return (
    <div className="App">
      <Input
        dispatch={dispatch}
        addUser={addUser}
        editTask={editTask}
        data={tasks}
        isEditting={isEditting}
        setIsEditting={setIsEditting}
      />

      <Tasks
        dispatch={dispatch}
        data={tasks}
        deleteUser={deleteUser}
        isEditting={isEditting}
        setIsEditting={setIsEditting}
        completeTask={completeTask}
      />

    </div>
  );
}

export default App;
