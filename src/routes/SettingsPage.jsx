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

const SettingsPage = () => {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("INDIAN_RUPEE");

  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleToClose = () => {
    setOpen(false);
  };

  const handleUsCurrency = () => {
    setCurrency("USA_DOLLAR");
  };

  const handleIndiaCurrency = () => {
    setCurrency("INDIAN_RUPEE");
  };

  return (
    <>
      <div className="grid grid-rows-3 col-auto">
        <div className="flex items-center justify-items-center justify-center bg-amber-300 h-[5vh]">
          <Link to="/" className="fixed left-2">
            <MdOutlineKeyboardBackspace className="h-6 w-6 border-none rounded-full active:bg-amber-400" />
          </Link>
          <div>Settings</div>
        </div>
        <div
          onClick={handleClickToOpen}
          className="border-b border-b-gray-400 hover:cursor-pointer active:bg-gray-200 pt-1 pb-1 bg-white flex items-center gap-2 pl-0.5"
        >
          <HiDocumentCurrencyRupee className="fill-amber-300" />
          <label>Default Currency</label>
          <div className="fixed right-2 text-gray-400">{">"}</div>
        </div>
        <Dialog
          className="gap-1 border-none rounded-2xl"
          open={open}
          onClose={handleToClose}
        >
          <DialogTitle className="pt-2.5 pb-2.5 pl-6 pr-6">
            {"Select A Currency"}
          </DialogTitle>
          <DialogContent className="pt-0 pb-0 pl-6 pr-6">
            <List>
              <ListItemButton
                className="font-semibold"
                onClick={handleUsCurrency}
              >
                $ USA Dollar
              </ListItemButton>
              <ListItemButton
                className="font-semibold"
                onClick={handleIndiaCurrency}
              >
                ₹ Indian Rupee
              </ListItemButton>
            </List>
          </DialogContent>
          <DialogActions className="pb-1.5 pr-1.5">
            <Button onClick={handleToClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <div className="border-b border-b-gray-400 hover:cursor-pointer active:bg-gray-200 pt-1 pb-1 bg-white flex items-center gap-2 pl-0.5">
          <BiSolidTrashAlt className="fill-amber-300" />
          Delete all data
          <div className="fixed right-2 text-gray-400">{">"}</div>
        </div>
        <Link
          to="/settings/about"
          className="border-b border-b-gray-400 hover:cursor-pointer active:bg-gray-200 pt-1 pb-1 bg-white flex items-center gap-2 pl-0.5"
        >
          <BsQuestionCircle className="fill-amber-300" />
          About
          <div className="fixed right-2 text-gray-400">{">"}</div>
        </Link>
      </div>
    </>
  );
};

export default SettingsPage;
