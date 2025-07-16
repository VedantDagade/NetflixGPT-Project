import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; // your auth instance
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //it listens to Firebase to check if someone is logged in.
        const { uid, email, displayName, photoURL } = user; //Hey Redux, please addUser this data

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //If no one is logged in
        dispatch(removeUser()); //Hey Redux, removeUser
        navigate("/login");
      }
    });

    return () => unsubscribe(); // Cleanup
  }, [dispatch , navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
      })
      .catch((error) => {
        // An error happened
        navigate("/error");
        console.error("Error during sign out:", error);
      });
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-28 sm:w-36 md:w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />

      {user && (
        <div className="flex">
          <img className="w-12 h-12" alt="usericon" src={user.photoURL} />
          <button
            className="font-bold text-white hover:text-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
