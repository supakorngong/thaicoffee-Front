import Input from "../../../components/Input";
import Button from "../../../components/Button";
import validateLogin from "../../../validator/LoginValidator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

// import authApi from "../../../api/Auth";
// import { giveAccessToken } from "../../../utils/localStorage";
export default function LoginForm() {
  const { login } = useAuth();
  const initialInput = {
    email: "",
    password: "",
  };
  const initialInputError = {
    email: "",
    password: "",
  };
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target);
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInput });
      const result = await login(input);
      console.log("result of axios", result);
      //   const result = await authApi.login(input);
      //   const token = result.data.accessToken;
      //   giveAccessToken(token);

      navigate("/");
    } catch (err) {
      console.log("gong");
      console.dir(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex justify-center w-full ">
      <div className="w-full flex-col items-center justify-center p-10">
        <Input type="text" placeholder="enter your email" name="email" value={input.email} onChange={handleChange} error={inputError.email} />

        <Input type="text" placeholder="enter your password" name="password" value={input.password} onChange={handleChange} error={inputError.password} />

        <Button display="block mx-auto" width="20">
          login
        </Button>
      </div>
    </form>
  );
}
