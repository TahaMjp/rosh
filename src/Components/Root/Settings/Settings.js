import { useContext } from "react";
import { dataContext } from "../../App/App";
import { Link } from "react-router-dom";

const Settings = () => {
  const { setParameters, parameters, categories } = useContext(dataContext);
  return (
    <div className="w-full  flex font-semibold tracking-wider">
      <div className="w-6/12 mx-auto  flex flex-col p-4 my-6">
        <p className="text-3xl mx-auto mb-2">Settings</p>
        <p className="text-2xl mx-auto capitalize mb-8">
          you can change all the parameters from here
        </p>
        <div className="flex flex-wrap w-full justify-around gap-y-6">
          <div className="w-5/12  flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="query" className="p-2 border-black border-2">
                Query
              </label>
              <input
                type="text"
                name="query"
                id="query"
                className="p-2 border-y-2 border-black grow"
                defaultValue={
                  parameters.query === "" ? "empty" : parameters.query
                }
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
          <div className="w-5/12  flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="page" className="p-2 border-black border-2">
                Page
              </label>
              <input
                type="number"
                name="page"
                id="page"
                className="p-2 border-y-2 border-black grow"
                defaultValue={
                  parameters.page === "" ? "empty" : parameters.page
                }
              />
              <button
                className="border-2 border-black hover:text-white hover:bg-black px-3"
                onClick={() => {
                  setParameters((prev) => ({
                    ...prev,
                    page: document.getElementById("page").value,
                  }));
                }}
              >
                Save
              </button>
            </div>
            <Link
              to={`/`}
              className="w-full text-center border-2 border-black py-2 mt-2 hover:bg-black hover:text-white"
            >
              Go To Home
            </Link>
          </div>
          <div className="w-5/12  flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="perPage" className="p-2 border-black border-2">
                perPage
              </label>
              <input
                type="number"
                name="perPage"
                id="perPage"
                className="p-2 border-y-2 border-black grow"
                defaultValue={
                  parameters.perPage === "" ? "empty" : parameters.perPage
                }
              />
              <button
                className="border-2 border-black hover:text-white hover:bg-black px-3"
                onClick={() => {
                  setParameters((prev) => ({
                    ...prev,
                    perPage: document.getElementById("perPage").value,
                  }));
                }}
              >
                Save
              </button>
            </div>
            <Link
              to={`/`}
              className="w-full text-center border-2 border-black py-2 mt-2 hover:bg-black hover:text-white"
            >
              Go To Home
            </Link>
          </div>
          <div className="w-5/12  flex flex-col">
            <div className="flex justify-between">
              <label
                for="Order"
                class=" text-gray-900 p-2 border-black border-2"
              >
                Order
              </label>
              <select
                id="Order"
                class="block p-2 border-y-2 border-black grow "
              >
                <option selected value="latest">
                  Latest
                </option>
                <option value="oldest">Oldest</option>
                <option value="popular">Popular</option>
                <option value="relevant">Relevant</option>
              </select>
              <button
                className="border-2 border-black hover:text-white hover:bg-black px-3"
                onClick={() => {
                  setParameters((prev) => ({
                    ...prev,
                    orderBy: document.getElementById("Order").value,
                  }));
                }}
              >
                Save
              </button>
            </div>
            <Link
              to={`/`}
              className="w-full text-center border-2 border-black py-2 mt-2 hover:bg-black hover:text-white"
            >
              Go To Home
            </Link>
          </div>
          <div className="w-11/12 mx-auto  flex flex-col">
            <div className="flex justify-between">
              <label
                for="topic"
                class=" text-gray-900 p-2 border-black border-2"
              >
                Order
              </label>
              <select
                id="topic"
                class="block p-2 border-y-2 border-black grow "
              >
                <option selected disabled value={parameters.topic}>
                  {parameters.topic === "" ? "empty" : parameters.topic}
                </option>
                {categories.map((elem, index) => {
                  return (
                    <option value={elem} key={index}>
                      {elem}
                    </option>
                  );
                })}
              </select>
              <button
                className="border-2 border-black hover:text-white hover:bg-black px-3"
                onClick={() => {
                  setParameters((prev) => ({
                    ...prev,
                    topic: document.getElementById("topic").value,
                  }));
                }}
              >
                Save
              </button>
            </div>
            <Link
              to={`/topic/${parameters.topic}`}
              className="w-full text-center border-2 border-black py-2 mt-2 hover:bg-black hover:text-white"
            >
              Go To Topic
            </Link>
          </div>
        </div>
        <p className="text-2xl mx-auto capitalize my-8">
          you can change all the parameters from here
        </p>
        <div className="flex flex-col w-full gap-y-6">
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">Homepage [ / ]</p>
            <p>
              This is the main page of the site. It shows a collection of
              general photos and includes pagination so users can browse through
              multiple pages of content.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">All Topics – Random Mix [ /topic ]</p>
            <p>
              This page shows photos randomly selected from various topics.
              Great for discovering new things or just getting inspired.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">Specific Topic Page [ /topic/:slug ]</p>
            <p>
              This shows photos related to a single, specific topic. <br />{" "}
              Example URLs: <br />[ /topic/love ] == shows photos about love{" "}
              <br />[ /topic/self-esteem ] == shows photos about self-esteem
            </p>
          </div>
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">Completely Random Photos [ /random ]</p>
            <p>
              Photos from all categories and topics, shown randomly every time.
              Totally unpredictable, always refreshing.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">Search Page (Default) [ /search ]</p>
            <p>
              This is the page where users can type a keyword to search for
              images. Until a keyword is entered, it remains a general search
              page.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">Search Results Page [ /search/:slug ]</p>
            <p>
              When a user performs a search, this page displays the actual
              results. <br /> Example URLs: <br />[ /search/nature ] == photos
              related to nature <br />[ /search/happiness ] == photos that match
              the word “happiness”
            </p>
          </div>
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">Settings Page [ /settings ]</p>
            <p>
              This page includes user or site settings like preferences, maybe
              language or display options. Simple but important.
            </p>
          </div>
          <div className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black">
            <p className="text-xl">404 Page – Not Found [ /* ]</p>
            <p>
              If a user goes to a route that doesn't exist, they will see a
              “Page Not Found” message from your NotFound component.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
