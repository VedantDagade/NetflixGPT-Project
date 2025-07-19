import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";



// Custom hook to fetch and store Popular Movies movies
const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      //console.log(json);
      // Update Redux store with fetched movies
      dispatch(addPopularMovies(json.results));
    };

    getPopularMovies();
  }, [dispatch]);
};


export default usePopularMovies;
