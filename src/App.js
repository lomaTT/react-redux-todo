import {Input} from "./components/input-component/Input";
import {Tasks} from "./components/tasks-component/Tasks";
import {UsersData} from "./FakeData";

function App() {
  return (
    <div className="App">
      <Input />
      <Tasks data={UsersData} />
    </div>
  );
}

export default App;
