import React, { useState } from "react";
import Container from "../components/Container";
import RegisterForm from "../components/RegisterForm";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
export default function Register() {
  const [name, setName] = useState("Akib");
  const [email, setEmail] = useState("akib@gmail.com");
  const [password, setPassword] = useState("111qqq");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const regData = { name, email, password };
    try {
      const res = await axios.post(
        "http://localhost:8000/api/register",
        regData
      );
      console.log(res);
      toast.success("Success, Please Login...");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <section>
      <Container>
        <h1 className="text-4xl text-purple-500 my-20 text-center">
          Register Page
        </h1>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
