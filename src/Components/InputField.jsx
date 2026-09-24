import { LuDelete } from "react-icons/lu";
import { Link } from "react-router-dom";

const InputField = ({
  moneyValue,
  setNote,
  setMoneyValue,
  setDate,
  handleSubmit,
  getToday,
}) => {
  return (
    <div className="grid grid-rows-2 col-auto gap-2 w-[20vw] p-2 rounded-xl bg-gray-200">
      <input
        type="text"
        inputMode="numeric"
        readOnly
        value={moneyValue}
        className="text-right p-3 text-[1.10rem] focus:outline-none text-black"
      />
      <input
        type="text"
        placeholder="Enter A Note..."
        onChange={(e) => setNote(e.target.value)}
        className="p-3 border rounded-lg bg-white focus:outline-none border-none"
      />
      <div className="grid grid-rows-4 grid-cols-4 gap-1 font-normal text-black">
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "7")}
        >
          7
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "8")}
        >
          8
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "9")}
        >
          9
        </div>
        <div
          className="flex justify-center items-center justify-items-center bg-white border-none text-xs rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setDate(getToday())}
        >
          Today
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "4")}
        >
          4
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "5")}
        >
          5
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "6")}
        >
          6
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "+")}
        >
          +
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "1")}
        >
          1
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "2")}
        >
          2
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "3")}
        >
          3
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "-")}
        >
          -
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + ".")}
        >
          .
        </div>
        <div
          className="flex justify-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => setMoneyValue(moneyValue + "0")}
        >
          0
        </div>
        <div
          className="flex justify-center items-center justify-items-center bg-white border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={() => {
            setMoneyValue(moneyValue.slice(0, -1));
          }}
        >
          <LuDelete />
        </div>
        <Link
          to="/"
          className="flex justify-center bg-gray-400 border-none text-xl rounded-xs hover:cursor-pointer active:bg-gray-100"
          onClick={handleSubmit}
        >
          ✓
        </Link>
      </div>
    </div>
  );
};

export default InputField;
