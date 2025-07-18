
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft , Play , Info } from "lucide-react";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 ">
      <h1 className="font-bold text-6xl w-1/2">{title}</h1>
      <p className="py-6 text-lg ">{overview}</p>
      <div className="">
        <Button className="mx-4 text-lg " variant="default"><Play/> Play</Button>
        <Button className="text-lg " variant="destructive"><Info /> More Info</Button>
      </div>
    </div>
  );
};

export default VideoTitle;