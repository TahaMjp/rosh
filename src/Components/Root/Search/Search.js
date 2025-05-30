import { useContext } from "react";
import ImageComponent from "../../ImageComponent/ImageComponent";
import { dataContext } from "../../App/App";

const Search = () => {
  const value = useContext(dataContext);

  return (
    <div className="w-full columns-3 gap-3 p-2">
      {value.photos.searchPhotos.length !== 0 &&
        value.photos.searchPhotos.map((elem, index) => {
          return <ImageComponent data={elem} key={index} />;
        })}
    </div>
  );
};

export default Search;
