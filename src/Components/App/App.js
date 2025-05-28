import { createContext, useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

const key = "SuC_yiyvIn01AbreK2D3npVFAzNWEVK_Vuxa4ezh-R4";

export const dataContext = createContext({});
const App = () => {
  const [categories, setCategories] = useState([]);
  const [photos, setPhotos] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/topics/?client_id=${key}`
      );
      const res = await data.json();
      res.map((elem) => {
        return setCategories((perv) => perv, categories.push(elem.slug));
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPhoto = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/photos/?client_id=${key}`
      );
      const res = await data.json();
      res.map((elem) => {
        return setPhotos(
          photos.push({
            userName: elem.user.name,
            userPic: elem.user.profile_image.large,
            userLink: elem.user.links.self,
          })
        );
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchPhoto();
  }, []);

  return (
    <dataContext.Provider value={{ categories, photos }}>
      <Wrapper />
    </dataContext.Provider>
  );
};

export default App;
