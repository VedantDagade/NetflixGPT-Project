import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  //console.log(movies);

  return (
    movies.trendingMovies && (
      <div className="bg-black">
        <div className="-mt-45 pl-12 relative z-20">
          <MovieList title={"Trending"} movies={movies.trendingMovies} />

          <MovieList title={"Now Playing (New Release)"} movies={movies.nowPlayingMovies} />

          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

          <MovieList title={"Popular"} movies={movies.popularMovies}/>

          <MovieList title={"Upcoming Movies"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
