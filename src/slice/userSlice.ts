import { createSlice } from "@reduxjs/toolkit";
import { Immutable } from "immer";

export interface IGlobalState {
  isLoading: boolean;
  users: string[];
}

// Define the initial state using that type
export const initialState: Immutable<IGlobalState> = {
  isLoading: false,
  users: [],
};

export const userData = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleLoader: (state, action) => {
      state.isLoading = action.payload || false;
    },
    getUserData: (state) => {
      state.isLoading = true;
    },
    addUser: (state: any, action) => {
      state.isLoading = true;
    },
    setAddUser: (state: any, action) => {
      state.users =
        state.users?.length === 0
          ? action.payload
          : [action.payload, ...state.users];
      state.isLoading = false;
    },
    deleteUser: (state: any, action) => {
      state.users = state.users.filter(
        (u: { [key: string]: any }) => u.id !== action.payload
      );
      return state;
    },
    editUser: (state: any, action: any) => {
      console.log("edit action", action.payload);
      //id
      //input
    },
  },
});

export const {
  getUserData,
  toggleLoader,
  addUser,
  deleteUser,
  setAddUser,
  editUser,
} = userData.actions;
export default userData.reducer;
