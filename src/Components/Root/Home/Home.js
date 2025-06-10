import { useContext } from "react";
import ImageComponent from "../../ImageComponent/ImageComponent";
import { dataContext } from "../../App/App";

const Home = () => {
  const value = useContext(dataContext);

  return (
    <div className="w-full lg:columns-3 gap-3 p-2 flex flex-col lg:block">
      {value.photos.homePhotos.map((elem, index) => {
        return <ImageComponent data={elem} key={index} />;
      })}
    </div>
  );
};

export default Home;
