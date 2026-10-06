import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state) => state.itemData.items);

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
