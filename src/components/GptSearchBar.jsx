import { Button } from "./ui/button";
import GptSearch from "./GptSearch";
import lang from "@/utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  
  const langKey = useSelector(Store => Store.config.lang);

  return (
    <div className="pt-[12%] flex justify-center ">
      <form className="w-1/2 bg-black grid grid-cols-12 items-center p-4 gap-2 rounded-lg">
        <input
          type="text"
          className="p-4 bg-white col-span-10 rounded"
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <div className="col-span-2 flex items-center justify-center">
          <Button className="p-6" variant="destructive">
            {lang[langKey].search}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
