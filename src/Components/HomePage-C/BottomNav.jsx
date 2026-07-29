import AddButton from "./Add";
import HomeButton from "./Home";
import SettingsButton from "./Settings";

const BottomNav = () => {
  return (
    <>
      <div className="grid grid-cols-3 row-auto justify-items-center fixed bottom-0 left-0 right-0 border border-gray-500">
        <HomeButton />
        <AddButton />
        <SettingsButton />
      </div>
    </>
  );
};

export default BottomNav;
