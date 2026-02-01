import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({ "string.empty": "First Name is required" }),
  lastName: Joi.string().required().trim().messages({ "string.empty": "Last Name is required" }),
  email: Joi.string().email({ tlds: false }).messages({ "string.empty": "Email is required", "string.email": "Invalid email form" }),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .messages({ "string.empty": "Password is required", "string.pattern.base": "Password must be at least 6 characters and contain only alphabet and number" }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({ "string.empty": "Confirm Password is required", "any.only": "Not matched with password" }),
  address: Joi.string().required().trim().messages({ "string.empty": "Address is required" }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.dir(error);
    return result;
  }
};

export default validateRegister;
