import { useForm } from "react-hook-form";
import { useLoginMutation, useRegisterMutation } from "../../api/authApi";
import { useDispatch } from "react-redux";

const AuthForm = ({ isRegister }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [registerUser] = useRegisterMutation();

  const onSubmit = async (data) => {
    try {
      const result = isRegister ? await registerUser(data) : await login(data);
      
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Email" {...register("email")} required />
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        required
      />
      {isRegister && (
        <input type="text" placeholder="Name" {...register("name")} required />
      )}
      <button type="submit">{isRegister ? "Register" : "Login"}</button>
    </form>
  );
};

export default AuthForm;
