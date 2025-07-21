import { Button } from "./ui/button";
import GptSearch from "./GptSearch";
import lang from "@/utils/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "@/utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const langKey = useSelector((Store) => Store.config.lang);

  const handleGptSearchClick = async () => {
    //make an api call to GPT Api and get Movie Results.

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + searchText.current.value + "only give me names of 5 movies, comma seperated like the example results given ahead. Example result: Interstellar, Inception, Avatar, KGF, RRR"

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery}],
    });

    console.log(gptResults.choices);
  };

  return (
    <div className="pt-[12%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12 items-center p-4 gap-2 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 bg-white col-span-10 rounded-lg border-2 border-blue-600"
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <div className="col-span-2 flex items-center justify-center">
          <Button
            className="p-6"
            variant="destructive"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
