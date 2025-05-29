import FiltersBtn from "./FiltersBtn/FiltersBtn";
import Searchinp from "./Searchinp/Searchinp";

const Searchbox = () => {
  return (
    <div className="w-full flex p-2 justify-between">
      <Searchinp />
      <FiltersBtn />
    </div>
  );
};

export default Searchbox;
