import Input from "../../../components/Input";
import Button from "../../../components/Button";
import validateLogin from "../../../validator/LoginValidator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";

export default function LoginForm() {
  const { login, setIsLoading, isLoading } = useAuth();
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
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const error = validateLogin(input);
      if (error) {
        setIsLoading(false);
        return setInputError(error);
      }
      setInputError({ ...initialInput });
      await login(input);
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setTimeout(() => setIsLoading(false), 1000);
      toast.error(err.message);
    }
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmitForm} className="flex justify-center w-full ">
      <div className="w-full flex-col items-center justify-center p-10">
        <Input type="text" placeholder="enter your email" name="email" value={input.email} onChange={handleChange} error={inputError.email} />

        <Input type="password" placeholder="enter your password" name="password" value={input.password} onChange={handleChange} error={inputError.password} />

        <Button display="block mx-auto mt-4" width="20">
          login
        </Button>
      </div>
    </form>
  );
}
