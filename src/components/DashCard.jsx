import { FaArrowUp } from "react-icons/fa6";

import { motion } from "framer-motion";
const DashCard = ({ name, value, status, percentage }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-3 pb-5 rouned-lg dark:bg-dark-blue rounded-lg bg-white shadow-lg"
    >
      <h4 className="header-s ">{name}</h4>
      <h2 className="mt-2 header-xl">{value}</h2>

      <div className="flex gap-2 items-center  mt-5">
        <div
          className={`${
            status === "inc"
              ? "dark:bg-dark-green bg-light-green"
              : "dark:bg-dark-red bg-light-red"
          } flex items-center h-fit gap-3 py-1 px-2 rounded`}
        >
          <FaArrowUp className={`${status !== "inc" && "rotate-180"}`} />
          <span>{percentage}%</span>
        </div>
        <h5 className="dark:text-white-60 text-black-60 text-sm">
          Compared to last month
        </h5>
      </div>
    </motion.div>
  );
};

export default DashCard;
