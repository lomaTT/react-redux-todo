export const Tasks = ({data}) => {
  const handleDeleteTask = (e) => {
    e.preventDefault();
    console.log("delete 1 task");
  }

  const handleEditTask = (e) => {
    e.preventDefault();
    console.log("edit 1 task");
  }

  const handleMarkTask = (e) => {
    e.preventDefault();
    console.log("mark 1 task");
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

            <div className="grow pl-2 cursor-vertical-text" onClick={handleMarkTask}>{item.name}</div>
            <button onClick={handleEditTask}>
              <img
                src="icons/close.png" alt="close"
                className="w-5 grow-0"
              />
            </button>
            <button onClick={handleDeleteTask}>
              <img
                src="icons/close.png" alt="close"
                className="w-5 grow-0"
              />
            </button>
          </div>)}
      </div>
    </div>
  );
}