import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.jsx";


const Browse = () => {
  
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      browse
    </div>
  )
};

export default Browse;