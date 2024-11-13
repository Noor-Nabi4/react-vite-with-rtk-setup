// src/pages/Login.js

import AuthForm from "../features/auth/AuthForm";

const Login = () => (
  <div>
    <h2>Login</h2>
    <AuthForm isRegister={false} />
  </div>
);

export default Login;
