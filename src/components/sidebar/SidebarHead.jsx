import { IoArrowBackOutline } from "react-icons/io5";
import logo from "../../assets/logo.svg";

const SidebarHead = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`flex ${isOpen ? "px-3" : "px-2"} w-full items-center justify-between gap-1`}>
      <div className="flex flex-shrink-0  gap-3 items-center">
        <img
          src={logo}
          alt="logo"
          className="flex-shrink-0 w-[30px] aspect-square"
        />
        {isOpen && <h3 className="text-lg text-blue font-bold">FinData</h3>}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 text-sm border-black-16 dark:border-white-16 border-2 rounded-lg"
      >
        <IoArrowBackOutline
          className={`${
            !isOpen && "rotate-180"
          } duration-500 transition-transform dark:text-white`}
        />
      </button>
    </div>
  );
};

export default SidebarHead;
