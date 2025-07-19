import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //if movie is null then return
  // if(!movies) return;
  // const mainMovie = movies[12];


  // Return nothing if movies are not loaded yet
  if (!movies || movies.length === 0) return null;

  // Pick a random index
  const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];


  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative z-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
