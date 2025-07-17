
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft , Play , Info } from "lucide-react";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 ">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <Button className="mx-4 text-lg " variant="secondary"> <Play /> Play</Button>
        <Button className="text-lg " variant="destructive"><Info /> More Info</Button>
      </div>
    </div>
  );
};

export default VideoTitle;