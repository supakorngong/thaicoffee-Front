import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().required().trim().messages({ "string.empty": "firstName is required" }),
  lastName: Joi.string().required().trim().messages({ "string.empty": "lastName is required" }),
  email: Joi.string().email({ tlds: false }).messages({ "string.empty": "email is required", "string.email": "invalid email form" }),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .messages({ "string.empty": "password is required", "string.pattern.base": "password must be at least 6 characters and contain only alphabet and number" }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({ "string.empty": "confirmPassword is required", "any.only": "not matched with password" }),
  address: Joi.string().required().trim().messages({ "string.empty": "address is required" }),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      // console.log(el); //ดูtype
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    console.dir(error);
    return result;
  }
};

export default validateRegister;
