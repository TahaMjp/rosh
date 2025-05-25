const Searchinp = () => {
  return (
    <div className="w-7/12">
      <input
        type="text"
        id="SearchInp"
        name="SearchInp"
        className="w-11/12 p-1 border-2 border-black font-semibold tracking-wide"
        placeholder="Search ..."
      />
      <button className="border-2 border-black py-1 px-2 tracking-wide font-semibold mx-2 hover:bg-black hover:text-white cursor-pointer">
        Search
      </button>
    </div>
  );
};

export default Searchinp;
