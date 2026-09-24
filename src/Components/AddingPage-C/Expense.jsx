import { BiDonateHeart, BiSolidBus } from "react-icons/bi";
import { FaHeartbeat, FaPlane, FaTv } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { GiGraduateCap, GiShoppingCart } from "react-icons/gi";
import { GoTools } from "react-icons/go";
import {
  IoCarSportOutline,
  IoGameControllerOutline,
  IoPeopleSharp,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { LuCarrot, LuDice5, LuDog, LuHouse, LuSofa } from "react-icons/lu";
import {
  PiCherries,
  PiForkKnife,
  PiPersonSimpleRunLight,
  PiPopcorn,
  PiTShirtLight,
} from "react-icons/pi";
import { RxScissors } from "react-icons/rx";
import { TbMoodKid } from "react-icons/tb";

const Expense = ({ setShowInputField, setCategory }) => {
  

  return (
    <>
      <div className="grid grid-cols-4 row-auto gap-1 text-xs font-medium justify-items-center p-2">
        <div className="flex items-center justify-items-center flex-col">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Shopping");
            console.log("clicked");
          }}
          >
            <GiShoppingCart className="h-5 w-5 text-gray-600" />
          </div>
          Shopping
        </div>
        <div className="flex items-center justify-items-center flex-col">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Food");
          }}
          >
            <PiForkKnife className="h-5 w-5 text-gray-600" />
          </div>
          Food
        </div>
        <div className="flex items-center justify-items-center flex-col">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Phone");
          }}
          >
            <IoPhonePortraitOutline className="h-5 w-5 text-gray-600" />
          </div>
          Phone
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Entertainment");
          }}
          >
            <IoGameControllerOutline className="h-5 w-5 text-gray-600" />
          </div>
          Entertainment
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Education");
          }}
          >
            <GiGraduateCap className="h-5 w-5 text-gray-600" />
          </div>
          Education
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Beauty");
          }}
          >
            <RxScissors className="h-5 w-5 text-gray-600" />
          </div>
          Beauty
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Sports");
          }}
          >
            <PiPersonSimpleRunLight className="h-5 w-5 text-gray-600" />
          </div>
          Sports
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Social");
          }}
          >
            <IoPeopleSharp className="h-5 w-5 text-gray-600" />
          </div>
          Social
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Transportation");
          }}
          >
            <BiSolidBus className="h-5 w-5 text-gray-600" />
          </div>
          Transportation
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Clothing");
          }}
          >
            <PiTShirtLight className="h-5 w-5 text-gray-600" />
          </div>
          Clothing
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Car");
          }}
          >
            <IoCarSportOutline className="h-5 w-5 text-gray-600" />
          </div>
          Car
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Electronics");
          }}
          >
            <FaTv className="h-5 w-5 text-gray-600" />
          </div>
          Electronics
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Travel");
          }}
          >
            <FaPlane className="h-5 w-5 text-gray-600" />
          </div>
          Travel
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Health");
          }}
          >
            <FaHeartbeat className="h-5 w-5 text-gray-600" />
          </div>
          Health
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Pets");
          }}
          >
            <LuDog className="h-5 w-5 text-gray-600" />
          </div>
          Pets
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Repairs");
          }}
          >
            <GoTools className="h-5 w-5 text-gray-600" />
          </div>
          Repairs
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Housing");
          }}
          >
            <LuHouse className="h-5 w-5 text-gray-600" />
          </div>
          Housing
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Home");
          }}
          >
            <LuSofa className="h-5 w-5 text-gray-600" />
          </div>
          Home
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Gifts");
          }}
          >
            <FiGift className="h-5 w-5 text-gray-600" />
          </div>
          Gifts
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Donations");
          }}
          >
            <BiDonateHeart className="h-5 w-5 text-gray-600" />
          </div>
          Donations
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Lottery");
          }}
          >
            <LuDice5 className="h-5 w-5 text-gray-600" />
          </div>
          Lottery
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Snacks");
          }}
          >
            <PiPopcorn className="h-5 w-5 text-gray-600" />
          </div>
          Snacks
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Kids");
          }}
          >
            <TbMoodKid className="h-5 w-5 text-gray-600" />
          </div>
          Kids
        </div>
        <div className="flex items-center justify-items-center flex-col">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Vegetables");
          }}
          >
            <LuCarrot className="h-5 w-5 text-gray-600" />
          </div>
          Vegetables
        </div>
        <div className="flex items-center justify-items-center flex-col ">
          <div
            className="w-8 h-8 rounded-full border-none bg-gray-200 grid place-content-center hover:cursor-pointer active:bg-indigo-300"
            onClick={() => {
            setShowInputField((prev) => !prev);
            setCategory("Fruits");
          }}
          >
            <PiCherries className="h-5 w-5 text-gray-600" />
          </div>
          Fruits
        </div>
      </div>
    </>
  );
};

export default Expense;
