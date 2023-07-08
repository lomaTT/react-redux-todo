export const createTask = (task, dispatch, addUser, data) => {
  // console.log("created");
  if (task.length > 0) {
    // console.log(data[data.length - 1]?.id);
    dispatch(addUser({id: ((data[data.length - 1]?.id ?? 0) + 1), name: task, completed: false}));
  }
}

export const handleDeleteTask = (item, dispatch, deleteUser) => {
  // e.preventDefault();
  // console.log("delete 1 task");
  dispatch(deleteUser({id: item.id}));
}

export const handleMarkTask = (dispatch, completeTask, item) => {
  dispatch(completeTask({id: item.id}))
}