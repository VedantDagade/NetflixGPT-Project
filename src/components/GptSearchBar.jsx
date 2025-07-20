import { Button } from "./ui/button";
import GptSearch from "./GptSearch";


const GptSearchBar = () => {


  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12 items-center p-4 gap-2 rounded-lg">
        <input
          type="text"
          className="p-4 bg-white col-span-10 rounded"
          placeholder="What would you like to watch today?"
        />
        <div className="col-span-2 flex items-center justify-center">
          <Button className="p-6" variant="destructive">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
