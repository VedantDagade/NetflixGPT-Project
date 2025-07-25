import { API_OPTIONS } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "@/utils/movieSlice";

const useUpcomingMOvies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    };

    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMOvies;
