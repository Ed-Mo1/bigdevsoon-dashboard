import face from "../assets/Group 213.svg";
import { motion } from "framer-motion";
import { basicAnim } from "../constants";

const DashboardHeader = () => {
  return (
    <motion.div
      variants={basicAnim}
      initial="initial"
      transition={{delay: 0}}
      animate="animate"
      className=" max-sm:px-4 px-8 border-b-2 dark:border-white-16 border-black-16  flex justify-between items-center shadow-lg bg-white dark:bg-dark-blue"
    >
      <h2 className="header-l">Dashboard</h2>
      <div className="ps-12 py-4 border-black-16 dark:border-white-16 border-l-2">
        <img src={face} alt="icon" className="w-[35px] aspect-square" />
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
