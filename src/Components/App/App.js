import { createContext, useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

export const dataContext = createContext(null);
const App = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/categories");
      const res = await data.json();
      setCategories(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <dataContext.Provider value={categories}>
      <Wrapper />
    </dataContext.Provider>
  );
};

export default App;
