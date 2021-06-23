import React, { useState } from "react";
import Container from "../components/Container";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";
export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regData = { name, email, password };
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register",
        regData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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
