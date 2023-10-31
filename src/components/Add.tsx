import React, { useEffect, useState } from "react";
import { addUser } from "../slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "@mui/material/Input";
import { Box, Button, FormControl, Grid, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// let id: number = 10;
const Add: React.FC = () => {
  // const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserId, setEditedUserId] = useState<number | null>(null);

  const users = useSelector((state: any) => state.userData.users);

  const [input, setInput] = useState<any>({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log("USER LIST UPADTED", users);
  }, [users]);

  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: Math.random(),
        name: input,
      })
    );
    setInput({
      name: "",
      email: "",
    });
    // navigate("/add-user");
  };

  return (
    <>
      <Container>
        <FormControl>
          <Box sx={{ pt: 10, pb: 10 }}>
            <h2>Add User</h2>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input
                  value={input.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Add name"
                />
              </Grid>

              <Grid item xs={6}>
                <Input
                  value={input.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Add email"
                />
              </Grid>
            </Grid>
            <Box sx={{ textAlign: "right", pt: 5 }}>
              <Button variant="contained" onClick={handleAdd}>
                Add User
              </Button>
            </Box>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Add;
