import { useEffect, useState } from "react";
import NavBar2 from "../Components/AddingPage-C/Navbar-2";
import Expense from "../Components/AddingPage-C/Expense";
import Income from "../Components/AddingPage-C/Income";
import InputField from "../Components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { itemDataActions } from "../store/itemDataSlice";

const AddingPage = () => {
  const [showInputField, setShowInputField] = useState(false);
  const [category, setCategory] = useState("");
  const [selectedTab, setSelectedTab] = useState("Expense");

  const [moneyValue, setMoneyValue] = useState("");
  const dispatch = useDispatch();
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");

  const getToday = () => {
    const date = new Date();

    return date.toISOString().split("T")[0];
  };

  const handleSubmit = () => {
    const newMoneyValue = eval(moneyValue);

    const moneyAmount = Number(newMoneyValue);

    dispatch(
      itemDataActions.addItem({
        id: new Date().getTime(),
        type: selectedTab,
        category: category,
        amount: moneyAmount,
        date: date,
        note: note,
      }),
    );

    setMoneyValue(newMoneyValue);
  };

  return (
    <>
      <NavBar2 selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Expense" ? (
        <Expense
          setShowInputField={setShowInputField}
          setCategory={setCategory}
        />
      ) : (
        <Income
          setShowInputField={setShowInputField}
          setCategory={setCategory}
        />
      )}

      {showInputField && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
            onClick={() => setShowInputField(false)}
          >
            <div
              className=" shadow-2xl z-50 "
              onClick={(e) => e.stopPropagation()}
            >
              <InputField
                selectedTab={selectedTab}
                moneyValue={moneyValue}
                setNote={setNote}
                setMoneyValue={setMoneyValue}
                setDate={setDate}
                handleSubmit={handleSubmit}
                getToday={getToday}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddingPage;
