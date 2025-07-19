
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft , Play , Info } from "lucide-react";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-4 sm:px-8 md:px-12 text-white absolute bg-gradient-to-r from-black/80 h-screen">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl w-full sm:w-2/3 md:w-1/2">
        {title}
      </h1>

      <p className="py-4 sm:py-6 text-base sm:text-lg w-full sm:w-2/3 md:w-1/3">
        {overview}
      </p>

      <div className="flex flex-wrap gap-4">
        <Button className="text-base sm:text-lg" variant="default">
          <Play /> Play
        </Button>
        <Button className="text-base sm:text-lg" variant="destructive">
          <Info /> More Info
        </Button>
      </div>
    </div>
  );
};

export default VideoTitle;