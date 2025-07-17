import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValideData from "../utils/validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, BACKGROUND_IMAGE } from "../utils/constant";
import { Mail, Lock, User } from "lucide-react";

const Login = () => {
  // by default true therefore show sign in if toggle then sign up
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);

  //! Form Validations
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    // validate the form data
    // Disable name validation on "Sign In" and enable when sign up.
    const message = checkValideData(
      name.current?.value || "", // will be "" in Sign In
      email.current.value,
      password.current.value,
      isSignInForm // ✅ Always pass this!
    );

    setErrorMessage(message);
    if (message) return;

    //! Sign in and sign up logic
    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed up
          updateProfile(auth.currentUser, {
            displayName: name.current?.value,
            photoURL: USER_AVATAR,
          })
            .then(async () => {
              // Profile updated!
              await auth.currentUser.reload(); // ✅ Ensure fresh data
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  // Toggle Feature
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen text-white">
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="w-full h-full object-cover bg-gradient-to-b from-black"
        />
      </div>

      {/* Login Form with Sign Up Toggle Feature */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-11/12 sm:w-4/5 md:w-2/3 lg:w-1/3 max-w-md p-6 sm:p-8 bg-black opacity-85 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <div className="relative mb-4">
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="pl-10 p-3 sm:p-4 w-full bg-gray-900 text-white border border-gray-600 rounded"
            />
            <User
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              size={20}
            />
          </div>
        )}

        <div className="relative mb-4">
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="pl-10 p-3 sm:p-4 w-full bg-gray-900 text-white border border-gray-600 rounded"
            autoComplete="email" // Helps browser remember login info correctly.
          />
          <Mail
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            size={20}
          />
        </div>

        <div className="relative mb-4">
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="pl-10 p-3 sm:p-4 w-full bg-gray-900 text-white border border-gray-600 rounded"
            autoComplete="password"
          />
          <Lock
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
            size={20}
          />
        </div>

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
