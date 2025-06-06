import { useContext } from "react";
import { dataContext } from "../App/App";
import { useNavigate } from "react-router-dom";

const Pagination = () => {
  const { setParameters, parameters } = useContext(dataContext);
  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const Navigate = useNavigate();
  return (
    <div className="w-2/12 my-6 mx-auto flex justify-between font-semibold">
      <button
        className="border-2 border-black py-2 px-3 hover:bg-black hover:text-white"
        onClick={() => {
          setParameters((prev) => ({ ...prev, page: prev.page + 1 }));
          goTop();
          Navigate(`/page${parameters.page}`);
        }}
      >
        Perv
      </button>
      <div className="border-2 border-black flex items-center justify-center w-3/12">
        {parameters.page}
      </div>
      <button
        className="border-2 border-black py-2 px-3 hover:bg-black hover:text-white"
        onClick={() => {
          setParameters((prev) => ({ ...prev, page: prev.page + 1 }));
          goTop();
          Navigate(`/page=${parameters.page}`);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
