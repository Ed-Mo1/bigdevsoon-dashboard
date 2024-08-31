import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SidebarHead from "./SidebarHead";
import { sidebarItems } from "../../constants";
import ThemeSwitcher from "../ThemeSwitcher";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={{ width: isOpen ? "230px" : "75px" }}
      initial={{ width: "60px" , }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="flex flex-col border-r-2 dark:border-white-16 border-black-16 py-4 shadow-lg bg-white dark:bg-dark-blue  items-center gap-5 min-h-screen"
    >
      <SidebarHead isOpen={isOpen} setIsOpen={setIsOpen} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-2 divide-y-2 dark:divide-white-16 divide-black-16 mt-2 w-full"
      >
        {sidebarItems.map((item, index) => (
          <motion.ul
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className={`flex flex-col pt-2 ${
              isOpen ? "items-start" : "items-center"
            } gap-4 px-3`}
          >
            {item.map((item, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className={`sidebar-item ${
                  isOpen && "w-full"
                }  ${item.isActive && "text-blue bg-blue-20 "} `}
              >
                <item.Icon className="text-2xl flex-shrink-0" />
                <AnimatePresence mode="popLayout">
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg"
                    >
                      {item.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>
        ))}
      </motion.div>

      <ThemeSwitcher  isOpen={isOpen}/>
    </motion.div>
  );
};

export default SideBar;
