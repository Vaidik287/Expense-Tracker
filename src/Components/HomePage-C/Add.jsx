import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link
      to="/Add"
      className=" hover:cursor-pointer h-fit flex align-center justify-center relative mx-auto"
    >
      <div className="absolute bg-white h-14 w-14 z-20 border-t border-l-0 border-r-0 border-t-black rounded-full -top-3 drop-shadow-2xl"></div>
      <GoPlus className="h-12 w-12 z-30 bg-amber-300 rounded-full -translate-y-2 shadow-2xl active:bg-amber-500" />
    </Link>
  );
};

export default AddButton;
