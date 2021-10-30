import React, {useState} from 'react';
import Login from '../components/login';

const LoginContainer = props => {
  const [isLogin, setIsLogin] = useState(false);
  const [usuario, setUsuario] = useState('');

  const login = () => {
    console.log('Login', 'Se ejecuto');
    setIsLogin(!isLogin);
    props.changeView(isLogin);
  };

  const textUser = text => {
    setUsuario(text);
    console.log('Usuario', text);
  };

  return <Login login={login} changeText={textUser} usuario={usuario} />;
};

export default LoginContainer;
