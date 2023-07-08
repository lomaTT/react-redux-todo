import {createSlice} from "@reduxjs/toolkit";
import {UsersData} from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: UsersData,
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
      console.log(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id)
    },

    editTask: (state, action) => {
      // console.log(action.payload);
      state.value.map((item) => {
        if (item.id === action.payload.id) item.name = action.payload.newTask;
      });
    },

    completeTask: (state, action) => {
      state.value.map((item, index) => {
        if (item.id === action.payload.id && item.completed === true) item.completed = false;
        else if (item.id === action.payload.id && item.completed === false) item.completed = true;
      });
      // console.log(JSON.stringify(state.value));
      // console.log(JSON.stringify(state.value));
    },

    deleteAllCompleted: (state) => {
      state.value = state.value.filter((item) => item.completed !== true);
    }
  }
})

export const {addUser, deleteUser, editTask, completeTask, deleteAllCompleted} = userSlice.actions;
export default userSlice.reducer;