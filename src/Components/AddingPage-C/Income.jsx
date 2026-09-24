import { GoTrophy } from "react-icons/go";
import { LuChartLine } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { PiCoinsLight } from "react-icons/pi";
import { RiHandCoinLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Income = ({ setShowInputField, setCategory }) => {
  const data = useSelector((state) => state.itemData.items);

  return (
    <div className="grid grid-cols-4 row-auto text-xs font-medium p-2 gap-1">
      <div className="flex items-center justify-items-center flex-col">
        <div
          onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Salary");
          }}
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
        >
          <MdWorkOutline className="h-5 w-5 text-gray-600" />
        </div>
        Salary
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
          onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Investments");
          }}
        >
          <LuChartLine className="h-5 w-5 text-gray-600" />
        </div>
        Investments
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
          onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Part-time");
          }}
        >
          <RiHandCoinLine className="h-5 w-5 text-gray-800" />
        </div>
        Part-time
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
          onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Bonus");
          }}
        >
          <GoTrophy className="h-5 w-5 text-gray-800" />
        </div>
        Bonus
      </div>
      <div className="flex items-center justify-items-center flex-col">
        <div
          className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
          onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Others");
          }}
        >
          <PiCoinsLight className="h-5 w-5 text-gray-800" />
        </div>
        Others
      </div>
    </div>
  );
};

export default Income;
