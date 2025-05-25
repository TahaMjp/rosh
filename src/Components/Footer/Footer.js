import Image from "../../Images/TahaMajlesi.jpg";

const Footer = () => {
  return (
    <div className="bg-red-400 flex w-full relative bottom-0 justify-between p-2 font-semibold">
      <a
        className="w-3/12 flex tracking-wide border-2 border-black hover:text-white hover:bg-black bg-white"
        href="https://github.com/TahaMjp"
      >
        <img src={Image} alt="Taha Majlesi Pour Logo" className="w-4/12" />
        <div className="w-full flex flex-col p-3 gap-y-1 justify-center">
          <p className="text-lg">Taha Majlesi Pour</p>
          <p>Front-End Developer</p>
          <p>Who write codes at morning and plays dota2 at night.</p>
        </div>
      </a>
      <div className="w-8/12 bg-violet-400 flex p-2">test</div>
    </div>
  );
};

export default Footer;
