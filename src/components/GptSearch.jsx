import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "@/utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
        <img
          src={BACKGROUND_IMAGE}
          alt="Background"
          className="h-screen md:w-screen object-cover"
        />
      </div>
      <div className=" md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
