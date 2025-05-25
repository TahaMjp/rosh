import Categories from "./Categories/Categories";
import Searchbox from "./Searchbox/Searchbox";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      <Searchbox />
      <Categories />
    </div>
  );
};

export default Navbar;
