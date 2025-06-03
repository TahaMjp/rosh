import { Link } from "react-router-dom";

const FiltersBtn = () => {
  return (
    <Link
      className="px-2 py-1 border-2 border-black font-semibold tracking-wide hover:bg-black hover:text-white"
      to={"/Settings"}
    >
      Settings
    </Link>
  );
};

export default FiltersBtn;
