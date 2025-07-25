import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log(movies);
  if (!movies || movies.length === 0 || !movies[0]) {
    return null; // or show a loading state or fallback UI
  }

  return (
    <div className="py-5">
      <h1 className="text:lg md:text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden scrollbar-width-none">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
