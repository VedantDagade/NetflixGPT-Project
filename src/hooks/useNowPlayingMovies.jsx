import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";



// Custom hook to fetch and store now playing movies
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();

      // Update Redux store with fetched movies
      dispatch(addNowPlayingMovies(json.results));
    };

    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
