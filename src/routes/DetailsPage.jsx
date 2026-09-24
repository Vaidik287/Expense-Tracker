import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const DetailsPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.itemData.items);
  const currency = useSelector((state) => state.itemData.currency);

  const item = data.find((item) => item.id === Number(id));

  return (
    <>
      <div className="grid justify-center">
        <div className="bg-indigo-400 w-screen h-9 flex items-center justify-center">
          <Link to="/" className="fixed top-2 left-2">
            <MdOutlineKeyboardBackspace className="h-6 w-6 border-none rounded-full active:bg-indigo-500" />
          </Link>
          <div>Details</div>
        </div>

        <div
          key={item.id}
          className="grid grid-rows-4 pl-3 pr-3 pt-1 gap-2.5 justify-start active:bg-gray-300"
        >
          <div className="flex items-center justify-center font-bold">
            <span>{item.category}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-800">Type</span>
            <span>{item.type}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-800">Date</span>
            <span>{item.date}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-800">Amount</span>
            <span>{currency + item.amount}</span>
          </div>
          <div className="grid grid-cols-2">
            <span className="text-gray-800">Note</span>
            <span>{item.note}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
