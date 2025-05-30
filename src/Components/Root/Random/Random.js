import { useContext } from "react";
import ImageComponent from "../../ImageComponent/ImageComponent";
import { dataContext } from "../../App/App";

const Random = () => {
  const value = useContext(dataContext);

  return (
    <div className="w-full columns-3 gap-3 p-2">
      {value.photos.randomPhotos.map((elem, index) => {
        return <ImageComponent data={elem} key={index} />;
      })}
    </div>
  );
};

export default Random;
