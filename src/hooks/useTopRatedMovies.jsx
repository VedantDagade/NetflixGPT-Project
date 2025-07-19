import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";



// Custom hook to fetch and store Trending Movies
const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results)); 
    };

    getTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
