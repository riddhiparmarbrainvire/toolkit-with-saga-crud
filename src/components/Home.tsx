import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { getUserData } from "../slice/userSlice";
// import { Button } from "@mui/material";
import Add from "./Add";
import Todo from "./Todo";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.userData.users);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <>
      <Add />
      <ul>
        {users?.map((u: any) => (
          <li key={u.id}>
            <Todo user={u}></Todo>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
