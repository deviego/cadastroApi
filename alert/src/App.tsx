import { useEffect, useState } from "react";
import "./App.css";
import api from "./api";
import axios from "axios";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();

  function getUser() {
    api
      .get("/add")
      .then((res) => {
        console.log(res.data);
      })
      .catch((Error) => console.error(Error));
  }

  getUser();

  const Form = async (data:any) => {
    api
      .post("/test", data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <main className="main">
      <form
        className="form"
        method="post"
        id="form"
        onSubmit={handleSubmit(Form)}
      >
        <h1>Cadastro de funcionário</h1>
        <div className="containerFrom">
          <p>
            {" "}
            <input
              type="text"
              {...register("name")}
              id="name"
              placeholder="Nome completo"
            />
          </p>
          <p>
            {" "}
            <input
              type="email"
              {...register("email")}
              id="email"
              placeholder="email"
            />
          </p>
          <p>data de nascimeto:</p>
          <p>
            <input
              type="text"
              {...register("date")}
              id="barthday"
              name="birthday"
            />
          </p>
          <p>
            <input type="submit" value="Enviar" className="button" />{" "}
          </p>
        </div>
      </form>
    </main>
  );
}

export default App;
