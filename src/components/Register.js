import React, { useEffect } from "react";
import { TextField } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";

import {
  signUpUser,
  userSelector,
  clearState,
} from "../store/slices/userSlice";

const Register = (props) => {
  const dispatch = useDispatch();
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const mobileNumberRef = React.createRef();

  const { isFetching, isSuccess, isError, errorMessage, email } =
    useSelector(userSelector);

  const registerUser = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const mobileNumber = mobileNumberRef.current.value;
    const user = { name, email, password, mobileNumber };

    dispatch(signUpUser(user));

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    mobileNumberRef.current.value = "";
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(email + " Registration Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearState());
    }
    if (isError) {
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <div className="card">
      <div className="cardHeader">Registration</div>
      <div className="cardBody">
        <div className="inputGroup">
          <TextField
            id="fullName"
            fullWidth
            label="Full Name"
            variant="outlined"
            size="small"
            placeholder="Your Full Name"
            inputRef={nameRef}
            type="text"
          />
        </div>
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
            id="mobileNumber"
            fullWidth
            label="Mobile Number"
            variant="outlined"
            size="small"
            placeholder="01xxxxxxxxxx"
            inputRef={mobileNumberRef}
            type="text"
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
        <button onClick={registerUser} className="formButton">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
