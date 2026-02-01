import Joi from "joi";

const LoginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).messages({ "string.empty": "Email is required", "string.email": "invalid Email form" }),
  password: Joi.string().required().messages({ "string.empty": "Password is required" }),
});

const validateLogin = (input) => {
  const { error } = LoginSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.dir(error);
    return result;
  }
};
export default validateLogin;
