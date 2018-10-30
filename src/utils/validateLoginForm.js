import validator from 'validator';

const loginValidation = (userDetails) => {
  const errors = {};
  let formIsValid = true;

  // Email
  if (!validator.isEmail(userDetails.email)) {
    formIsValid = false;
    errors.email = 'Email is not valid';
  }

  // password
  if (userDetails.password.trim().length < +true) {
    formIsValid = false;
    errors.password = 'Password Cannot be empty';
  }

  const validatedResult = { formIsValid, errors };
  return validatedResult;
};

export default loginValidation;
