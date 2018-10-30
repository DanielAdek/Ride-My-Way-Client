import validator from 'validator';

const signupValidation = (userDetails) => {
  const errors = {};
  let formIsValid = true;

  // username
  if (userDetails.username.trim().length < +true) {
    formIsValid = false;
    errors.username = 'Username Cannot be empty';
  }

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

  if (userDetails.password !== userDetails.confirmPassword) {
    formIsValid = false;
    errors.password = 'Your password does not match confirm password';
  }

  const validatedResult = { formIsValid, errors };
  return validatedResult;
};

export default signupValidation;
