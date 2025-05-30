import { createContext, useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

const key = "SuC_yiyvIn01AbreK2D3npVFAzNWEVK_Vuxa4ezh-R4";

export const dataContext = createContext(null);
const App = () => {
  const [categories, setCategories] = useState([]);
  const [photos, setPhotos] = useState({
    homePhotos: [],
    topicPhotos: [],
    searchPhotos: [],
    randomPhotos: [],
  });
  const [parameters, setParameters] = useState({
    query: "",
    topic: "",
    page: 1,
    perPage: 12,
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
        `https://api.unsplash.com/photos/?client_id=${key}&page=${parameters.page}&per_page=${parameters.perPage}&order_by=${parameters.orderBy}`
      );
      const res = await data.json();
      const photoData = res.map((elem) => ({
        userName: elem.user.name,
        userPic: elem.user.profile_image.large,
        userLink: elem.user.links.html,
        photoUrl: elem.urls.regular,
        photoAlt: elem.description || "No description",
      }));
      setPhotos((prev) => ({
        ...prev,
        homePhotos: photoData,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRandom = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/photos/random?client_id=${key}&count=${parameters.perPage}`
      );
      const res = await data.json();
      const photoData = res.map((elem) => ({
        userName: elem.user.name,
        userPic: elem.user.profile_image.large,
        userLink: elem.user.links.html,
        photoUrl: elem.urls.regular,
        photoAlt: elem.description || "No description",
      }));
      setPhotos((prev) => ({
        ...prev,
        randomPhotos: photoData,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTopicPhoto = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/topics/${parameters.topic}/photos?client_id=${key}&page=${parameters.page}&per_page=${parameters.perPage}&order_by=${parameters.orderBy}`
      );
      const res = await data.json();
      const photoData = res.map((elem) => ({
        userName: elem.user.name,
        userPic: elem.user.profile_image.large,
        userLink: elem.user.links.html,
        photoUrl: elem.urls.regular,
        photoAlt: elem.description || "No description",
      }));
      setPhotos((prev) => ({
        ...prev,
        topicPhotos: photoData,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSearch = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${key}&page=${parameters.page}&per_page=${parameters.perPage}&query=${parameters.query}&order_by=${parameters.orderBy}`
      );
      const res = await data.json();
      const photoData = res.results.map((elem) => ({
        userName: elem.user.name,
        userPic: elem.user.profile_image.large,
        userLink: elem.user.links.html,
        photoUrl: elem.urls.regular,
        photoAlt: elem.description || "No description",
      }));
      setPhotos((prev) => ({
        ...prev,
        searchPhotos: photoData,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Reset page to 1 if certain parameters change
  useEffect(() => {
    setParameters((prev) => {
      if (prev.page !== 1) {
        return { ...prev, page: 1 };
      }
      return prev;
    });
  }, [
    parameters.query,
    parameters.topic,
    parameters.orderBy,
    parameters.perPage,
  ]);

  // Fetch photos according to topic or default
  useEffect(() => {
    if (parameters.topic !== "") {
      fetchTopicPhoto();
    } else {
      fetchRandom();
      fetchPhoto();
    }
  }, [parameters.page, parameters.topic, parameters.perPage]);

  useEffect(() => {
    if (parameters.query !== "") {
      fetchSearch();
    } else {
      fetchRandom();
      fetchPhoto();
    }
  }, [parameters.page, parameters.topic, parameters.perPage, parameters.query]);

  return (
    <dataContext.Provider
      value={{ categories, photos, setParameters, parameters, fetchRandom }}
    >
      <Wrapper />
    </dataContext.Provider>
  );
};

export default App;
