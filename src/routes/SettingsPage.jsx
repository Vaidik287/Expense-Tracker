import { BiSolidTrashAlt } from "react-icons/bi";
import { HiDocumentCurrencyRupee } from "react-icons/hi2";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { itemDataActions } from "../store/itemDataSlice";

const SettingsPage = () => {
  const [openCurrency, setOpenCurrency] = useState(false);
  const [openDeleteAll, setOpenDeleteAll] = useState(false);
  const dispatch = useDispatch();

  const handleOpenCurrency = () => {
    setOpenCurrency(true);
  };
  const handleCloseCurrency = () => {
    setOpenCurrency(false);
  };

  const handleOpenDeleteAll = () => {
    setOpenDeleteAll(true);
  };
  const handleCloseDeleteAll = () => {
    setOpenDeleteAll(false);
  };

  const handleUsCurrency = () => {
    dispatch(itemDataActions.changeCurrencyToUSDollar());
    console.log("button is working......");
  };

  const handleIndiaCurrency = () => {
    dispatch(itemDataActions.changeCurrencyToINR());
    console.log("button is working......");
  };

  const handleDeleteAll = () => {
    dispatch(itemDataActions.deleteAll());
  };

  return (
    <>
      <div className="grid grid-rows-3 col-auto">
        <div className="flex items-center justify-items-center justify-center bg-indigo-400 h-[5vh]">
          <Link to="/" className="fixed left-2">
            <MdOutlineKeyboardBackspace className="h-6 w-6 border-none rounded-full active:bg-indigo-500" />
          </Link>
          <div>Settings</div>
        </div>

        {/* DEFAULT CURRENCY BUTTON */}

        <div
          onClick={handleOpenCurrency}
          className="border-b border-b-gray-400 hover:cursor-pointer active:bg-gray-200 pt-1 pb-1 bg-white flex items-center gap-2 pl-0.5"
        >
          <HiDocumentCurrencyRupee className="fill-indigo-400" />
          <label>Default Currency</label>
          <div className="fixed right-2 text-gray-400">{">"}</div>
        </div>
        <Dialog
          className="gap-1 border-none rounded-2xl"
          open={openCurrency}
          onClose={handleCloseCurrency}
        >
          <DialogTitle className="pt-2.5 pb-2.5 pl-6 pr-6">
            {"Select A Currency"}
          </DialogTitle>
          <DialogContent className="pt-0 pb-0 pl-6 pr-6">
            <List>
              <ListItemButton
                className="font-semibold"
                onClick={() => {
                  handleUsCurrency();
                  handleCloseCurrency();
                }}
              >
                $ USA Dollar
              </ListItemButton>
              <ListItemButton
                className="font-semibold"
                onClick={() => {
                  handleIndiaCurrency();
                  handleCloseCurrency();
                }}
              >
                ₹ Indian Rupee
              </ListItemButton>
            </List>
          </DialogContent>
          <DialogActions className="pb-1.5 pr-1.5">
            <Button onClick={handleCloseCurrency} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>

        {/* DELETE ALL BUTTON */}

        <div
          onClick={handleOpenDeleteAll}
          className="border-b border-b-gray-400 hover:cursor-pointer active:bg-gray-200 pt-1 pb-1 bg-white flex items-center gap-2 pl-0.5"
        >
          <BiSolidTrashAlt className="fill-indigo-400" />
          Delete all data
          <div className="fixed right-2 text-gray-400">{">"}</div>
        </div>
        <Dialog
          className="gap-1 border-none rounded-xl text-xs"
          open={openDeleteAll}
          onClose={handleCloseDeleteAll}
        >
          <DialogTitle className="text-xs">
            {"Do You Want to Delete All Items ?"}
          </DialogTitle>

          <DialogActions className="p-0">
            <Button
              onClick={() => handleDeleteAll() && handleCloseDeleteAll()}
              color="primary"
            >
              <Link to="/">Yes</Link>
            </Button>
            <Button onClick={handleCloseDeleteAll} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
        <Link
          to="/settings/about"
          className="border-b border-b-gray-400 hover:cursor-pointer active:bg-gray-200 pt-1 pb-1 bg-white flex items-center gap-2 pl-0.5"
        >
          <BsQuestionCircle className="fill-indigo-400" />
          About
          <div className="fixed right-2 text-gray-400">{">"}</div>
        </Link>
      </div>
    </>
  );
};

export default SettingsPage;
