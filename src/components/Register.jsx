import React from "react";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../api/authApi";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await registerUser(data).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("username", { required: true })}
        placeholder="Username"
      />
      {errors.username && <span>Username is required</span>}
      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}
      <input
        {...register("password", { required: true })}
        placeholder="Password"
        type="password"
      />
      {errors.password && <span>Password is required</span>}
      <button type="submit" disabled={isLoading}>
        Register
      </button>
    </form>
  );
}

export default Register;
