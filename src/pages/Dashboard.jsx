import DashboardHeader from "../components/DashboardHeader";
import { basicAnim, dashCardItems } from "../constants";
import DashCard from "../components/DashCard";
import SalesOverview from "../components/sales/SalesOverview";
import SalesRegion from "../components/sales/SalesRegion";
import UsersState from "../components/UsersState";
import Tabel from "../components/Tabel";
import { motion } from "framer-motion";
const Dashboard = () => {
  return (
    <div className="pb-10">
      <DashboardHeader />

      <div className="px-8 mt-10 max-lg:px-4 max-sm:px-4 grid gap-4 max-xl:grid-cols-2 max-md:grid-cols-1 xl:grid-cols-4 ">
        {dashCardItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={index}
          >
            <DashCard
              name={item.name}
              value={item.value}
              status={item.status}
              percentage={item.percentage}
            />
          </motion.div>
        ))}
      </div>

      {/* charts */}
      <motion.div
        variants={basicAnim}
        initial="initial"
        transition={{ delay: 0.4 }}
        animate="animate"
        className="grid grid-cols-1 xl:grid-cols-12 h-fit max-lg:px-4 px-8 max-sm:mt-5 gap-10 mt-10"
      >
        <div className="xl:col-span-8">
          <SalesOverview />
        </div>

        <div className="xl:col-span-4 h-full ">
          <SalesRegion />
        </div>
      </motion.div>

      <motion.div
        variants={basicAnim}
        initial="initial"
        transition={{ delay: 0.5 }}
        animate="animate"
        className="grid grid-cols-1 xl:grid-cols-12 h-fit max-lg:px-4 px-8 max-sm:mt-5 max-sm:gap-5 gap-10 mt-10"
      >
        <div className="xl:col-span-4">
          <UsersState />
        </div>
        <div className="xl:col-span-8 h-full">
          <Tabel />
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
