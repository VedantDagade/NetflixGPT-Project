import { Button } from "./ui/button";
import GptSearch from "./GptSearch";
import lang from "@/utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "@/utils/openai";
import { API_OPTIONS } from "@/utils/constant";
import { addGptMovieResult } from "@/utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const langKey = useSelector((Store) => Store.config.lang);


  //take moive and search tmdb
  const searchMovieTMDB = async(movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  } 

  const handleGptSearchClick = async () => {
    //make an api call to GPT Api and get Movie Results.

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + searchText.current.value + "only give me names of 5 movies, comma seperated like the example results given ahead. Example result: Interstellar, Inception, Avatar, KGF, RRR"

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery}],
    });

    if (!gptResults.choices) {
      alert("Something went wrong with GPT. Try again later.");
      return;
    }

    //give array of movies
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    //For each movie I will search TMDB API.

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    //console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));
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
