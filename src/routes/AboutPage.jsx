import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="grid items-center justify-items-center grid-rows-3 h-screen">
      <div className="h-1/4">
        <Link to="/settings" className="fixed left-2 top-2">
          <MdOutlineKeyboardBackspace className="h-6 w-6 border-none rounded-full active:bg-gray-200" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-items-center h-1/2 gap-0">
        <div className="text-2xl font-bold">Expense Tracker</div>
        <div className="text-xs font-semibold">Version 1.0</div>
      </div>
      <div className="h-1/4"></div>
    </div>
  );
};

export default AboutPage;
