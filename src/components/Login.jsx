import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/authApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await login(data).unwrap();
      localStorage.setItem("token", response.token); // Store the JWT token
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}
      <input
        {...register("password", { required: true })}
        placeholder="Password"
        type="password"
      />
      {errors.password && <span>Password is required</span>}
      <button type="submit" disabled={isLoading}>
        Login
      </button>
    </form>
  );
}

export default Login;
