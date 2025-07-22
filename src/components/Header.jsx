
import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; // your auth instance
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { toggleGptSearchView } from "@/utils/gptSlice";
import { changeLanguage } from "@/utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearch = () => {
    //Toggle the GPT search component visibility or functionality

    dispatch(toggleGptSearchView());
  };

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
  }, [dispatch, navigate]);

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

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full z-10 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between">
      <img
        className="w-28 sm:w-36 md:w-44 mx-auto md:mx-0"
        src={Logo}
        alt="logo"
      />

      {user && (
        <div className="flex p-2 mt-3">
          {showGptSearch && (
            <select
              className="bg-gradient-to-r from-purple-600 to-red-700 text-white rounded-lg  p-2 mx-3 m-2 border-none"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="bg-gray-800"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <Button
            className="py-2 px-4 mx-4 my-2 text-white bg-gradient-to-r from-blue-600 to-purple-800"
            variant="secondary"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </Button>
          <img
            className="w-12 h-12 rounded-sm"
            alt="usericon"
            src={USER_AVATAR}
          />
          <button
            className="font-semibold text-white hover:text-red-500 ml-3"
            onClick={handleSignOut}
          >
            <LogOut />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;