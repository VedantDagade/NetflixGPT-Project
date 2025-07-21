import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  
  const {movieResults , movieNames} = useSelector(store => store.gpt)
  
  if(!movieNames) return null;

  return (
    <div className="p-5 m-5 mt-20  h-[100%] bg-black/90 ">
      {movieNames.map((movieNames, index) => (
        <MovieList
          key={movieNames}
          title={movieNames}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
