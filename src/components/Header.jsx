// import React from 'react'

// const Header = () => {
//   return (
//     <div className="absolute top-0 left-0 w-full z-10 px-8 py-8 bg-gradient-to-b from-black">
//       <img
//         className="w-44"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg
// "
//         alt="logo"
//       />
//     </div>
//   );
// }

// export default Header;
import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-28 sm:w-36 md:w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
      />
      <div className="flex p-2">
        <img
          className="w-12 h-12 "
          alt="usericon"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
        <button className="font-bold text-white">Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
