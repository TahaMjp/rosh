const Category = (category) => {
  return (
    <button className="border-2 border-black hover:bg-black hover:text-white tracking-wide font-semibold px-2 py-1">
      {category.category}
    </button>
  );
};

export default Category;
