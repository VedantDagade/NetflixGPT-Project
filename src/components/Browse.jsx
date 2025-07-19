import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "@/hooks/usePopularMovies.jsx";
import useTrendingMovies from "@/hooks/usetTrendingMovies.jsx";
import useUpcomingMOvies from "@/hooks/useUpcomingMovies.jsx";
import useTopRatedMovies from "@/hooks/useTopRatedMovies.jsx";


const Browse = () => {
  
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  useUpcomingMOvies();
  useTopRatedMovies();
  
  return (
   
    <div className="relative">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/*
        Main Container 
          - VideoBackground
          - VideoTitle
        Secondary Conatainer
          - MovieList * n
            - Cards * n
      */}
    </div>
  )
};

export default Browse;