import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [story, setStory] = useState({});
  const fetchStory = async () => {
    try {
      const data = await fetch("https://shortstories-api.onrender.com");
      const res = await data.json();
      setStory(res);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };
  useEffect(() => {
    fetchStory();
  }, []);
  return (
    <div className=" flex flex-col tracking-wide font-semibold my-5 items-center">
      <div className="w-6/12 flex flex-col items-center justify-center gap-y-2 py-3 border-b-2 border-black">
        <p className="text-5xl w-full text-center">Page Not Found</p>
        <p className="text-2xl w-full text-center">
          Instead Of Editing The Url Read A Short Story And Take A Break
        </p>
      </div>
      <div className="w-6/12 my-4 py-2 flex flex-col gap-y-3">
        <p className="text-2xl mx-auto capitalize">{story.title}</p>
        <p className="text-lg w-8/12 mx-auto capitalize text-balance border-b-2 pb-4 border-black">
          {story.story}
        </p>

        <p className="text-lg w-8/12 mx-auto capitalize border-b-2 pb-4 border-black">
          moral : {story.moral}
        </p>
        <p className="text-base w-8/12 mx-auto capitalize">
          author : {story.author}
        </p>
      </div>
      <Link
        className="text-lg border-2 border-black mx-auto p-4 mt-2 hover:bg-black hover:text-white"
        to="/"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound;
