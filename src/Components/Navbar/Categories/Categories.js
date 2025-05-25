import { useContext } from "react";
import { dataContext } from "../../App/App";
import Category from "./Category/Category";

const Categories = () => {
  const value = useContext(dataContext);

  return (
    <div className="bg-blue-400 flex p-2 gap-x-4">
      {value.map((elem, index) => {
        return <Category key={index} category={elem} />;
      })}
    </div>
  );
};

export default Categories;
