import { useState } from "react";
import NavBar2 from "../Components/AddingPage-C/Navbar-2";
import Expense from "../Components/AddingPage-C/Expense";
import Income from "../Components/AddingPage-C/Income";
import InputField from "../Components/InputField";

const AddingPage = () => {
  const [selectedTab, setSelectedTab] = useState("Expense");
  const [showInputField, setShowInputField] = useState(false);

  return (
    <>
      <NavBar2 selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "Expense" ? (
        <Expense
          showInputField={showInputField}
          setShowInputField={setShowInputField}
        />
      ) : (
        <Income
          showInputField={showInputField}
          setShowInputField={setShowInputField}
        />
      )}

      {showInputField && (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
            onClick={() => setShowInputField(false)}
          >
            <div
              className=" bg-white shadow-2xl z-50 "
              onClick={(e) => e.stopPropagation()}
            >
              <InputField />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddingPage;
