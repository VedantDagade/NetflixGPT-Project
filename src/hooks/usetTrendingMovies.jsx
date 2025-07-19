import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

// Custom hook to fetch and store Trending Movies
const useTrendingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetch(
        //"https://api.themoviedb.org/3/trending/movie/week?language=en-US", // ✅ trending endpoint
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTrendingMovies(json.results)); // ✅ correct action
    };

    getTrendingMovies();
  }, [dispatch]);
};

export default useTrendingMovies;
