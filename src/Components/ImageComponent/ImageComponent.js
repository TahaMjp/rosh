const ImageComponent = ({ data }) => {
  return (
    <div className="flex relative group mb-4 lg:flex-row flex-col">
      <a
        className="w-full flex gap-x-3 py-2 lg:hidden"
        href={data.userLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={data.userPic}
          alt={data.userName}
          className="rounded-full w-1/12"
        />
        <p className="font-semibold text-lg flex items-center">
          {data.userName}
        </p>
      </a>
      <img
        src={data.photoUrl}
        alt={data.photoAlt}
        className="w-full h-auto lg:block hidden"
      />
      <a href={data.userLink} className="w-full h-auto">
        <img
          src={data.photoUrl}
          alt={data.photoAlt}
          className="w-full h-auto lg:hidden block"
        />
      </a>
      <div className="absolute w-full bg-black h-full opacity-0 group-hover:opacity-60 transition-opacity lg:flex hidden"></div>
      <a
        className="absolute w-full h-full text-white hidden flex-col items-center justify-center gap-y-4 lg:group-hover:flex transition-transform"
        href={data.userLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={data.userPic} alt={data.userName} className="rounded-full " />
        <p className="font-semibold text-lg">{data.userName}</p>
      </a>
    </div>
  );
};

export default ImageComponent;
