import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../slice/userSlice";

export default function Todo({ user }: { user: any }) {
  let dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleDelete}> delete</button>
      <button onClick={handleDelete}> Edit</button>
    </div>
  );
}
