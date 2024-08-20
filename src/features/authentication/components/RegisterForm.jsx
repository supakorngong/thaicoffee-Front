import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import authApi from "../../../api/Auth";
import validateRegister from "../../../validator/registerValidator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const initialInput = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  };
  const initialInputError = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
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
      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInput });

      await authApi.register(input);
      navigate("/");
    } catch (err) {
      toast.err(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex justify-center w-full ">
      <div className="w-full flex-col items-center justify-center p-10">
        <Input type="text" placeholder="enter your firstname" name="firstName" value={input.firstName} onChange={handleChange} error={inputError.firstName} />

        <Input type="text" placeholder="enter your lastname" name="lastName" value={input.lastName} onChange={handleChange} error={inputError.lastName} />

        <Input type="text" placeholder="enter your password" name="password" value={input.password} onChange={handleChange} error={inputError.password} />

        <Input type="text" placeholder="enter your confirmPassword" name="confirmPassword" value={input.confirmPassword} onChange={handleChange} error={inputError.confirmPassword} />

        <Input type="text" placeholder="enter your email" name="email" value={input.email} onChange={handleChange} error={inputError.email} />

        <Input type="text" placeholder="enter your address" name="address" value={input.address} onChange={handleChange} error={inputError.address} />

        <Button display="block mx-auto" width="20">
          register
        </Button>
      </div>
    </form>
  );
}
