import React, { useState } from "react";
import Container from "../components/Container";
import RegisterForm from "../components/RegisterForm";
import { toast } from "react-toastify";
import { register } from "../action/auth";

export default function Register({ history }) {
  const [name, setName] = useState("Akib");
  const [email, setEmail] = useState("akib@gmail.com");
  const [password, setPassword] = useState("111qqq");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register({ name, email, password });
      console.log("Register Res ===>", res);
      toast.success("Success, Please Login...");
      history.push("/login");
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
          Register Page
        </h1>

        <RegisterForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </Container>
    </section>
  );
}
