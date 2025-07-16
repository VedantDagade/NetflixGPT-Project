import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";
import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValideData from "../utils/validate";
import { useNavigate } from "react-router-dom";


const Login = () => {
  //by default true therefore show sign in if toogle then sign up
  const [isSignInForm, setIsSignInForm] = useState(true);

  const navigate = useNavigate();

  //Form Validations
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    //validate the form data
    //Disable name validation on "Sign In" and enable when sign up.

    const message = checkValideData(
      name.current?.value || "", // will be "" in Sign In
      email.current.value,
      password.current.value,
      isSignInForm // ✅ Always pass this!
    );

    setErrorMessage(message);

    if (message) return;



    //sign in and sign up logic
    //when message === null then new user is created.

    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
          navigate("/")
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
          navigate("/")
        });
    }
  };

  //toggle Feature
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen text-white">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
          alt="Background"
          className="w-full h-full object-cover bg-gradient-to-b from-black"
        />
      </div>

      {/* Login Form with Sign Up Toogle Feature*/}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/3 max-w-md p-6 sm:p-8 bg-black opacity-85 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 sm:p-4 mb-4 w-full bg-gray-900 text-white border border-gray-600 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 sm:p-4 mb-4 w-full bg-gray-900 text-white border border-gray-600 rounded"
          autoComplete="email" //Helps browser remember login info correctly.
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 sm:p-4 mb-4 w-full bg-gray-900 text-white border border-gray-600 rounded"
          autoComplete="password"
        />

        <p className="text-red-500 font-bold text-sm sm:text-base py-2">
          {errorMessage}
        </p>

        <button
          className="w-full bg-red-700 py-3 sm:py-4 font-semibold rounded hover:bg-red-800 transition"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 hover:font-bold cursor-pointer text-sm sm:text-base"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New To Netflix ? Sign Up Now"
            : "Already Registered ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
