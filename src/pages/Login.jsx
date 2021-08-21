import React, { useContext } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const login = evt => {
    evt.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Страница входа</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин"/>
        <MyInput type="password" placeholder="Введите пароль"/>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;