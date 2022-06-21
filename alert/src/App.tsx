
import { useEffect, useState } from "react";
import "./App.css";
import api from './api'
import axios from "axios";
import { useForm } from "react-hook-form";


function App() {
  const {register, handleSubmit} = useForm()


  const sendForm = data=> {
    api.post('/add', res => {
      console.log(data)
    })
  
  }
  
  return (
    <main className="main">
      
      <form className="form" method="POST" action="/form" id="form" onSubmit={handleSubmit(sendForm)}>
        <h1>Cadastro de funcionário</h1>
        <div className="containerFrom">
         <p> <input type="text" {...register('name')} id="name" placeholder="Nome completo" /></p> 
          <p> <input type="email" {...register('email')} id="email" placeholder="email"  /></p>
          <p>data de nascimeto:</p>
          <p><input type="date" {...register('date')} id="date" /></p>
         <p><input type="submit" value="Enviar" className="button" /> </p> 
        </div>
      </form>
    </main>
  );
}

export default App;
