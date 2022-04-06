import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  signInUser,
  userSelector,
  clearState,
} from "../store/slices/userSlice";

import { TextField } from "@mui/material";

const Login = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const user = { email, password };

    dispatch(signInUser(user));
  };

  return (
    <div className="card">
      <div className="cardHeader">Login</div>
      <div className="cardBody">
        <div className="inputGroup">
          <TextField
            id="email"
            fullWidth
            label="Email"
            variant="outlined"
            size="small"
            placeholder="abc@domain.com"
            inputRef={emailRef}
            type="email"
          />
        </div>
        <div className="inputGroup">
          <TextField
            id="password"
            placeholder="Your Password"
            fullWidth
            label="Password"
            variant="outlined"
            size="small"
            inputRef={passwordRef}
            type="password"
          />
        </div>
        <button onClick={loginUser}>Login</button>
      </div>
    </div>
  );
};

export default Login;