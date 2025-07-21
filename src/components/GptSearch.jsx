import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "@/utils/constant";



const GptSearch = () => {
  return (
    <div className="relative">
      <div className="fixed -z-10 ">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="w-[100vw] h-[100vh] object-cover"
        />
      </div>
      
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
    
  
}

export default GptSearch;