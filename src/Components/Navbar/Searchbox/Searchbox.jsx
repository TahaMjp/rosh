import Github from "./Github/Githubbtn";
import Searchinp from "./Searchinp/Searchinp";

const Searchbox = () => {
  return (
    <div className="w-full bg-yellow-400 flex p-2 justify-between">
      <Searchinp />
      <Github />
    </div>
  );
};

export default Searchbox;
