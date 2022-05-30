import React from "react";
import { Link } from 'react-router-dom';

function Register() {

  return (
    <section className="login">
      <h2 className="login__title">Регистрация</h2>
      <form className="login__input-form">
        <input className="login__input-text" placeholder="Email"></input>
        <input className="login__input-text" placeholder="Пароль"></input>
        <button className="login__button">Зарегистрироваться</button>
      </form>
      <p className="login__text">Уже зарегистрированы? <Link className="login__link" to="/sign-in">Войти</Link></p>
    </section>
  )
}

export default Register;

