import { useContext } from "react";
import { dataContext } from "../../App/App";
import { Link } from "react-router-dom";

const Settings = () => {
  const { setParameters, parameters, categories } = useContext(dataContext);
  return (
    <div className="w-full  flex font-semibold tracking-wider">
      <div className="lg:w-6/12 lg:mx-auto w-full flex flex-col p-4 my-6">
        <p className="text-3xl mx-auto mb-2">Settings</p>
        <p className="text-2xl mx-auto capitalize mb-8 text-center lg:text-left">
          you can change all the parameters from here
        </p>
        <div className="flex lg:flex-wrap w-full lg:justify-around lg:flex-row gap-y-6 flex-col">
          <div className="lg:w-5/12 w-10/12 mx-auto lg:m-0 flex flex-col">
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
          <div className="lg:w-5/12 w-10/12 mx-auto lg:m-0 flex flex-col">
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
          <div className="lg:w-5/12 w-10/12 mx-auto lg:m-0 flex flex-col">
            <div className="flex justify-between">
              <label htmlFor="perPage" className="p-2 border-black border-2">
                perPage
              </label>
              <input
                type="number"
                name="perPage"
                id="perPage"
                className="p-2 border-y-2 border-black grow"
                max={30}
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
          <div className="lg:w-5/12 w-10/12 mx-auto lg:m-0 flex flex-col">
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
          <div className="lg:w-5/12 w-10/12 mx-auto lg:m-0 flex flex-col">
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
        <p className="text-2xl mx-auto capitalize my-8 text-center">
          Use this guide to explore different sections of the site and discover
          beautiful photos tailored to your interests.
        </p>
        <div className="flex flex-col w-full gap-y-6">
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={"/"}
          >
            <p className="text-xl">Homepage [ / ]</p>
            <p>
              Browse a wide collection of photos from all over. Scroll through
              pages and discover something new every time.
            </p>
          </Link>
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={"/topic"}
          >
            <p className="text-xl">All Topics – Random Mix [ /topic ]</p>
            <p>
              Want random photos from a mix of categories? This page shows you a
              variety of themed images — perfect if you’re just browsing or
              looking for inspiration.
            </p>
          </Link>
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={`/topic/${parameters.topic}`}
          >
            <p className="text-xl">Specific Topic Page [ /topic/:slug ]</p>
            <p>
              Looking for something specific? Use this route to view photos from
              a specific topic. <br /> Example URLs: <br />[ /topic/love ] ==
              shows photos about love <br />[ /topic/self-esteem ] == shows
              photos about self-esteem
            </p>
          </Link>
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={"/random"}
          >
            <p className="text-xl">Completely Random Photos [ /random ]</p>
            <p>
              Want a surprise? This page gives you completely random photos
              every time you visit. Perfect for creative sparks or mood boards.
            </p>
          </Link>
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={"/search"}
          >
            <p className="text-xl">Search Page (Default) [ /search ]</p>
            <p>
              Start your search here. You can enter any keyword to find related
              photos — from emotions to colors to abstract ideas.
            </p>
          </Link>
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={`/search/${parameters.query}`}
          >
            <p className="text-xl">Search Results Page [ /search/:slug ]</p>
            <p>
              After searching, this route shows the photos that match your
              keyword.
              <br /> Example URLs: <br />[ /search/nature ] == photos related to
              nature <br />[ /search/happiness ] == photos that match the word
              “happiness”
            </p>
          </Link>
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={"/settings"}
          >
            <p className="text-xl">Settings Page [ /settings ]</p>
            <p>
              Customize your experience here. Change how things look or behave
              based on your preferences.
            </p>
          </Link>
          <Link
            className="flex flex-col gap-y-2 border-y-2 p-3 border-black hover:text-white hover:bg-black"
            to={"/NotFound"}
          >
            <p className="text-xl">404 Page – Not Found [ /* ]</p>
            <p>
              Oops! If you typed the wrong link or followed a broken one, you’ll
              land on this page letting you know the route doesn’t exist.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
