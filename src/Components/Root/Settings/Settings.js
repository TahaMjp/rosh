import { useContext } from "react";
import { dataContext } from "../../App/App";
import { Link } from "react-router-dom";

const Settings = () => {
  const { setParameters, parameters } = useContext(dataContext);
  return (
    <div className="w-full bg-green-400 flex font-semibold tracking-wider">
      <div className="w-6/12 mx-auto bg-amber-400 flex p-4 my-6">
        <div className="w-5/12 bg-blue-500 flex flex-col">
          <div className="flex justify-between">
            <label htmlFor="query" className="p-2 border-black border-2">
              Query
            </label>
            <input
              type="text"
              name="query"
              id="query"
              className="p-2 border-2 border-black"
              defaultValue={parameters.query}
            />
            <button
              className="border-2 border-black hover:text-white hover:bg-black px-3"
              onClick={() => {
                setParameters((prev) => ({
                  ...prev,
                  query: document.getElementById("query").value,
                }));
              }}
            >
              Save
            </button>
          </div>
          <Link
            to={`/search/${parameters.query}`}
            className="w-full text-center border-2 border-black py-2 mt-2 hover:bg-black hover:text-white"
          >
            Go To Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
