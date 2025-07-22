// import { Button } from "./ui/button";
// import GptSearch from "./GptSearch";
// import lang from "@/utils/languageConstant";
// import { useDispatch, useSelector } from "react-redux";
// import { useRef } from "react";
// import openai from "@/utils/openai";
// import { API_OPTIONS } from "@/utils/constant";
// import { addGptMovieResult } from "@/utils/gptSlice";

// const GptSearchBar = () => {
//   const searchText = useRef(null);
//   const dispatch = useDispatch();

//   const langKey = useSelector((Store) => Store.config.lang);


//   //take moive and search tmdb
//   const searchMovieTMDB = async(movie) => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/search/movie?query=" + movie +"&include_adult=false&language=en-US&page=1", API_OPTIONS
//     );

//     const json = await data.json();

//     return json.results;
//   } 

//   const handleGptSearchClick = async () => {
//     //make an api call to GPT Api and get Movie Results.

//     const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query: " + searchText.current.value + "only give me names of 5 movies, comma seperated like the example results given ahead. Example result: Interstellar, Inception, Avatar, KGF, RRR"

//     const gptResults = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: gptQuery}],
//     });

//     if (!gptResults.choices) {
//       alert("Something went wrong with GPT. Try again later.");
//       return;
//     }

//     //give array of movies
//     const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

//     //For each movie I will search TMDB API.

//     const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

//     const tmdbResults = await Promise.all(promiseArray);

//     //console.log(tmdbResults);

//     dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));
//   };

//   return (
//     <div className="pt-[35%] md:pt-[10%] flex justify-center ">
//       <form
//         className="w-full md:w-1/2 bg-black grid grid-cols-12 items-center p-2 gap-10 rounded-lg"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <input
//           ref={searchText}
//           type="text"
//           className="p-4 bg-white col-span-8 rounded-lg border-2 border-blue-600"
//           placeholder={lang[langKey].GptSearchPlaceholder}
//         />
//         <div className="col-span-2 flex items-center justify-center">
//           <Button
//             className="p-6"
//             variant="destructive"
//             onClick={handleGptSearchClick}
//           >
//             {lang[langKey].search}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default GptSearchBar;



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

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      searchText.current.value +
      " only give me names of 5 movies, comma separated like the example results given ahead. Example result: Interstellar, Inception, Avatar, KGF, RRR";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices) {
      alert("Something went wrong with GPT. Try again later.");
      return;
    }

    const gptMovies =
      gptResults.choices?.[0]?.message?.content.split(",") || [];

    const promiseArray = gptMovies.map((movie) =>
      searchMovieTMDB(movie.trim())
    );

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center px-4">
      <form
        className="w-full md:w-1/2 bg-black p-2 rounded-lg flex items-center gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="flex-grow p-3 bg-white rounded-lg border-2 border-blue-600"
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <Button
          className="px-4 py-2 text-sm"
          variant="destructive"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </Button>
      </form>
    </div>
  );
};

export default GptSearchBar;
