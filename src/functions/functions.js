export const createTask = (task, dispatch, addUser, data) => {
  console.log("created");
  if (task.length > 0) {
    dispatch(addUser({id: data[data.length - 1].id + 1, name: task, completed: false}));
  }
}

export const deleteAllCompleted = (e) => {
  e.preventDefault();
  console.log("deleted")
}

export const handleDeleteTask = (item, dispatch, deleteUser) => {
  // e.preventDefault();
  console.log("delete 1 task");
  dispatch(deleteUser({id: item.id}));
}

export const handleMarkTask = (dispatch, completeTask, item) => {
  dispatch(completeTask({id: item.id}))
}