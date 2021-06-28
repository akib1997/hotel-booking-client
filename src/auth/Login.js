import React, { useState } from "react";
import Container from "../components/Container";
import LoginFrom from "../components/LoginForm";
import { toast } from "react-toastify";
import { login } from "../action/auth";
import { useDispatch } from "react-redux";

export default function LoginForm({ history }) {
  const [email, setEmail] = useState("akib@gmail.com");
  const [password, setPassword] = useState("111qqq");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data ===>", { email, password });
    try {
      const res = await login({ email, password });

      if (res.data) {
        // console.log(
        //   "Login Response Data, Store in REDUX and Browser",
        //   res.data
        // );

        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // Store in REDUX
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        history.push("/dashboard");
      }

      toast.success("Success...");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  console.log();
  return (
    <section>
      <Container>
        <h1 className="text-4xl text-purple-500 my-20 text-center">
          Login Page
        </h1>

        <LoginFrom
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </Container>
    </section>
  );
}
