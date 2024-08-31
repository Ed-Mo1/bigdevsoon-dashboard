import{ useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import { MdSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AnimatePresence ,motion} from "framer-motion";



const ThemeSwitcher = ({isOpen}) => {
  const { themeToggle } = useContext(ThemeContext);

  return (
    <div
      className={` ${
        isOpen ? "px-5 justify-between" : "justify-center"
      }  w-full flex mt-5   items-center`}
    >
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-lg text-black-60 dark:text-white-60"
          >
            Dark
          </motion.span>
        )}
        <button
          onClick={themeToggle}
          className="block relative  w-[70px] h-[32px] bg-blue rounded-full"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-yellow dark:hidden absolute top-1/2 left-[22%] -translate-x-1/2 -translate-y-1/2"
          >
            <MdSunny />
          </motion.span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-2xl dark:block hidden text-yellow absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2"
          >
            <MdDarkMode />
          </motion.span>

          <span
            className={`absolute left-[60%]  dark:left-[4%] transition-all duration-300 block top-1/2 -translate-y-1/2 w-[25px] aspect-square bg-white rounded-full `}
          />
        </button>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-lg text-black-60 dark:text-white-60"
          >
            Light
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
