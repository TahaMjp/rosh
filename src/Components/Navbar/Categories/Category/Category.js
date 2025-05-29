import { useContext } from "react";
import { dataContext } from "../../../App/App";

const Category = (category) => {
  const { setParameters } = useContext(dataContext);

  return (
    <button
      className="border-2 border-black hover:bg-black hover:text-white tracking-wide font-semibold px-2 py-1"
      onClick={() => {
        setParameters((prev) => ({ ...prev, topic: category.category }));
      }}
    >
      {category.category}
    </button>
  );
};

export default Category;
