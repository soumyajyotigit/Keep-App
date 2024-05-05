import React, { useEffect } from "react";
import { useState } from "react";
import { auth } from "../firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
    setSubmitted(false);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setSubmitted(false);
  };
  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password, confirmPassword]);
  //handeling the form submission
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   if(name===""||email===""||username===""||age===""||gender===""||password===""||confirmPassword===""){
  //     setError(true);
  //   }
  //   else{
  //     setSubmitted(true);
  //     setError(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created");
    } catch (err) {
      console.log("error");
    }
  };

  //showing success message
  const successMessage = () => {
    return (
      <div className="success" style={{ display: submitted ? "" : "none" }}>
        <h1>user {name} successfully registered!</h1>
      </div>
    );
  };
  //showing error message if error is true
  const errorMessage = () => {
    return (
      <div className="error" style={{ display: error ? "" : "none" }}>
        <h1>Please enter all fields</h1>
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-semibold text-center">Sign in</h1>
      <p className="font-medium text-lg text-blue-700 text-center">
        Create your account
      </p>
      <div className="overflow-y-auto mt-5 max-h-80">
        <div className="mt-5 w-96">
          <div className="messages">
            {errorMessage}
            {successMessage}
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium">Enter your name</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              onChange={handleName}
              value={name}
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Enter your email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Enter your username</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              onChange={handleUsername}
              value={username}
              type="username"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Enter your age</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              onChange={handleAge}
              value={age}
              type="text"
              placeholder="Enter your age"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Enter your gender</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              onChange={handleGender}
              value={gender}
              placeholder="Enter your gender"
              type="text"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Enter your password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent input"
              onChange={handlePassword}
              value={password}
              placeholder="Enter your password"
              type="password"
            />
          </div>
          <div>
            <label className="text-lg font-medium">Confirm your password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent input"
              onChange={handleConfirmPassword}
              value={confirmPassword}
              placeholder="Confirm your password"
              type="password"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-y-4">
        <button
          className="active:scale-[.98] active:duration-75 hover:scale-[1.03] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Signup;
