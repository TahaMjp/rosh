import { Link } from "react-router-dom";

const FiltersBtn = () => {
  return (
    <Link
      className="px-2 py-1 border-2 border-black font-semibold tracking-wide hover:bg-black hover:text-white"
      to={"/Settings"}
    >
      <p className="hidden lg:block">Settings</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 lg:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.591 1.104c1.527-.878 3.304.899 2.426 2.426a1.724 1.724 0 001.104 2.591c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.104 2.591c.878 1.527-.899 3.304-2.426 2.426a1.724 1.724 0 00-2.591 1.104c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.591-1.104c-1.527.878-3.304-.899-2.426-2.426a1.724 1.724 0 00-1.104-2.591c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.104-2.591c-.878-1.527.899-3.304 2.426-2.426a1.724 1.724 0 002.591-1.104z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </Link>
  );
};

export default FiltersBtn;
