import React from 'react'
import './css/Home.css'
import { useState } from 'react';
import { useEffect } from 'react'


const Home = () => {
const[nombre,setNombre]=useState("")
const onSubmit=(e)=>{
e.preventDefault()
setNombre( e.target.user.value);
e.target.user.value="";
};

return (
    <div className='contenedor-pro'>
    <form className='formula' onSubmit={onSubmit}>
    <input className='nombre' type="text" placeholder='Introduzca su nombre' name='user'  />
    <button className='boton'>Enviar</button>
    </form>
    <h4 className='texto'>Bienvenido {nombre} </h4>
    </div>
)
}

export default Home