import { useNavigate } from "react-router-dom";
import { Logo } from "@/utils/constant";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="relative h-screen w-full text-white overflow-hidden">
      {/* Background image */}
      <img
        src="https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
        alt="Netflix Banner"
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-0"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-10 px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
        <img
          className="w-28 sm:w-36 md:w-44"
          src={Logo}
          alt="NetflixGPT Logo"
        />
        <span className="text-sm sm:text-lg md:text-xl font-bold text-red-500 drop-shadow-md tracking-wide animate-pulse">
          Vedant Dagade Project 🚀
        </span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Welcome to <span className="text-red-600">NetflixGPT</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Smarter movie recommendations powered by AI. Find your next favorite
          film today.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-red-600 hover:bg-red-700 transition-all px-8 py-3 text-lg font-semibold rounded-full shadow-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
