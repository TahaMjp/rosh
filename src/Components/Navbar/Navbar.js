import Categories from "./Categories/Categories";
import Searchbox from "./Searchbox/Searchbox";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full sticky top-0 bg-gray-500 z-10">
      <Searchbox />
      <Categories />
    </div>
  );
};

export default Navbar;
