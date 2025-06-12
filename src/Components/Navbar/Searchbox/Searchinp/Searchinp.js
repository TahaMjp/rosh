import { useContext } from "react";
import { dataContext } from "../../../App/App";
import { useNavigate } from "react-router-dom";

const Searchinp = () => {
  const { setParameters } = useContext(dataContext);
  const Navigate = useNavigate();
  const SearchElement = document.getElementById("SearchInp");
  const sendData = () => {
    if (SearchElement.value.trim() === "") {
      alert("Please enter a search term.");
      return;
    } else {
      setParameters((prev) => ({ ...prev, query: SearchElement.value }));
      Navigate(`/search/${SearchElement.value}`);
    }
  };
  return (
    <div className="lg:w-7/12 w-10/12">
      <input
        type="text"
        id="SearchInp"
        name="SearchInp"
        className="lg:w-11/12 w-9/12 p-1 border-2 border-black font-semibold tracking-wide"
        placeholder="Search ..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendData();
          }
        }}
        onFocus={() => {
          SearchElement.value = "";
        }}
      />
      <button
        className="border-2 border-black py-1 px-2 tracking-wide font-semibold mx-2 hover:bg-black hover:text-white cursor-pointer"
        onClick={sendData}
      >
        Search
      </button>
    </div>
  );
};

export default Searchinp;
