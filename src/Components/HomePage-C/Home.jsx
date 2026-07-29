import { TbHome } from "react-icons/tb";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link
      to="/"
      className="hover:cursor-pointer h-fit flex items-center justify-items-center flex-col"
    >
      <TbHome className="h-10 w-10 active:bg-gray-200 border-none rounded-full" />
      <div className="text-xs">Home</div>
    </Link>
  );
};

export default HomeButton;
