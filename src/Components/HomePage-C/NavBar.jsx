import { useState } from "react";
import { IoMdCalendar } from "react-icons/io";
import { Outlet, useParams } from "react-router-dom";
import CalendarDateComponent from "../DatePicker";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const { id } = useParams();
  const data = useSelector((state) => state.itemData.items);

  const item = data.find((item) => item.id === Number(id));

  const expenses = data.filter((item) => item.type === "Expense");
  const reduceExpenses = expenses.reduce(
    (total, item) => total + Number(item.amount),
    0,
  );

  const income = data.filter((item) => item.type === "Income");
  const reduceIncome = income.reduce(
    (total, item) => total + Number(item.amount),
    0,
  );

  const realExpenses = Number(reduceExpenses);
  const realIncome = Number(reduceIncome);

  const balance = realIncome - realExpenses;
  const realbalance = Number(balance);

  return (
    <>
      <div className=" bg-indigo-400 text-2xl grid grid-cols-5 row-auto p-2">
        <div className="font-bold col-span-4 text-center">Money Tracker</div>
        <IoMdCalendar
          className="hover:cursor-pointer p-1 size-max col-start-6 rounded-2xl bg-indigo-300 active:bg-indigo-500"
          onClick={() => setShowCalendar((prev) => !prev)}
        />
        {showCalendar && (
          <>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
              onClick={() => setShowCalendar(false)}
            >
              <div
                className=" bg-white rounded-xl shadow-2xl p-4 z-50 "
                onClick={(e) => e.stopPropagation()}
              >
                <CalendarDateComponent
                  value={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date);

                    setTimeout(() => {
                      setShowCalendar(false);
                    }, 500);
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bg-indigo-400 grid grid-cols-4 row-auto pr-2 pl-2 text-center font-medium">
        <div>2026</div>
        <div>Expenses</div>
        <div>Income</div>
        <div>Balance</div>
        <div>June</div>
        <div>{realExpenses}</div>
        <div>{realIncome}</div>
        <div>{realbalance}</div>
      </div>
    </>
  );
};

export default Navbar;
