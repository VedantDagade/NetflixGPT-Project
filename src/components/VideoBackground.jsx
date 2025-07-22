
import useMovieTrailer from "@/hooks/useMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full scale-[1.25] -z-10">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${trailerVideo?.key}`}
          title="YouTube background"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};


export default VideoBackground;
