import {handleDeleteTask, handleMarkTask} from "../../functions/functions";

export const Tasks = (
  {
    data, dispatch, deleteUser,
    setIsEditting,
    completeTask, setTask,
    setEdittedTask
  }) => {
  const handleEditTask = (task) => {
    setIsEditting(true);
    setTask(task.name);
    setEdittedTask(task);
  }
  return (
    <div className="m-5">
      <div className="w-full flex items-center justify-around flex-col">
        {data.map((item) =>
          <div
            key={item.id}
            className="w-8/12
              items-center
              flex
              px-1
              my-1
              bg-fuchsia-100
              border-2
              rounded-xl
              border-amber-500"
          >

            <div className={
              item.completed ?
                "grow pl-2 cursor-vertical-text line-through" :
                "grow pl-2 cursor-vertical-text"
            }
                 onClick={() => handleMarkTask(dispatch, completeTask, item)}>{item.name}</div>
            <button onClick={() => handleEditTask(item)}>
              <img
                src={`${process.env.PUBLIC_URL}/icons/pencil.png`} alt="close"
                className="w-5 grow-0"
              />
            </button>
            <button onClick={() => handleDeleteTask(item, dispatch, deleteUser)}>
              <img
                src={`${process.env.PUBLIC_URL}/icons/close.png`} alt="close"
                className="w-5 grow-0"
              />
            </button>
          </div>)}
      </div>
    </div>
  );
}