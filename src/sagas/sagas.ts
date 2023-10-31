import { StrictEffect, all, call, put, takeLatest } from "redux-saga/effects";
import {
  addUser,
  getUserData,
  toggleLoader,
  setAddUser,
  editUser,
} from "../slice/userSlice";
import axios from "axios";

function* GetUserDataFunc(action: any): Generator<StrictEffect, void, any> {
  const users: any = yield call(() =>
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json().then((data) => {
        return data;
      })
    )
  );

  yield put(setAddUser(users));
}

export type AddUserType = {
  payload: { id: string; name: string };
};

function* AddUserFunc(action: any): Generator<StrictEffect, void, any> {
  try {
    const data = axios
      .post("https://jsonplaceholder.typicode.com/users", {
        data: action.payload,
      })
      .then((response) => {
        console.log(response);
      });

    console.log("INSIDE SAGA", action);
    yield put(setAddUser(action.payload.name));
  } catch (error: any) {
    console.log("ERROR", error);
    yield put(toggleLoader(false));
  } finally {
    yield put(toggleLoader(false));
  }
}

function* editPost(action: any): Generator<StrictEffect, void, any> {
  try {
    const editedPost = action.payload;
    yield call(
      axios.put,
      `https://jsonplaceholder.typicode.com/posts/${editedPost.id}`,
      editedPost
    );
    yield put(editUser(editedPost));
  } catch (error) {
    console.log("ERROR", error);
    yield put(toggleLoader(false));
  }
}

export default function* globalWatcher(): Generator<StrictEffect, void, any> {
  yield all([yield takeLatest(addUser.type, AddUserFunc)]);
  yield all([yield takeLatest(getUserData.type, GetUserDataFunc)]);
  yield all([yield takeLatest(editUser.type, editPost)]);
}
