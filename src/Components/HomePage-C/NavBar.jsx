import { useState } from "react";
import { IoMdCalendar } from "react-icons/io";
import { Outlet } from "react-router-dom";
import CalendarDateComponent from "../DatePicker";

const Navbar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <div className=" bg-amber-300 text-2xl grid grid-cols-5 row-auto p-2">
        <div className="font-bold col-span-4 text-center">Money Tracker</div>
        <IoMdCalendar
          className="hover:cursor-pointer p-1 size-max col-start-6 rounded-2xl border-amber-300 active:bg-amber-500"
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

      <div className="bg-amber-300 grid grid-cols-4 row-auto pr-2 pl-2 text-center">
        <div>2026</div>
        <div>Expenses</div>
        <div>Income</div>
        <div>Balance</div>
        <div>June</div>
        <div>12,000</div>
        <div>0</div>
        <div>-12,000</div>
      </div>
    </>
  );
};

export default Navbar;
