import { createContext, useEffect, useState } from "react";
import "../../output.css";
import Wrapper from "../Wrapper/Wrapper";

export const dataContext = createContext({});
const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products/categories");
      const res = await data.json();
      setCategories(res);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const res = await data.json();
      setProducts(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  return (
    <dataContext.Provider value={{ categories, products }}>
      <Wrapper />
    </dataContext.Provider>
  );
};

export default App;
