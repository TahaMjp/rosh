const ImageComponent = ({ data }) => {
  return (
    <div className="flex relative group mb-4 ">
      <img src={data.photoUrl} alt={data.photoAlt} className="w-full h-auto" />
      <div className="absolute w-full bg-black h-full opacity-0 group-hover:opacity-60 transition-opacity"></div>
      <a
        className="absolute w-full h-full text-white hidden flex-col items-center justify-center gap-y-4 group-hover:flex transition-transform"
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
