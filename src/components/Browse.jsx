import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";


const Browse = () => {
  
  useNowPlayingMovies();
  
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