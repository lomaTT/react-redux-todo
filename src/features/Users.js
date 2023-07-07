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
      // console.log(JSON.stringify(state.value.));
    },

    completeTask: (state, action) => {
      state.value.map((item, index) => {
        if (item.id === action.payload.id) item.completed = true;
      });
      // console.log(JSON.stringify(state.value));
    }
  }
})

export const {addUser, deleteUser, editTask, completeTask} = userSlice.actions;
export default userSlice.reducer;