import React from 'react'

const checkValideData = (name , email , password, isSignInForm) => {


  const isNameValid = isSignInForm || /^[a-zA-Z ]{2,30}$/.test(name); // only letters and spaces, 2 to 30 characters. When isSignInForm === false, that means you're in Sign Up mode, and then=> Name becomes required.
  
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid) return "Name is not valid. Use only letters and spaces. (2-30 char)"

  if (!isEmailValid) return "Email ID is not Valid.";

  if (!isPasswordValid) return "Password is not Valid.";

  return null; //if get null then No errors.
}

export default checkValideData;