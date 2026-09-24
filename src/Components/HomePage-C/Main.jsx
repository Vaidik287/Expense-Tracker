import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import { itemDataActions } from "../../store/itemDataSlice";

const Main = () => {
  const data = useSelector((state) => state.itemData.items);
  const currency = useSelector((state) => state.itemData.currency);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-min flex flex-col text-[15px] font-medium">
      {data.map((item) => (
        <div className="flex" key={item.id}>
          <Link
            to={`/Details/${item.id}`}
            className="flex justify-between active:bg-gray-300 pl-3 pr-3 pt-1 w-[98%]"
          >
            <div className="flex justify-between">
              <div>{item.note}</div>
            </div>
            <div className="flex justify-between">
              <div>{currency + item.amount}</div>
            </div>
          </Link>
          <div>
            <div
              className=" hover:cursor-pointer border-none mt-1.5 rounded-bl-[5px] rounded-tl-[5px] active:bg-gray-300 grid content-center justify-center w-6"
              onClick={handleClickToOpen}
            >
              <MdDelete />
            </div>

            <Dialog
              className="gap-1 border-none rounded-xl text-xs"
              open={open}
              onClose={handleToClose}
            >
              <DialogTitle className="text-xs">
                {"Do You Want to Delete This Item ?"}
              </DialogTitle>

              <DialogActions className="p-0">
                <Button
                  onClick={() =>
                    dispatch(itemDataActions.deleteItem(item.id)) &&
                    setOpen(false)
                  }
                  color="primary"
                >
                  OK
                </Button>
                <Button onClick={handleToClose} color="primary">
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
