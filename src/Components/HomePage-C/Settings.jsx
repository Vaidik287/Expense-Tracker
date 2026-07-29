import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const SettingsButton = () => {
  return (
    <Link
      to="/settings"
      className="hover:cursor-pointer h-fit flex items-center justify-items-center flex-col"
    >
      <IoSettingsSharp className="h-10 w-10 active:bg-gray-200 border-none rounded-full" />
      <div className="text-xs">Settings</div>
    </Link>
  );
};

export default SettingsButton;
