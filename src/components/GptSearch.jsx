import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "@/utils/constant";



const GptSearch = () => {
  return (
    <div className="relative">
      <div className="absolute -z-10 ">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="w-screen h-full object-cover bg-gradient-to-r from-black"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
    
  
}

export default GptSearch;