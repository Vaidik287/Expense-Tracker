import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar2 = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <div className="bg-amber-300 flex items-center justify-center flex-col w-screen">
        <Link to="/" className="fixed left-2">
          <MdOutlineKeyboardBackspace className="h-9 w-9 active:bg-amber-400 rounded-full border-none" />
        </Link>
        <div className="text-center font-bold p-2">Add</div>
        <div className="grid grid-cols-2 row-auto divide-x border rounded-md w-1/2 mb-2 text-center">
          <div
            className={
              selectedTab === "Expense"
                ? "text-center text-amber-300 border-l rounded-l-md bg-black text-xl pl-3 pr-3 hover:cursor-pointer"
                : "text-center text-xl pl-3 pr-3 hover:cursor-pointer"
            }
            onClick={() => {
              setSelectedTab("Expense");
            }}
          >
            Expense
          </div>
          <div
            className={
              selectedTab === "Income"
                ? "text-center text-amber-300 border-r rounded-r-md bg-black text-xl pl-3 pr-3 hover:cursor-pointer"
                : "text-center text-xl pl-3 pr-3 hover:cursor-pointer"
            }
            onClick={() => {
              setSelectedTab("Income");
            }}
          >
            Income
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar2;
