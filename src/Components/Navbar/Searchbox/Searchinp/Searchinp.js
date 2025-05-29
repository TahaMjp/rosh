import { useContext } from "react";
import { dataContext } from "../../../App/App";

const Searchinp = () => {
  const { setParameters } = useContext(dataContext);

  const sendData = () => {
    const searchVal = document.getElementById("SearchInp").value;
    if (searchVal.trim() === "") {
      alert("Please enter a search term.");
      return;
    } else {
      setParameters((prev) => ({ ...prev, query: searchVal }));
    }
  };
  return (
    <div className="w-7/12">
      <input
        type="text"
        id="SearchInp"
        name="SearchInp"
        className="w-11/12 p-1 border-2 border-black font-semibold tracking-wide"
        placeholder="Search ..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendData();
          }
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
