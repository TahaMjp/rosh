import { createContext, useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

const key = "SuC_yiyvIn01AbreK2D3npVFAzNWEVK_Vuxa4ezh-R4";

export const dataContext = createContext(null);
const App = () => {
  const [categories, setCategories] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [parameters, setParameters] = useState({
    query: "",
    topic: "",
    page: 1,
    perPage: 10,
    orderBy: "latest",
  });

  const fetchCategories = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/topics/?client_id=${key}`
      );
      const res = await data.json();
      const categorySlugs = res.map((elem) => elem.slug);
      setCategories(categorySlugs);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPhoto = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/photos/?client_id=${key}&page=${parameters.page}&per_page=${parameters.perPage}`
      );
      const res = await data.json();
      const photoData = res.map((elem) => ({
        userName: elem.user.name,
        userPic: elem.user.profile_image.large,
        userLink: elem.user.links.html,
        photoUrl: elem.urls.regular,
        photoAlt: elem.description || "No description", // fallback
      }));
      setPhotos(photoData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchPhoto();
  }, [parameters]);

  return (
    <dataContext.Provider
      value={{ categories, photos, setParameters, parameters }}
    >
      <Wrapper />
    </dataContext.Provider>
  );
};

export default App;
