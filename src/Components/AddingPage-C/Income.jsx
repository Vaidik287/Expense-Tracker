import { GoTrophy } from "react-icons/go";
import { LuChartLine } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { PiCoinsLight } from "react-icons/pi";
import { RiHandCoinLine } from "react-icons/ri";

const Income = ({ setShowInputField }) => {
  return (
    <div className="grid grid-cols-4 row-auto text-xs font-medium p-2 gap-1">
      <div className="flex items-center justify-items-center flex-col">
        <div
          onClick={() => setShowInputField((prev) => !prev)}
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-yellow-300"
        >
          <MdWorkOutline className="h-5 w-5 text-gray-600" />
        </div>
        Salary
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-yellow-300"
          onClick={() => setShowInputField((prev) => !prev)}
        >
          <LuChartLine className="h-5 w-5 text-gray-600" />
        </div>
        Investments
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-yellow-300"
          onClick={() => setShowInputField((prev) => !prev)}
        >
          <RiHandCoinLine className="h-5 w-5 text-gray-800" />
        </div>
        Part-time
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-yellow-300"
          onClick={() => setShowInputField((prev) => !prev)}
        >
          <GoTrophy className="h-5 w-5 text-gray-800" />
        </div>
        Bonus
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-yellow-300"
          onClick={() => setShowInputField((prev) => !prev)}
        >
          <PiCoinsLight className="h-5 w-5 text-gray-800" />
        </div>
        Others
      </div>
    </div>
  );
};

export default Income;
