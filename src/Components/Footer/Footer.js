import { useContext } from "react";
import Image from "../../Images/TahaMajlesi.jpg";
import { dataContext } from "../App/App";
import Category from "../Navbar/Categories/Category/Category";

const Footer = () => {
  const value = useContext(dataContext);
  return (
    <div className="flex w-full relative bottom-0 lg:justify-between flex-col lg:flex-row p-2 font-semibold border-t-2 mt-10">
      <a
        className="lg:w-3/12 w-10/12 flex mx-auto lg:m-0 tracking-wide border-2 border-black hover:text-white hover:bg-black bg-white"
        href="https://github.com/TahaMjp"
      >
        <img src={Image} alt="Taha Majlesi Pour Logo" className="w-4/12" />
        <div className="w-full flex flex-col p-3 gap-y-1 justify-center">
          <p className="text-lg">Taha Majlesi Pour</p>
          <p>Front-End Developer</p>
          <p>Who write codes at morning and plays dota2 at night.</p>
        </div>
      </a>
      <div className="lg:w-8/12 w-10/12 flex lg:flex-row flex-col p-2 lg:justify-between mx-auto lg:m-0">
        <div className="lg:w-5/12 w-full lg:m-0 flex lg:gap-4 gap-2 flex-wrap">
          {value.categories.map((elem, index) => {
            return <Category key={index} category={elem} />;
          })}
        </div>
        <div className="lg:w-5/12 w-full flex gap-y-2 mt-2 flex-col tracking-wider">
          <p className="text-center lg:text-left">Project Description:</p>
          <p>
            A personal image library built with React, showcasing high-quality
            photos sourced directly from{" "}
            <a href="https://unsplash.com/" className="underline">
              Unsplash
            </a>
            . This project serves as a minimalist, user-friendly gallery to
            explore random images, search by keywords, and browse topics — all
            powered by the Unsplash API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
